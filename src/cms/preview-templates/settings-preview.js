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
              "title": "Menu1",
              "slug": "#"
            }
          }
        },
        {
          "node": {
            "frontmatter": {
              "title": "Menu2",
              "slug": "#"
            }
          }
        },
        {
          "node": {
            "frontmatter": {
              "title": "Menu3",
              "slug": "#"
            }
          }
        }
      ];
    return(
        <div>
            <Header 
                menu={entry.getIn(['data', 'header', 'menu'])}
                background={entry.getIn(['data', 'header', 'background'])}
                invert={entry.getIn(['data', 'header', 'invert'])}
                nav={navList}
                siteTitle="THKR CMS"
                logo={entry.getIn(['data', 'header', 'logo'])}
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