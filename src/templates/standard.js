import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Jumbotron, Row, Col } from 'reactstrap';

const StandardPage = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter
  const metaTitle = frontmatter.title + " | " + data.site.siteMetadata.title;
  const heroFull = frontmatter.heroFull ? 'container-fluid' : 'container';
  return (
    <div>
      <Helmet title={metaTitle} />
      {frontmatter.hero &&
      <Jumbotron className={heroFull}>
        <h1 className="display-3">Standard Page</h1>
        <p className="lead">THKR (Thinker) is an Australian based business helping people create fast, simple sites with custom assistance.</p>
        <hr className="my-2" />
      </Jumbotron>
      }
      
      <section className="container">
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        hero
      }
    }
  }
`;