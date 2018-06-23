import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './theme.min.css';

const Layout = ({ children, data }) => (
  <div id="main-layout-div">
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'THKR CMS' }
      ]}
    />
    <Header 
      siteTitle={data.site.siteMetadata.title}
      nav={data.allMarkdownRemark.edges}/>
    <main>
      {children()}
    </main>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      id
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {frontmatter: {nav: {eq: true}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`
