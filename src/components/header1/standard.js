import React from 'react';

const Standard = (props) => {
    return (
        <header>
          <nav className={`navbar navbar-${invert} bg-${this.props.background}`}>
            <Container style={{padding: 0}}>
              <Logo logo={this.props.logo} siteTitle={this.props.siteTitle} />
                <ul className="navbar-nav" style={{flexDirection: "row"}}>
                  {this.props.nav.map((item, index) => {
                    return (
                      <NavItem key={index}>
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

export default Standard;