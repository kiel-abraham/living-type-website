const path = require(`path`);

const { createFilePath } = require(`gatsby-source-filesystem`);
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    })
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark (
            filter: { frontmatter: { pageType: { ne: "none"}} }
        ){
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                pageType
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        let alt_slug;
        if (node.frontmatter.slug) {
          alt_slug = node.frontmatter.slug;
        } else {
          alt_slug = node.fields.slug
        }
        createPage({
          path: alt_slug,
          component: path.resolve(`./src/templates/${String(node.frontmatter.pageType)}.js`),
          context: {
            // Data passed to context is available in page queries as GraphQL variables.
            slug: node.fields.slug
          }
        })
      })
      resolve()
    })
  })
};
