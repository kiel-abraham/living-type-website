import React from 'react';
import { graphql } from "gatsby";
import Layout from '../components/layout';
import { Row, Col } from 'reactstrap';

const NotFoundPage = ({ data }) => (
  <Layout>
    <section className="container mt-4">
      <Row>
        <Col className={`text-${data.markdownRemark.frontmatter.contentAlign}`}>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Col>
      </Row>
    </section>
  </Layout>
)

export default NotFoundPage

export const query = graphql`
  query {
    markdownRemark(frontmatter: { page404: { eq: true } }) {
      html
      frontmatter {
        title
        contentAlign
      }
    }
  }
`;