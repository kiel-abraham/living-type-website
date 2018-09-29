import React from 'react';
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = ({ background, socialColour, links, siteTitle, siteUrl }) => {
  const copyColour = background === "light" ? "dark" : "light";
  const year = new Date().getFullYear();
  const styles = {
    position: "absolute",
    padding: "0.5rem",
    right: "0",
    bottom: "0",
    left: "0"
  };

  return (
    <footer className={`bg-${background} text-center`} style={styles} itemScope itemType="http://schema.org/WebSite">
      <meta itemProp="name" content={siteTitle}/>
      <meta itemProp="url" content={siteUrl}/>
      <ul className="nav my-2 d-inline-flex">
        {links.map((item, index) => {
          return (
            <li className="nav-item" key={index}>
              <meta itemProp="sameAs" content={item.link}/>
              {(item.link.search("facebook") !== -1) &&
                <a
                  href={item.link}
                  className={`nav-link px-1 text-${socialColour}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${siteTitle} on Facebook`}
                >
                  <FaFacebook size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
              }
              {(item.link.search("google") !== -1) &&
                <a
                  href={item.link}
                  className={`nav-link px-1 text-${socialColour}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${siteTitle} on Google`}
                >
                  <FaGoogle size={20} />
                  <span className="sr-only">Google</span>
                </a>
              }
              {(item.link.search("twitter") !== -1) &&
                <a 
                  href={item.link}
                  className={`nav-link px-1 text-${socialColour}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${siteTitle} on Twitter`}
                >
                  <FaTwitter size={20} />
                  <span className="sr-only">Twitter</span>
                </a>
              }
              {(item.link.search("instagram") !== -1) &&
                <a
                  href={item.link}
                  className={`nav-link px-1 text-${socialColour}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${siteTitle} on Instagram`}
                >
                  <FaInstagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
              }
              {(item.link.search("youtube") !== -1) &&
                <a
                  href={item.link}
                  className={`nav-link px-1 text-${socialColour}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={`${siteTitle} on YouTube`}
                >
                  <FaYoutube size={20} />
                  <span className="sr-only">YouTube</span>
                </a>
              }
            </li>
          )
        })}
      </ul>
      <p className={`text-${copyColour}`}>&copy; {year} {siteTitle}</p>
      <small className="text-muted">Powered by <a href="https://www.thkr.com.au" target="_blank" rel="noopener noreferrer">THKR</a></small>
    </footer>
  );
}

export default Footer