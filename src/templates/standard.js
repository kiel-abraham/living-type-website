import React from 'react'
import Link from 'gatsby-link'

const StandardPage = ({ data }) => (
  <div>
    <h1>{data.markdownRemark.frontmatter.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
    <Link to="/">Home</Link>
  </div>
)

export default StandardPage

export const query = graphql`
  query StandardPage($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;