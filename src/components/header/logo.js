import React from 'react';
import Link from 'gatsby-link';

const Logo = (props) => (
  <Link to="/" className="navbar-brand" title={props.siteTitle}>
    {props.logo === "" ? (
      props.siteTitle
    ):(
      <img src={props.logo} alt={`${props.siteTitle} logo`} width="150" />
    )}
  </Link>
);

export default Logo;