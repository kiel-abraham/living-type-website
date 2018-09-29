import React from 'react';
import { Link } from 'gatsby';
import Logo from './logo';
import { Container, NavItem } from 'reactstrap';

const Standard = (props) => (
  <header>
    <nav className={`navbar navbar-${props.invert} bg-${props.background}`}>
      <Container style={{padding: 0}}>
        <Logo logo={props.logo} siteTitle={props.siteTitle} />
          <ul className="navbar-nav" style={{flexDirection: "row"}}>
            {props.nav.map((item, index) => {
              return (
                <NavItem key={index}>
                  <Link 
                    to={item.node.frontmatter.slug || item.node.fields.slug}
                    activeClassName="active"
                    className="nav-link px-2">
                      {item.node.frontmatter.menuTitle || item.node.frontmatter.title}
                  </Link>
                </NavItem>
              )
            })}
          </ul>
      </Container>
    </nav>
  </header>
);

export default Standard;