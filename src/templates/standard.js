import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Row, Col } from 'reactstrap';

const StandardPage = ({ data }) => {
  const metaTitle = data.markdownRemark.frontmatter.title + " | " + data.site.siteMetadata.title;
return (
  <div>
    <Helmet title={metaTitle} />
    <section className="container">
      <Row>
        <Col>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Col>
      </Row>
    </section>
  </div>
);
}

export default StandardPage

export const query = graphql`
  query StandardPage($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;