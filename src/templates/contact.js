import React from 'react';
import Helmet from 'react-helmet';
import Contact from '../components/contact';

const ContactPage = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  return (
    <div>
      <Helmet>
        <title>{`${frontmatter.title} | ${data.site.siteMetadata.title}`}</title>
        <meta property="og:title" content={`${frontmatter.title} | ${data.site.siteMetadata.title}`}/>
        <meta property="og:url" content={data.site.siteMetadata.siteUrl + frontmatter.slug} />
        {frontmatter.metaDesc &&
          <meta name="description" content={frontmatter.metaDesc}/>
        }
        {frontmatter.metaImage &&
          <meta property="og:image" content={data.site.siteMetadata.siteUrl + frontmatter.metaImage} />
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
        image={frontmatter.image}
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
        image
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