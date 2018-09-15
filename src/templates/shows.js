import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import { Row, Col, Table } from 'reactstrap';

const ShowsPage = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  return (
    <div>
      <Helmet>
        <title>{`${frontmatter.title} | ${data.site.siteMetadata.title}`}</title>
        <meta property="og:title" content={`${frontmatter.title} | ${data.site.siteMetadata.title}`}/>
        <meta property="og:url" content={data.site.siteMetadata.siteUrl + frontmatter.slug} />
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
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            <Table hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Event</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody>
                    {data.shows.edges.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.node.frontmatter.date}</td>
                                <td>{item.node.frontmatter.title}</td>
                                <td>{item.node.frontmatter.location}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
          </Col>
        </Row>
      </section>
      
    </div>
  );
}

export default ShowsPage;

export const ShowsQuery = graphql`
  query ShowsQuery {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(frontmatter: { pageType: { eq: "shows" } }) {
      html
      frontmatter {
        title
        contentAlign
        slug
        metaDesc
        metaImage
      }
    }
    shows: allMarkdownRemark(
        filter: {frontmatter: {show: {eq: true}}}
        sort: {fields: [frontmatter___date], order: DESC}
    ) {
        edges {
            node {
                fields {
                    slug
                }
                html
                frontmatter {
                    title
                    slug
                    location
                    date(formatString: "MMMM DD, YYYY")
                }
            }
        }
    }
  }
`;