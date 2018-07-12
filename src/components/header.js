import React from 'react'
import Link from 'gatsby-link'
import { Collapse, NavbarToggler, NavItem } from 'reactstrap'

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

    if (this.props.style !== "HeaderMain") {
      return ( 
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link to="/" className="navbar-brand">{this.props.siteTitle}</Link>
            <NavbarToggler onClick={this.toggle} style={{border: "none"}} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <ul className="navbar-nav ml-auto">
                  {this.props.nav.map((item, index) => {
                    return (
                      <NavItem key={ index }>
                        <Link 
                          exact to={item.node.frontmatter.slug}
                          activeClassName="active"
                          className="nav-link"
                          onClick={this.toggle}>{item.node.frontmatter.title}
                        </Link>
                      </NavItem>
                    )
                  })}
              </ul>
            </Collapse>
          </nav>
        </header>
      );
    } else {
      return ( 
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-primary">
            <Link to="/" className="navbar-brand">{this.props.siteTitle}</Link>
            <NavbarToggler onClick={this.toggle} style={{border: "none"}} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <ul className="navbar-nav ml-auto">
                  {this.props.nav.map((item, index) => {
                    return (
                      <NavItem key={ index }>
                        <Link 
                          exact to={item.node.frontmatter.slug}
                          activeClassName="active"
                          className="nav-link"
                          onClick={this.toggle}>{item.node.frontmatter.title}
                        </Link>
                      </NavItem>
                    )
                  })}
              </ul>
            </Collapse>
          </nav>
        </header>
      );
    }
  }
}

export default Header;
