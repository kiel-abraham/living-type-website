import React from 'react';
import Link from 'gatsby-link';
import { Jumbotron } from 'reactstrap';

const Hero = ({ showHero, heroFull, heroTitle }) => {

  if (showHero) {
    return (
      <Jumbotron className={heroFull? "container-fluid": "container"}>
          <h2 className="display-3">{heroTitle}</h2>
          <p className="lead">THKR (Thinker) is an Australian based business helping people create fast, simple sites with custom assistance.</p>
          <hr className="my-2" />
          <p>It uses utility classes for typgraphy and spacing to space content out within the larger container.</p>
          <p className="lead">
              <Link to="/about" className="btn btn-primary">Find Out More</Link>
          </p>
      </Jumbotron>
    )
  } else {
    return null;
  }
}

export default Hero;