import React from 'react'
import Link from 'gatsby-link'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './theme.min.css';
import './index.css';

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
    <footer className="bg-dark text-center">
      <small className="text-muted">Powered by <Link to="//www.thkr.com.au">THKR</Link></small>
    </footer>
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
    allMarkdownRemark(
      filter: {frontmatter: {nav: {eq: true}}}
      sort: {fields: [frontmatter___navSort], order: ASC}
    ) {
      edges {
        node {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  }
`
