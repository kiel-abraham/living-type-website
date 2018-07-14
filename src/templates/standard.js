import React from 'react';
import Helmet from 'react-helmet';
import Hero from '../components/hero';
import { Row, Col } from 'reactstrap';

const StandardPage = ({ data }) => {
  return (
    <div>
      <Helmet title={`${data.markdownRemark.frontmatter.title} | ${data.site.siteMetadata.title}`} />

      {/*
      <Hero
        showHero={data.markdownRemark.frontmatter.hero}
        heroFull={data.markdownRemark.frontmatter.heroFull}
        heroTitle={data.markdownRemark.frontmatter.heroTitle}
        />
      */}
      
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
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;