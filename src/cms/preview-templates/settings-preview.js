import React from 'react';
import Footer from '../../components/footer';
import FloatButton from '../../components/floatButton';
import { Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

// will need to use gif images to display how the menu would work

const SettingsHeaderMain = () => (
    <div>Test</div>
);

const SettingsPreview = ({ entry, widgetFor }) => {
    return(
        <div>
            <SettingsHeaderMain />
            {(entry.getIn(['data', 'headerStyle']) === "HeaderSlide") &&
                <iframe src="https://giphy.com/embed/GFm6aYLQ98o8w" width="480" height="360" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
            }
            <Navbar color="primary" dark expand="xs">
                <NavbarBrand href="/">THKR CMS</NavbarBrand>
                <button type="button" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>
            </Navbar>

            <Footer background={entry.getIn(['data', 'footerBackground'])} />

            {entry.getIn(['data', 'showFloatButton']) &&
                <FloatButton
                    floatButtonColour={entry.getIn(['data', 'floatButtonColour'])}
                    floatButton={entry.getIn(['data', 'floatButton'])}
                />
            }
        </div>
    );
}

export default SettingsPreview;