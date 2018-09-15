import React from 'react';
import FaFacebook from 'react-icons/lib/fa/facebook-square';
import FaGoogle from 'react-icons/lib/fa/google-plus-square';
import FaTwitter from 'react-icons/lib/fa/twitter-square';
import FaYoutube from 'react-icons/lib/fa/youtube-square';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaMusic from 'react-icons/lib/fa/music';

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
                  className={`nav-link p-0 text-${socialColour}`}
                  target="_blank"
                  title={`${siteTitle} on Facebook`}
                >
                  <FaFacebook size={28} />
                  <span className="sr-only">Facebook</span>
                </a>
              }
              {(item.link.search("google") !== -1) &&
                <a
                  href={item.link}
                  className={`nav-link p-0 text-${socialColour}`}
                  target="_blank"
                  title={`${siteTitle} on Google`}
                >
                  <FaGoogle size={28} />
                  <span className="sr-only">Google</span>
                </a>
              }
              {(item.link.search("twitter") !== -1) &&
                <a 
                  href={item.link}
                  className={`nav-link p-0 text-${socialColour}`}
                  target="_blank"
                  title={`${siteTitle} on Twitter`}
                >
                  <FaTwitter size={28} />
                  <span className="sr-only">Twitter</span>
                </a>
              }
              {(item.link.search("instagram") !== -1) &&
                <a
                  href={item.link}
                  className={`nav-link p-0 text-${socialColour}`}
                  target="_blank"
                  title={`${siteTitle} on Instagram`}
                >
                  <FaInstagram size={28} />
                  <span className="sr-only">Instagram</span>
                </a>
              }
              {(item.link.search("youtube") !== -1) &&
                <a
                  href={item.link}
                  className={`nav-link p-0 text-${socialColour}`}
                  target="_blank"
                  title={`${siteTitle} on YouTube`}
                >
                  <FaYoutube size={28} />
                  <span className="sr-only">YouTube</span>
                </a>
              }
              {(item.link.search("bandcamp") !== -1) &&
                <a
                  href={item.link}
                  className={`nav-link p-0 text-${socialColour}`}
                  target="_blank"
                  title={`${siteTitle} on Bandcamp`}
                >
                  <FaMusic size={28} />
                  <span className="sr-only">Bandcamp</span>
                </a>
              }
            </li>
          )
        })}
      </ul>
      <p className={`text-${copyColour}`}>&copy; {year} {siteTitle}</p>
      <small className="text-muted">Powered by <a href="https://www.thkr.com.au" target="_blank" className={`text-${socialColour}`}>THKR</a></small>
    </footer>
  );
}

export default Footer