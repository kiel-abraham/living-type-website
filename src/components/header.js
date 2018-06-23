import React from 'react'
import Link from 'gatsby-link'
import { Navbar, NavbarToggler, Collapse, Nav, NavItem } from 'reactstrap';

class Header extends React.Component {
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
    <Navbar color="primary" dark expand="md">
      <Link to="/" className="navbar-brand">{this.props.siteTitle}</Link>
      <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            {this.props.nav.map((item, index) => {
              return <NavItem key={ index }><Link to={item.node.frontmatter.slug} className="nav-link">{item.node.frontmatter.title}</Link></NavItem>;
            })}
            </Nav>
          </Collapse>
    </Navbar>
  </header>
);
}
}

export default Header
