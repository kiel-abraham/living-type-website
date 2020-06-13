/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          socials {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />

      <main className="bg-gray-100">
        <div className="container">
          {children}
        </div>
      </main>

      <footer className="bg-gray-300">
        <div className="container">

          <div className="flex flex-wrap justify-center">
            {data.site.siteMetadata.socials.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noreferrer"
                className="p-1 underline hover:no-underline"
              >
                {item.name}
              </a>
            ))}
          </div>

        </div>
        
        <p className="text-center">© {new Date().getFullYear()}</p>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
