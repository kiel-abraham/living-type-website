import React from 'react';
import { StaticQuery, graphql } from "gatsby"
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import Header from './header';
import Footer from './footer';
import FloatButton from './floatButton';

import '../style.scss';

const Layout = ({ children, data }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          id
          siteMetadata {
            siteUrl
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
              fields {
                slug
              }
              frontmatter {
                title
                menuTitle
                slug
              }
            }
          }
        }
        home: markdownRemark(frontmatter: { homePage: { eq: true } }) {
          frontmatter {
            metaDesc
            metaImage
          }
        }
        settings: markdownRemark(frontmatter: { settingsPage: { eq: true } }) {
          frontmatter {
            header {
              menu
              background
              logo
              invert
            }
            favicon
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
    `}
    render={data => (
      <>
      <Helmet>
        <html lang="en" />
        <title>{data.site.siteMetadata.title} | {data.site.siteMetadata.tagline}</title>
        <meta name="description" content={data.home.frontmatter.metaDesc || data.site.siteMetadata.title}/>
        <meta property="og:title" content={`${data.site.siteMetadata.title} | ${data.site.siteMetadata.tagline}`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content={data.home.frontmatter.metaDesc || data.site.siteMetadata.title}/>
        <meta property="og:url" content={data.site.siteMetadata.siteUrl} />
        <meta property="og:site_name" content={data.site.siteMetadata.title} />
        {data.home.frontmatter.metaImage ? (
          <meta property="og:image" content={data.site.siteMetadata.siteUrl + data.home.frontmatter.metaImage} />
        ) : (
          <meta property="og:image" content={data.site.siteMetadata.siteUrl + data.settings.frontmatter.logo} />
        )}
        {data.settings.frontmatter.favicon &&
          <link rel="shortcut icon" href={data.site.siteMetadata.siteUrl + data.settings.frontmatter.favicon} />
        }
      </Helmet>

      <a href="#main-content" className="sr-only sr-only-focusable">Skip to main content</a>

      <Header 
        menu={data.settings.frontmatter.header.menu}
        background={data.settings.frontmatter.header.background}
        invert={data.settings.frontmatter.header.invert}
        siteTitle={data.site.siteMetadata.title}
        nav={data.nav.edges}
        logo={data.settings.frontmatter.header.logo}
      />

      <main id="main-content" className="mb-5">
        {children}
      </main>

      <Footer
        background={data.settings.frontmatter.footerBackground}
        socialColour={data.settings.frontmatter.socialColour}
        links={data.settings.frontmatter.socialLinks}
        siteTitle={data.site.siteMetadata.title}
        siteUrl={data.site.siteMetadata.siteUrl}
      />

      {data.settings.frontmatter.floatingButton.visible &&
        <div className="d-lg-none">
          <FloatButton
            floatButtonColour={data.settings.frontmatter.floatingButton.colour}
            floatButton={data.settings.frontmatter.floatingButton.type}
            phone={data.contact.frontmatter.phone}
          />
        </div>
      }
   </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout;