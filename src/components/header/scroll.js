import React from 'react';
import Link from 'gatsby-link';
import { Container, NavItem } from 'reactstrap';

const Scroll = (props) => {
  return (
    <header>
        <nav className={`navbar navbar-${props.invert} bg-${props.background}`}>
        <Container style={{padding: 0}}>
            <Link to="/" className="navbar-brand mx-auto mr-sm-auto ml-sm-0">
            {props.logo === "" ? (
                props.siteTitle
            ):(
                <img src={props.logo} alt={`${props.siteTitle} logo`} width="150" />
            )}
            </Link>
            <div style={{maxWidth: "100%"}}>
            <ul className="navbar-nav" style={{overflowX: "auto", whiteSpace: "noWrap", flexDirection: "row"}}>
                {props.nav.map((item, index) => {
                return (
                    <NavItem key={ index }>
                    <Link 
                        exact to={item.node.frontmatter.slug || item.node.fields.slug}
                        activeClassName="active"
                        className="nav-link px-2">
                            {item.node.frontmatter.menuTitle || item.node.frontmatter.title}
                    </Link>
                    </NavItem>
                )
                })}
            </ul>
            </div>
        </Container>
        </nav>
    </header>
  );
}

export default Scroll;