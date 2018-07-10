import React from 'react';
import Link from 'gatsby-link';
import { Row, Col, Jumbotron } from 'reactstrap';
import Hero from '../components/hero';

const HomePage = ({ data }) => {
  return (
    <div>
      <Hero heroData={data.allMarkdownRemark.edges[0].node} />

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
}

export default HomePage

export const IndexQuery = graphql`
  query IndexQuery {
    allMarkdownRemark (
      filter: { frontmatter: { homePage: { eq: true } }}
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            hero
            heroFull
          }
        }
      }
    }
  }
`;