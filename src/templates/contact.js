import React from 'react';
import { graphql } from "gatsby";
import Helmet from 'react-helmet';
import Contact from '../components/contact';
import Layout from '../components/layout';

const ContactPage = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <Helmet>
        <title>{`${frontmatter.title} | ${data.site.siteMetadata.title}`}</title>
        <meta property="og:title" content={`${frontmatter.title} | ${data.site.siteMetadata.title}`}/>
        <meta property="og:url" content={data.site.siteMetadata.siteUrl + frontmatter.slug} />
        {frontmatter.metaDesc &&
          <meta name="description" content={frontmatter.metaDesc}/>
        }
        {frontmatter.metaDesc &&
          <meta property="og:description" content={frontmatter.metaDesc}/>
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
    </Layout>
  );
}

export default ContactPage

export const query = graphql`
  query {
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
