import React from 'react';
import { graphql } from "gatsby"
import { Row, Col } from 'reactstrap';
import Banner from '../components/banner';
import Layout from '../components/layout';

const HomePage = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <Banner
        visible={frontmatter.banner.visible}
        fullWidth={frontmatter.banner.fullWidth}
        title={frontmatter.banner.title}
        subtitle={frontmatter.banner.subtitle}
        image={frontmatter.banner.image}
        overlay={frontmatter.banner.overlay}
        button={frontmatter.banner.button}
        buttonLink={frontmatter.banner.buttonLink}
        buttonColour={frontmatter.banner.buttonColour}
        align={frontmatter.banner.align}
      />

      <section className="container mt-4">
        <Row>
          <Col className={`text-${frontmatter.contentAlign}`}>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          </Col>
        </Row>
      </section>
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  query {
    markdownRemark(frontmatter: { homePage: { eq: true } }) {
      html
      frontmatter {
        title
        contentAlign
        banner {
          visible
          fullWidth
          align
          title
          subtitle
          image
          overlay
          button
          buttonLink
          buttonColour
        }
      }
    }
  }
`;