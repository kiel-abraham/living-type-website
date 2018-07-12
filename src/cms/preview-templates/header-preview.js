import React from 'react';
import { Nav, NavbarBrand, Link } from 'reactstrap';

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
                <img src="http://gph.is/2c82eID" />
            </div>
        ); 
    }
}

export default HeaderPreview;