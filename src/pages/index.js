import React from 'react';
import { Row, Col } from 'reactstrap';
import Hero from '../components/hero';

const HomePage = ({ data }) => {
  return (
    <div>
      <Hero
        showHero={data.allMarkdownRemark.edges[0].node.frontmatter.hero}
        heroFull={data.allMarkdownRemark.edges[0].node.frontmatter.heroFull}
        heroTitle={data.allMarkdownRemark.edges[0].node.frontmatter.heroTitle}
        />

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
            heroTitle
          }
        }
      }
    }
  }
`;