import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Button } from 'reactstrap';

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
        style={data.settings.frontmatter.headerStyle}
        siteTitle={data.site.siteMetadata.title}
        nav={data.nav.edges}
        />

      <main>
        {children()}
      </main>
      
      <Footer background={`${data.settings.frontmatter.footerBackground}`} />

      {data.settings.frontmatter.showFloatButton &&
        <Button color="primary" className="float-right fixed-bottom" style={{borderRadius: "50%", left: "-10px"}}>
        {data.settings.frontmatter.floatButton === "Phone" &&
          P
        }
        {data.settings.frontmatter.floatButton === "Email" &&
          E
        }
        </Button>
      }
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
    settings: markdownRemark(frontmatter: { settingsPage: { eq: true } }) {
      frontmatter {
        headerStyle
        footerBackground
        showFloatButton
        floatButton
      }
    }
  }
`
