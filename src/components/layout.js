import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          menu {
            name
            link
          }
          socials {
            name
            link
          }
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} menu={data.site.siteMetadata.menu} />

      <main className="pb-20">
        {children}
      </main>

      <footer className="bg-lt-black text-gray-100 py-4">
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
  );
}

export default Layout
