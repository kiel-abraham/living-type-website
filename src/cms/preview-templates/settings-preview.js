import React from 'react';
import Footer from '../../components/footer';
import FloatButton from '../../components/floatButton';
import { Navbar, NavbarBrand, NavbarToggler } from 'reactstrap';

// will need to use gif images to display how the menu would work

const SettingsHeaderMain = () => (
    <div>Test</div>
);

const SettingsPreview = ({ entry }) => {
    return(
        <div>
            {(entry.getIn(['data', 'headerStyle']) === "HeaderSlide") &&
                <SettingsHeaderMain />
            }
            <Navbar color={entry.getIn(['data', 'headerBackground']) || "primary"} dark={!entry.getIn(['data', 'invert'])} light={entry.getIn(['data', 'invert'])} expand="xs">
                <NavbarBrand href="/">THKR CMS</NavbarBrand>
                <button type="button" className="navbar-toggler"><span className="navbar-toggler-icon"></span></button>
            </Navbar>

            <Footer
                background={entry.getIn(['data', 'footerBackground'])}
                socialColour={entry.getIn(['data', 'socialColour'])}
                siteTitle="THKR CMS"
            />

            {entry.getIn(['data', 'floatingButton', 'visible']) &&
                <FloatButton
                    floatButtonColour={entry.getIn(['data', 'floatingButton', 'colour'])}
                    floatButton={entry.getIn(['data', 'floatingButton', 'type'])}
                />
            }
        </div>
    );
}

export default SettingsPreview;