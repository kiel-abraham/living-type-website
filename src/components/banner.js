import React from 'react';
import Link from 'gatsby-link';
import { Jumbotron } from 'reactstrap';

const Banner = ({ visible, fullWidth, title, subtitle, button, buttonColour, align }) => {
  const image = "https://cdn.pixabay.com/photo/2014/01/17/19/01/tree-247122_960_720.jpg";
  const backStyles = {
    backgroundImage: 'url(' + image + ')',
    backgroundSize: 'cover'
  };
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