const path = require(`path`);

const { createFilePath } = require(`gatsby-source-filesystem`);
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });
    let alt_slug;
    if (slug.search("custom") !== -1 || slug.search("default") !== -1) {
      // remove "custom" or "default" folder from path
      const x = slug.split("/");
      alt_slug = "/" + x[x.length - 2];
    } else {
      // remove trailing slash
      alt_slug = slug.slice(0, slug.length -1);
    }
    createNodeField({
      node,
      name: `slug`,
      value: alt_slug
    })
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
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
