import { ActionError, defineAction } from 'astro:actions';
import { z } from 'astro/zod';
import { env } from 'cloudflare:workers';

const CONTACT_EMAIL_FROM = 'info@livingtype.band';
const CONTACT_EMAIL_TO = 'info@livingtype.band';

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return entities[character];
  });
}

export const server = {
  contact: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().trim().min(1).max(100),
      email: z.string().trim().email().max(254),
      message: z.string().trim().min(1).max(5000),
      'bot-field': z.string().optional(),
    }),
    handler: async ({ name, email, message, 'bot-field': botField }) => {
      if (botField?.trim()) {
        throw new ActionError({
          code: 'BAD_REQUEST',
          message: 'Unable to send your message.',
        });
      }

      const escapedName = escapeHtml(name);
      const escapedEmail = escapeHtml(email);
      const escapedMessage = escapeHtml(message).replace(/\r?\n/g, '<br>');

      try {
        await env.EMAIL.send({
          to: CONTACT_EMAIL_TO,
          from: CONTACT_EMAIL_FROM,
          replyTo: email,
          subject: 'Website contact form message',
          text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
          html: `<p><strong>Name:</strong> ${escapedName}</p><p><strong>Email:</strong> ${escapedEmail}</p><p>${escapedMessage}</p>`,
        });
      } catch (error) {
        console.error('Failed to send contact form email:', error);
        throw new ActionError({
          code: 'INTERNAL_SERVER_ERROR',
          message: 'Unable to send your message right now. Please try again later.',
        });
      }

      return { sent: true };
    },
  }),
};
