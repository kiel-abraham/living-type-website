import React from 'react';
import Link from 'gatsby-link';
import { Container, Collapse, NavbarToggler, NavItem } from 'reactstrap';

const Logo = ({logo, siteTitle}) => (
  <Link to="/" className="navbar-brand" title={siteTitle}>
    {logo === "" ? (
      siteTitle
    ):(
      <img src={logo} alt={`${siteTitle} logo`} width="150" />
    )}
  </Link>
);

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
    const invert = this.props.invert ? "light": "dark";
    if (this.props.menu === "Slide") {
      return ( 
        <header>
          <nav className={`navbar navbar-expand-sm navbar-${invert} bg-${this.props.background}`}>
            <Container style={{padding: 0}}>
              <Logo logo={this.props.logo} siteTitle={this.props.siteTitle} />
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
    } else if (this.props.menu === "Scroll") {
      return ( 
        <header>
          <nav className={`navbar navbar-${invert} bg-${this.props.background}`}>
            <Container style={{padding: 0}}>
              <Link to="/" className="navbar-brand mx-auto mr-sm-auto ml-sm-0">{this.props.siteTitle}</Link>
              <div style={{maxWidth: "100%"}}>
                <ul className="navbar-nav" style={{overflowX: "auto", whiteSpace: "noWrap", flexDirection: "row"}}>
                  {this.props.nav.map((item, index) => {
                    return (
                      <NavItem key={ index }>
                        <Link 
                          exact to={item.node.frontmatter.slug}
                          activeClassName="active"
                          className="nav-link px-2"
                          onClick={this.toggle}>{item.node.frontmatter.menuTitle || item.node.frontmatter.title}
                        </Link>
                      </NavItem>
                    )
                  })}
                  <NavItem><Link to="/contact" className="nav-link px-2">Testing</Link></NavItem>
                  <NavItem><Link to="/contact" className="nav-link px-2">Testing</Link></NavItem>
                  <NavItem><Link to="/contact" className="nav-link px-2">Testing</Link></NavItem>
                  <NavItem><Link to="/contact" className="nav-link px-2">Testing</Link></NavItem>
                </ul>
              </div>
            </Container>
          </nav>
        </header>
      );
    } else {
      return ( 
        <header>
          <nav className={`navbar navbar-${invert} bg-${this.props.background}`}>
            <Container style={{padding: 0}}>
              <Logo logo={this.props.logo} siteTitle={this.props.siteTitle} />
                <ul className="navbar-nav" style={{flexDirection: "row"}}>
                  {this.props.nav.map((item, index) => {
                    return (
                      <NavItem key={ index }>
                        <Link 
                          exact to={item.node.frontmatter.slug || item.node.fields.slug}
                          activeClassName="active"
                          className="nav-link px-2"
                          onClick={this.toggle}>{item.node.frontmatter.menuTitle || item.node.frontmatter.title}
                        </Link>
                      </NavItem>
                    )
                  })}
                </ul>
            </Container>
          </nav>
        </header>
      );
    }
  }
}

export default Header;
