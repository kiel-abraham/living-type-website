import React from 'react';
import Link from 'gatsby-link';
import { Jumbotron } from 'reactstrap';

const Banner = ({ visible, fullWidth, title, subtitle, button, buttonLink, buttonColour, align }) => {
  // const image = "https://wallpaperclicker.com/storage/wallpaper/Red-Background-88480120.jpg";
  const image = '';
  const backStyles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    minHeight: '300px',
    maxHeight: '400px'
  };
  const container = fullWidth? "container-fluid": "container";
  if (visible) {
    return (
      <Jumbotron className={`${container} text-${align}`} style={backStyles}>
        {title !== "" &&
          <h2 className="display-3">{title}</h2>
        }
        {subtitle !== "" &&
          <p className="lead">{subtitle}</p>
        }
        {button !== "" &&
          <Link to={buttonLink} className={`btn btn-${buttonColour}`}>{button}</Link>
        }
      </Jumbotron>
    )
  } else {
    return null;
  }
}

export default Banner;