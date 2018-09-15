import React from 'react';
import Helmet from 'react-helmet';
import { Row, Col } from 'reactstrap';

const ShowItem = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  const slug = frontmatter.slug || data.markdownRemark.fields.slug;
  return (
    <div>
      <Helmet>
        <title>{`${frontmatter.title} | ${data.site.siteMetadata.title}`}</title>
        <meta property="og:title" content={`${frontmatter.title} | ${data.site.siteMetadata.title}`}/>
        <meta property="og:url" content={data.site.siteMetadata.siteUrl + slug} />
        {frontmatter.metaDesc &&
          <meta name="description" content={frontmatter.metaDesc}/>
        }
        {frontmatter.metaImage &&
          <meta property="og:image" content={data.site.siteMetadata.siteUrl + frontmatter.metaImage} />
        }
      </Helmet>
      
      <section className="container mt-4">
        <Row>
          <Col className={`text-${frontmatter.contentAlign}`}>
            <h1>{frontmatter.title}</h1>
            <h3>{frontmatter.date}</h3>
            <h4>{frontmatter.location}</h4>
            {frontmatter.image &&
                <img src={frontmatter.image} />
            }
            {frontmatter.facebook &&
                <a href={frontmatter.facebook} target="_blank">View event on Facebook</a>
            }
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default ShowItem;

export const query = graphql`
  query ShowItem($slug: String!) {
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
        date(formatString: "MMMM DD, YYYY")
        location
        image
        facebook
        slug
        contentAlign
        metaDesc
        metaImage
      }
    }
  }
`;