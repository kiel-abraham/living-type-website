import React from 'react';
import Link from 'gatsby-link';
import { Jumbotron } from 'reactstrap';

const Banner = ({ visible, fullWidth, align, title, subtitle, button, buttonColour }) => {
  const container = fullWidth? "container-fluid": "container";
  if (visible) {
    return (
      <Jumbotron className={`${container} text-${align}`}>
          <h2 className="display-3">{title}</h2>
          <p className="lead">{subtitle}</p>
          <Link to="/about" className={`btn btn-${buttonColour}`}>{button}</Link>
      </Jumbotron>
    )
  } else {
    return null;
  }
}

export default Banner;