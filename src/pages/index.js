import React from 'react';
import { Row, Col } from 'reactstrap';
import Banner from '../components/banner';

const HomePage = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  const space = frontmatter.hero.visible ? "" : "mt-5";
  return (
    <div>
      <Banner
        visible={frontmatter.hero.visible}
        fullWidth={frontmatter.hero.fullWidth}
        title={frontmatter.hero.title}
        subtitle={frontmatter.hero.subtitle}
        button={frontmatter.hero.button}
        buttonColour={frontmatter.hero.buttonColour}
        align={frontmatter.hero.align}
      />

      <section className={`container ${space}`}>
        <Row>
          <Col>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
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