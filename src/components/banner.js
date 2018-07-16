import React from 'react';
import Link from 'gatsby-link';
import { Jumbotron } from 'reactstrap';

const Banner = ({ visible, fullWidth, title, subtitle, button, buttonColour, align }) => {
  const container = fullWidth? "container-fluid": "container";
  if (visible) {
    return (
      <Jumbotron className={`${container} text-${align}`}>
        {title !== "" &&
          <h2 className="display-3">{title}</h2>
        }
        {subtitle !== "" &&
          <p className="lead">{subtitle}</p>
        }
        {button !== "" &&
          <Link to="/about" className={`btn btn-${buttonColour}`}>{button}</Link>
        }
      </Jumbotron>
    )
  } else {
    return null;
  }
}

export default Banner;