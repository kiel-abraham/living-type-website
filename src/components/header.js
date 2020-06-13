import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const Header = ({ siteTitle }) => {
  const { site, logo } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            menu {
              name
              link
            }
          }
        },
        logo: file(relativePath: { eq: "living-type-logo.png" }) {
          childImageSharp {
            fluid(maxWidth: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `
  );

  return (
    <header className="bg-black">
      <nav className="container">
        <Link to="/">
          <Img fluid={logo.childImageSharp.fluid} alt={siteTitle} className="w-1/4" />
        </Link>
        <ul className="flex space-x-2">
          {site.siteMetadata.menu.map((item, index) => (
            <li key={index}>
              <Link to={item.link} className="text-orange-400">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
