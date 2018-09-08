import React from 'react';
import Helmet from 'react-helmet';
import { Row, Col } from 'reactstrap';

const BlogPage = ({ data }) => {
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
            {data.blogs.edges.map((item, index) => {
                return (
                    <article>
                        <h2><a href={item.node.frontmatter.slug || item.node.fields.slug}>{item.node.frontmatter.title}</a></h2>
                        <p className="text-muted">{item.node.frontmatter.date}</p>
                        <div dangerouslySetInnerHTML={{ __html: item.node.html }} />
                    </article>
                )
            })}
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
                frontmatter {
                    title
                    slug
                    date
                }
            }
        }
    }
  }
`;