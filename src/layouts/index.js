import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { HeaderMain, HeaderSlide } from '../components/header';
import './theme.min.css';
import './index.css';

const Layout = ({ children, data }) => {
  const header = data.settings.edges[0].node.frontmatter.header;
  return (
    <div id="main-layout-div">
      <Helmet>
        <title>{data.site.siteMetadata.title} | {data.site.siteMetadata.tagline}</title>
        <meta name='description' content='THKR CMS'/>
      </Helmet>

      { header == 'HeaderSlide' && 
        <HeaderSlide siteTitle={data.site.siteMetadata.title} nav={data.nav.edges} />
      }
      { header == 'HeaderMain' && 
        <HeaderMain siteTitle={data.site.siteMetadata.title} nav={data.nav.edges} />
      }

      <main>
        {children()}
      </main>
      
      <footer className="bg-dark text-center">
        <small className="text-muted">Powered by <Link to="//www.thkr.com.au">THKR</Link></small>
      </footer>
    </div>
  )
}

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
        tagline
      }
    }
    nav: allMarkdownRemark(
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
    settings: allMarkdownRemark(
      filter: {frontmatter: {settingsPage: {eq: true}}}
    ) {
      edges {
        node {
          frontmatter {
            header
          }
        }
      }
    }
  }
`
