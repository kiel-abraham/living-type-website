import React from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import FloatButton from '../../components/floatButton';

const SettingsPreview = ({ entry }) => {
    const entryLinks = entry.getIn(['data', 'socialLinks']);
    const links = entryLinks ? entryLinks.toJS() : [];
    const navList = [
        {
          "node": {
            "frontmatter": {
              "title": "Home",
              "slug": "/"
            }
          }
        },
        {
          "node": {
            "frontmatter": {
              "title": "About",
              "slug": "/about"
            }
          }
        },
        {
          "node": {
            "frontmatter": {
              "title": "Contact",
              "slug": "/contact"
            }
          }
        }
      ];
    return(
        <div>
            <Header 
                style={entry.getIn(['data', 'header', 'menu'])}
                background={entry.getIn(['data', 'header', 'background'])}
                invert={entry.getIn(['data', 'header', 'invert'])}
                siteTitle="THKR CMS"
                nav={navList}
            />

            <Footer
                background={entry.getIn(['data', 'footerBackground'])}
                socialColour={entry.getIn(['data', 'socialColour'])}
                links={links}
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