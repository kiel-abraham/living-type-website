import React from 'react';
import Link from 'gatsby-link';
import { Jumbotron } from 'reactstrap';

const Banner = ({ visible, fullWidth, title, subtitle, image, overlay, button, buttonLink, buttonColour, align }) => {
  const bannerImage = image || '';
  const backStyles = {
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    minHeight: '400px',
    maxHeight: '600px',
    backgroundPosition: 'center'
  };
  const container = fullWidth? "container-fluid": "container";
  if (visible) {
    return (
      <Jumbotron className={`${container} text-${align} text-${overlay}`} style={backStyles}>
        {title !== "" &&
          <h2 className={`text-${overlay}`}>{title}</h2>
        }
        {subtitle !== "" &&
          <p className="lead">{subtitle}</p>
        }
        {button !== "" &&
          <Link to={buttonLink} className={`btn btn-outline-${buttonColour}`}>{button}</Link>
        }
      </Jumbotron>
    )
  } else {
    return null;
  }
}

export default Banner;