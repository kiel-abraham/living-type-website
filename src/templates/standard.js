import React from 'react';
import { graphql } from "gatsby"
import UtilHelmet from '../components/utils/utilHelmet';
import Layout from '../components/layout';
import { Row, Col } from 'reactstrap';

const StandardPage = ({ data }) => (
  <Layout>
    <UtilHelmet data={data} />
    
    <section className="container mt-4">
      <Row>
        <Col className={`text-${data.markdownRemark.frontmatter.contentAlign}`}>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Col>
      </Row>
    </section>
  </Layout>
);

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
