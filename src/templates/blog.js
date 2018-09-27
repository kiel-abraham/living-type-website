import React from 'react';
import Link from 'gatsby-link';
import UtilHelmet from '../components/utils/utilHelmet';
import { Row, Col, Card, CardBody } from 'reactstrap';

const BlogPage = ({ data }) => {
  return (
    <div>
      <UtilHelmet data={data} />

      <section className="container mt-4">
        <Row>
          <Col className={`text-${data.markdownRemark.frontmatter.contentAlign}`}>
            <h1>{data.markdownRemark.frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            <Row>
            {data.blogs.edges.map((item, index) => {
                return (
                  <article key={index} className="col-md-6 mt-3">
                    <Card>
                      <CardBody>
                        <h2>
                            <Link to={item.node.frontmatter.slug || item.node.fields.slug}>
                                {item.node.frontmatter.title}
                            </Link>
                        </h2>
                        <p className="text-muted">{item.node.frontmatter.date}</p>
                        <p>{item.node.excerpt }</p>
                        <Link className="btn btn-primary btn-sm mb-3" to={item.node.frontmatter.slug || item.node.fields.slug}>
                            Read More
                        </Link>
                      </CardBody>
                    </Card>
                  </article>
                );
            })}
            </Row>
          </Col>
        </Row>
      </section>

    </div>
  );
}

export default BlogPage

export const BlogQuery = graphql`
  query BlogQuery {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(frontmatter: { pageType: { eq: "blog" } }) {
      html
      frontmatter {
        title
        contentAlign
        slug
        metaDesc
        metaImage
      }
    }
    blogs: allMarkdownRemark(
        filter: {frontmatter: {blog: {eq: true}}}
        sort: {fields: [frontmatter___date], order: DESC}
    ) {
        edges {
            node {
                fields {
                    slug
                }
                html
                excerpt
                frontmatter {
                    title
                    slug
                    date(formatString: "MMMM DD, YYYY")
                }
            }
        }
    }
  }
`;
