import React from 'react';
import Helmet from 'react-helmet';
import Contact from '../components/contact';

const ContactPage = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  return (
    <div>
      <Helmet>
        <title>{`${frontmatter.title} | ${data.site.siteMetadata.title}`}</title>
        {frontmatter.metaDesc &&
          <meta name="description" content={frontmatter.metaDesc}/>
        }
      </Helmet>

      <Contact
        title={frontmatter.title}
        body={data.markdownRemark.html}
        phone={frontmatter.phone}
        email={frontmatter.email}
        address={frontmatter.address}
        formTitle={frontmatter.form.formTitle}
        buttonColor={frontmatter.form.buttonColor}
        buttonText={frontmatter.form.buttonText}
        inputs={frontmatter.inputs}
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
      }
    }
    markdownRemark(frontmatter: { pageType: { eq: "contact" } }) {
      html
      frontmatter {
        title
        metaDesc
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