import React from 'react';
import { Row, Col } from 'reactstrap';
import Banner from '../components/banner';

const HomePage = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  const content = data.markdownRemark.html;
  return (
    <div>
      <Banner
        visible={frontmatter.hero.visible}
        fullWidth={frontmatter.hero.fullWidth}
        align={frontmatter.hero.align}
        title={frontmatter.hero.title}
        subtitle={frontmatter.hero.subtitle}
        button={frontmatter.hero.button}
        buttonColour={frontmatter.hero.buttonColour}
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
          visible
          fullWidth
          align
          title
          subtitle
          button
          buttonColour
        }
      }
    }
  }
`;