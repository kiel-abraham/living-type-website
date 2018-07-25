import React from 'react';
import Link from 'gatsby-link';
import FaFacebook from 'react-icons/lib/fa/facebook-square';
import FaGoogle from 'react-icons/lib/fa/google-plus-square';
import FaTwitter from 'react-icons/lib/fa/twitter-square';
import FaYoutube from 'react-icons/lib/fa/youtube-square';
import FaInstagram from 'react-icons/lib/fa/instagram';

const Footer = ({ background, socialColour, links, siteTitle }) => {
  const year = new Date().getFullYear();
  const styles = {
    position: "absolute",
    padding: "0.5rem",
    right: "0",
    bottom: "0",
    left: "0"
  };

  return (
    <footer className={`bg-${background} text-center`} style={styles}>
      <ul className="nav my-2 d-inline-flex" itemscope itemtype="http://schema.org/Organization">
        <meta itemprop="url" content="url"/>
				<meta itemprop="logo" content="logo"/>
				<meta itemprop="name" content={siteTitle}/>
        {links.map((item, index) => {
          return (
            <li className="nav-item">
              {(item.link.search("facebook") !== -1) &&
                <a
                  key={index}
                  itemprop="sameAs"
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
                  key={index}
                  itemprop="sameAs"
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
                  key={index} 
                  itemprop="sameAs"
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
                  key={index}
                  itemprop="sameAs"
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
                  key={index}
                  itemprop="sameAs"
                  href={item.link}
                  className={`nav-link p-0 text-${socialColour}`}
                  target="_blank"
                  title={`${siteTitle} on YouTube`}
                >
                  <FaYoutube size={28} />
                  <span className="sr-only">YouTube</span>
                </a>
              }
            </li>
          )
        })}
      </ul>
      <div className="mt-2 mb-2" itemscope itemtype="http://schema.org/Organization">
        <meta itemprop="url" content="url"/>
				<meta itemprop="logo" content="logo"/>
				<meta itemprop="name" content={siteTitle}/>
        {links.map((item, index) => {
          return (
            <a href={item.link} className={`text-${socialColour}`} key={index} itemprop="sameAs" target="_blank">
              {(item.link.search("facebook") !== -1) &&
                <FaFacebook size={28} />
              }
              {(item.link.search("google") !== -1) &&
                <FaGoogle size={28} />
              }
              {(item.link.search("twitter") !== -1) &&
                <FaTwitter size={28} />
              }
              {(item.link.search("youtube") !== -1) &&
                <FaYoutube size={28} />
              }
              {(item.link.search("instagram") !== -1) &&
                <FaInstagram size={28} />
              }
            </a>
          )
        })}
      </div>
      <p>&copy; {year} {siteTitle}</p>
      <small className="text-muted">Powered by <Link to="//www.thkr.com.au">THKR</Link></small>
    </footer>
  );
}

export default Footer