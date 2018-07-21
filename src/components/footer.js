import React from 'react';
import Link from 'gatsby-link';
import FaFacebook from 'react-icons/lib/fa/facebook-square';
import FaGoogle from 'react-icons/lib/fa/google-plus-square';
import FaTwitter from 'react-icons/lib/fa/twitter-square';
import FaYoutube from 'react-icons/lib/fa/youtube-square';
import FaInstagram from 'react-icons/lib/fa/instagram';

const Footer = ({ background, socialColour, siteTitle }) => {
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
      <div className="mt-2 mb-2">
        <a href="//www.facebook.com" className={`text-${socialColour}`}><FaFacebook size={28} /></a>
        <a href="//www.google.com" className={`text-${socialColour}`}><FaGoogle size={28} /></a>
        <a href="//www.google.com" className={`text-${socialColour}`}><FaTwitter size={28} /></a>
        <a href="//www.google.com" className={`text-${socialColour}`}><FaYoutube size={28} color="info" /></a>
        <a href="//www.google.com" className={`text-${socialColour}`}><FaInstagram size={28} /></a>
      </div>
      <p>&copy; {year} {siteTitle}</p>
      <small className="text-muted">Powered by <Link to="//www.thkr.com.au">THKR</Link></small>
    </footer>
  );
}

export default Footer