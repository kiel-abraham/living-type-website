import React from 'react';
import Helmet from 'react-helmet';
import { Row, Col } from 'reactstrap';
import FaCalendar from 'react-icons/lib/fa/calendar';
import FaMarker from 'react-icons/lib/fa/map-marker';


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
          <Col sm={frontmatter.image? "6": "12"}>
            <h1>{frontmatter.title} @ {frontmatter.venue}</h1>
            <h3><FaCalendar /> {frontmatter.date}</h3>
            <address><FaMarker /> <a href={`https://maps.google.com/maps?q=${frontmatter.address}`} target="_blank" title="View in Google Maps">{frontmatter.address}</a></address>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            {frontmatter.facebook &&
                <a href={frontmatter.facebook} className="btn btn-sm btn-outline-light" target="_blank">View event on Facebook</a>
            }
          </Col>
          {frontmatter.image &&
            <Col sm="6">
              <img src={frontmatter.image} className="img-fluid" />
            </Col>
          }
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
        venue
        address
        image
        facebook
        slug
        metaDesc
        metaImage
      }
    }
  }
`;