import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ background }) => {
  const styles = {
    position: "absolute",
    padding: "0.5rem",
    right: "0",
    bottom: "0",
    left: "0"
  }
  return (
    <footer className={`bg-${background} text-center`} style={styles}>
        <small className="text-muted">Powered by <Link to="//www.thkr.com.au">THKR</Link></small>
    </footer>
  );
}

export default Footer