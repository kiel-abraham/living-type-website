import React from 'react';
import { Link, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import Layout from '../components/layout';
import { Row, Col, Table } from 'reactstrap';

const ShowsPage = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  return (
    <Layout>
      <Helmet>
        <title>{`${frontmatter.title} | ${data.site.siteMetadata.title}`}</title>
        <meta property="og:title" content={`${frontmatter.title} | ${data.site.siteMetadata.title}`}/>
        <meta property="og:url" content={data.site.siteMetadata.siteUrl + frontmatter.slug} />
        {frontmatter.metaDesc &&
          <meta name="description" content={frontmatter.metaDesc}/>
        }
        {frontmatter.metaDesc &&
          <meta property="og:description" content={frontmatter.metaDesc}/>
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
            <Table dark hover>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Venue</th>
                    </tr>
                </thead>
                <tbody>
                    {data.shows.edges.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.node.frontmatter.date}</td>
                                <td className="text-uppercase">
                                  <Link to={item.node.frontmatter.slug || item.node.fields.slug}>{item.node.frontmatter.title}</Link>
                                </td>
                                <td>
                                  <a href={`https://maps.google.com/maps?q=${item.node.frontmatter.address}`} target="_blank" rel="noopener noreferrer" title="View in Google Maps">{item.node.frontmatter.venue}</a>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
          </Col>
        </Row>
      </section>
      
    </Layout>
  );
}

export default ShowsPage;

export const query = graphql`
  query {
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
                    venue
                    address
                    date(formatString: "MMMM DD, YYYY")
                }
            }
        }
    }
  }
`;
