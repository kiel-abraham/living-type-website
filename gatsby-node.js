const path = require("path");
const _ = require("lodash");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query {
      allAirtableShows {
        edges {
          node {
            data {
              Name
            }
          }
        }
      }
    }
  `);

  const showTemplate = path.resolve(`src/templates/show.js`);
  queryResults.data.allAirtableShows.edges.forEach(item => {
    const name = item.node.data.Name;
    createPage({
      path: `/shows/${_.kebabCase(name)}`,
      component: showTemplate,
      context: {
        name: name
      }
    });
  });
}