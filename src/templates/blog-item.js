import React from 'react';
import UtilHelmet from '../components/utils/utilHelmet';
import { Row, Col } from 'reactstrap';

const BlogItem = ({ data }) => (
  <div>
    <UtilHelmet data={data} />
    
    <section className="container mt-4">
      <Row className={`text-${data.markdownRemark.frontmatter.contentAlign}`}>
        <Col sm={12}>
          <h1>{data.markdownRemark.frontmatter.title}</h1>
        </Col>
        {data.markdownRemark.frontmatter.featuredImage &&
            <Col sm={3} className="order-sm-last">
                <img src={data.markdownRemark.frontmatter.featuredImage} alt={data.markdownRemark.frontmatter.title} className="img-fluid" />
            </Col>
        }
        <Col sm={9}>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
        </Col>
      </Row>
    </section>
  </div>
);

export default BlogItem

export const query = graphql`
  query BlogItem($slug: String!) {
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
        featuredImage
        contentAlign
        metaDesc
        metaImage
      }
    }
  }
`;
