import React from 'react';
import { Row, Col } from 'reactstrap';

const NotFoundPage = ({ data }) => (
  <section className="container mt-4">
    <Row>
      <Col className={`text-${data.markdownRemark.frontmatter.contentAlign}`}>
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Col>
    </Row>
  </section>
)

export default NotFoundPage

export const query404 = graphql`
  query query404 {
    markdownRemark(frontmatter: { page404: { eq: true } }) {
      html
      frontmatter {
        title
        contentAlign
      }
    }
  }
`;