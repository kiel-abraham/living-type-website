import React from 'react';
import { Row, Col } from 'reactstrap';
import Hero from '../components/hero';

const HomePage = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  const content = data.markdownRemark.html;
  return (
    <div>
      <Hero
        showHero={frontmatter.hero.showHero}
        heroFull={frontmatter.hero.heroFull}
        heroTitle={frontmatter.hero.heroTitle}
        />

      <section className="container">
        <Row>
          <Col>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </Col>
        </Row>
      </section>
    </div>
  )
}

export default HomePage

export const IndexQuery = graphql`
  query IndexQuery {
    markdownRemark(frontmatter: { homePage: { eq: true } }) {
      html
      frontmatter {
        title
        hero {
          showHero
          heroFull
          heroTitle
        }
      }
    }
  }
`;