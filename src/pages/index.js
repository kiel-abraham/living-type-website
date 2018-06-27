import React from 'react';
import Link from 'gatsby-link';
import { Row, Col, Jumbotron } from 'reactstrap'

const HomePage = ({ data }) => (
  <div>
    <Jumbotron>
      <h1 className="display-3">Welcome to THKR</h1>
      <p className="lead">THKR (Thinker) is an Australian based business helping people create fast, simple sites with custom assistance.</p>
      <hr className="my-2" />
      <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
      <p className="lead">
        <Link to="/about" className="btn btn-primary">Find Out More</Link>
      </p>
    </Jumbotron>
    <section className="container">
      <Row>
        <Col>
          <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />
        </Col>
      </Row>
    </section>
  </div>
)

export default HomePage

export const IndexQuery = graphql`
  query IndexQuery {
    allMarkdownRemark (
      filter: { frontmatter: { pageType: { eq: "homepage" } }}
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            pageType
          }
        }
      }
    }
  }
`;