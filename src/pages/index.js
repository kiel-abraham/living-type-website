import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => (
  <div>
    <h1>{data.allMarkdownRemark.edges[0].node.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.allMarkdownRemark.edges[0].node.html }} />
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/services">Services</Link></li>
    </ul>
  </div>
)

export default IndexPage

export const IndexQuery = graphql`
  query IndexQuery {
    allMarkdownRemark (
      filter: { frontmatter: { pageType: { eq: "homepage" } }}
    ) {
      edges {
        node {
          html
          frontmatter {
            title
            pageType
          }
        }
      }
    }
  }
`;