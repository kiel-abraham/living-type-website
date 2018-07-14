import React from 'react';
import Helmet from 'react-helmet';
import { Row, Col } from 'reactstrap';

const ContactPage = ({ data }) => {
  const page = data.markdownRemark;
  const metaTitle = page.frontmatter.title + " | " + data.site.siteMetadata.title;
return (
  <div>
    <Helmet title={metaTitle} />

    <section className="container">
      <Row>
        <Col>
          <h1>{page.frontmatter.title}</h1>
          <div>{page.frontmatter.hero.heroTitle}</div>
          <div dangerouslySetInnerHTML={{ __html: page.html }} />
        </Col>
      </Row>
    </section>
  </div>
);
}

export default ContactPage

export const ContactQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { pageType: { eq: "contact" } }) {
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