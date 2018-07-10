import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Row, Col } from 'reactstrap';

const ContactPage = ({ data }) => {
    const page = data.allMarkdownRemark.edges[0].node;
  const metaTitle = page.frontmatter.title + " | " + data.site.siteMetadata.title;
return (
  <div>
    <Helmet title={metaTitle} />
    <section className="container">
      <Row>
        <Col>
          <h1>{page.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </Col>
      </Row>
    </section>
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
    allMarkdownRemark (
      filter: { frontmatter: { pageType: { eq: "contact" } }}
    ) {
      edges {
        node {
          html
          frontmatter {
            title
          }
        }
      }
    }
  }
`;