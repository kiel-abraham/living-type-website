import React from 'react';
import { graphql } from "gatsby";
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import { Row, Col } from 'reactstrap';

const StandardPage = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  const slug = frontmatter.slug || data.markdownRemark.fields.slug;
  return (
    <Layout>
      <Helmet>
        <title>{`${frontmatter.title} | ${data.site.siteMetadata.title}`}</title>
        <meta property="og:title" content={`${frontmatter.title} | ${data.site.siteMetadata.title}`}/>
        <meta property="og:url" content={data.site.siteMetadata.siteUrl + slug} />
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
      
      <section className="container mt-4">
        <Row>
          <Col className={`text-${frontmatter.contentAlign}`}>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          </Col>
        </Row>
      </section>
    </Layout>
  );
}

export default StandardPage

export const query = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        slug
        contentAlign
        metaDesc
        metaImage
      }
    }
  }
`;
