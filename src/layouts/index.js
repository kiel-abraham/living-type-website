import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Footer from '../components/footer';

import './theme.min.css';
import './index.css';

const Layout = ({ children, data }) => {
  return (
    <div id="main-layout-div">
      <Helmet>
        <title>{data.site.siteMetadata.title} | {data.site.siteMetadata.tagline}</title>
        <meta name='description' content='THKR CMS'/>
      </Helmet>

      <Header 
        style={data.header.edges[0].node.frontmatter.headerStyle}
        siteTitle={data.site.siteMetadata.title}
        nav={data.nav.edges}
        />

      <main>
        {children()}
      </main>
      
      <Footer background={`${data.footer.edges[0].node.frontmatter.footerBackground}`} />

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
    header: allMarkdownRemark(
      filter: {frontmatter: {settings: {eq: "header"}}}
    ) {
      edges {
        node {
          frontmatter {
            headerStyle
          }
        }
      }
    }
    footer: allMarkdownRemark(
      filter: {frontmatter: {settings: {eq: "footer"}}}
    ) {
      edges {
        node {
          frontmatter {
            footerBackground
          }
        }
      }
    }
  }
`
