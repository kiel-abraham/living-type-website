const path = require(`path`);

const { createFilePath } = require(`gatsby-source-filesystem`);
exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    const x = slug.split("/");
    const alt_slug = "/" + x[x.length - 2];
    createNodeField({
      node,
      name: `slug`,
      value: alt_slug
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
        createPage({
          path: node.frontmatter.slug || node.fields.slug,
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
