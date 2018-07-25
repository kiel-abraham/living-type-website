import React from 'react';
import Helmet from 'react-helmet';
import Banner from '../components/banner';
import { Row, Col } from 'reactstrap';

const StandardPage = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  const space = true ? "mt-5" : "";
  return (
    <div>
      <Helmet title={`${frontmatter.title} | ${data.site.siteMetadata.title}`} />

      {/*
      <Hero
        showHero={data.markdownRemark.frontmatter.hero}
        heroFull={data.markdownRemark.frontmatter.heroFull}
        heroTitle={data.markdownRemark.frontmatter.heroTitle}
        />
      */}
      
      <section className={`container ${space}`}>
        <Row>
          <Col>
            <h1>{frontmatter.title}</h1>
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