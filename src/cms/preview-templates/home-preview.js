import React from 'react';
import Banner from '../../components/banner';

const HomePreview = ({ entry, widgetFor }) => {
    return(
        <div>
            <Banner
                visible={entry.getIn(['data', 'hero', 'visible'])}
                fullWidth={entry.getIn(['data', 'hero', 'fullWidth'])}
                align={entry.getIn(['data', 'hero', 'align'])}
                title={entry.getIn(['data', 'hero', 'title'])}
                subtitle={entry.getIn(['data', 'hero', 'subtitle'])}
                button={entry.getIn(['data', 'hero', 'button'])}
                buttonColour={entry.getIn(['data', 'hero', 'buttonColour'])}
            />
            <h1>{entry.getIn(['data', 'title'])}</h1>
            <div>{widgetFor('body')}</div>
        </div>
    );
}

export default HomePreview;