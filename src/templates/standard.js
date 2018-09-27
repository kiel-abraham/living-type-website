import React from 'react';
import UtilHelmet from '../components/utils/utilHelmet';
import { Row, Col } from 'reactstrap';

const StandardPage = ({ data }) => (
  <div>
    <UtilHelmet data={data} />
    
    <section className="container mt-4">
      <Row>
        <Col className={`text-${data.markdownRemark.frontmatter.contentAlign}`}>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Col>
      </Row>
    </section>
  </div>
);

export default StandardPage

export const query = graphql`
  query StandardPage($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields {
        slug
      }
      frontmatter {
        title
        slug
        contentAlign
        metaDesc
        metaImage
      }
    }
  }
`;
