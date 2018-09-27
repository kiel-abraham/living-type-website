import React from 'react';
import Contact from '../components/contact';
import UtilHelmet from '../components/utils/utilHelmet';

const ContactPage = ({ data }) => {
  const f = data.markdownRemark.frontmatter;
  return (
    <div>
      <UtilHelmet data={data} />

      <Contact
        title={f.title}
        body={data.markdownRemark.html}
        phone={f.phone}
        email={f.email}
        address={f.address}
        formTitle={f.form.formTitle}
        buttonColor={f.form.buttonColor}
        buttonText={f.form.buttonText}
        inputs={f.inputs}
      />
    </div>
  );
}

export default ContactPage

export const ContactQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(frontmatter: { pageType: { eq: "contact" } }) {
      html
      frontmatter {
        title
        slug
        metaDesc
        metaImage
        phone
        email
        address
        form {
          formTitle
          buttonColor
          buttonText
        }
        inputs {
          item {
            type
            name
            placeholder
            required
          }
        }
      }
    }
  }
`;
