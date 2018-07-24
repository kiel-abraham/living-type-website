import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from '../components/header';
import Footer from '../components/footer';
import FloatButton from '../components/floatButton';

import './theme.min.css';
import './index.css';

const Layout = ({ children, data }) => {
  return (
    <div id="main-layout-div">
      <Helmet>
        <title>{data.site.siteMetadata.title} | {data.site.siteMetadata.tagline}</title>
        <meta name="description" content="THKR CMS"/>
      </Helmet>

      <Header 
        menu={data.settings.frontmatter.header.menu}
        background={data.settings.frontmatter.header.background}
        invert={data.settings.frontmatter.header.invert}
        siteTitle={data.site.siteMetadata.title}
        nav={data.nav.edges}
      />

      <main className="mb-5">
        {children()}
      </main>
      
      <Footer
        background={data.settings.frontmatter.footerBackground}
        socialColour={data.settings.frontmatter.socialColour}
        links={data.settings.frontmatter.socialLinks}
        siteTitle={data.site.siteMetadata.title}
      />

      {data.settings.frontmatter.floatingButton.visible &&
        <FloatButton
          floatButtonColour={data.settings.frontmatter.floatingButton.colour}
          floatButton={data.settings.frontmatter.floatingButton.type}
          phone={data.contact.frontmatter.phone}
        />
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
        header {
          menu
          background
          invert
        }
        footerBackground
        floatingButton {
          visible
          type
          colour
        }
        socialColour
        socialLinks {
          link
        }
      }
    }
    contact: markdownRemark(frontmatter: { pageType: { eq: "contact" } }) {
      frontmatter {
        phone
      }
    }
  }
`
