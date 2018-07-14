import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

// will need to use gif images to display how the menu would work

const HeaderPreview = ({ entry, widgetFor }) => {
    if (entry.getIn(['data', 'headerStyle']) === "HeaderSlide") {
        return(
            <div>
                <h3>Slide</h3>
                <nav className="navbar navbar-expand-md navbar-dark bg-primary">Test</nav>
                <img src="http://gph.is/2c2CSvz" />
            </div>
        );
    } else {
        return(
            <div>
                <h3>Other</h3>
                <iframe src="https://giphy.com/embed/GFm6aYLQ98o8w" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
                <Navbar color="dark" dark expand="xs">
                    <NavbarBrand href="/">THKR CMS</NavbarBrand>
                    <button type="button" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>
                </Navbar>
            </div>
        ); 
    }
}

export default HeaderPreview;