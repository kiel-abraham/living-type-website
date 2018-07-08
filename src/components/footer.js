import React from 'react'
import Link from 'gatsby-link'

const Footer = ({ background }) => {
  return (
    <footer className={`bg-${background} text-center`}>
        <small className="text-muted">Powered by <Link to="//www.thkr.com.au">THKR</Link></small>
    </footer>
  );
}

export default Footer