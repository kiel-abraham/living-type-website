import React from 'react';
import Link from 'gatsby-link';
import Logo from './logo';
import { Container, NavbarToggler, Collapse, NavItem } from 'reactstrap';

class Slide extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      render() {
  return (
    <header>
        <nav className={`navbar navbar-expand-sm navbar-${this.props.invert} bg-${this.props.background}`}>
        <Container style={{padding: 0}}>
            <Logo logo={this.props.logo} siteTitle={this.props.siteTitle} />
            <NavbarToggler onClick={this.toggle} style={{border: "none"}} />
            <Collapse isOpen={this.state.isOpen} navbar>
            <ul className="navbar-nav ml-auto">
                {this.props.nav.map((item, index) => {
                    return (
                    <NavItem key={ index }>
                        <Link 
                        exact to={item.node.frontmatter.slug || item.node.fields.slug}
                        activeClassName="active"
                        className="nav-link"
                        onClick={this.toggle}>{item.node.frontmatter.menuTitle || item.node.frontmatter.title}
                        </Link>
                    </NavItem>
                    )
                })}
            </ul>
            </Collapse>
        </Container>
        </nav>
    </header>
  );
}
}

export default Slide;