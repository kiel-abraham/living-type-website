import React from 'react';
import Contact from '../../components/contact';

const ContactPreview = ({ entry, widgetFor }) => {
  return (
    <Contact
      title={entry.getIn(['data', 'title'])}
      body={entry.getIn(['data', 'body'])}
      phone={entry.getIn(['data', 'phone'])}
      email={entry.getIn(['data', 'email'])}
      address={entry.getIn(['data', 'address'])}
    />
  );
}

export default ContactPreview