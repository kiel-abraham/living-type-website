import React from 'react';
import { Row, Col } from 'reactstrap';
import Banner from '../components/banner';

const HomePage = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  return (
    <div>
      <Banner
        visible={frontmatter.banner.visible}
        fullWidth={frontmatter.banner.fullWidth}
        title={frontmatter.banner.title}
        subtitle={frontmatter.banner.subtitle}
        button={frontmatter.banner.button}
        buttonLink={frontmatter.banner.buttonLink}
        buttonColour={frontmatter.banner.buttonColour}
        align={frontmatter.banner.align}
      />

      <section className="container mt-4">
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
        banner {
          visible
          fullWidth
          align
          title
          subtitle
          button
          buttonLink
          buttonColour
        }
      }
    }
  }
`;