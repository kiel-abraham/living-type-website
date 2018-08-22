import React from 'react';
import Banner from '../../components/banner';

const HomePreview = ({ entry, widgetFor }) => {
    return(
        <div>
            <Banner
                visible={entry.getIn(['data', 'banner', 'visible'])}
                fullWidth={entry.getIn(['data', 'banner', 'fullWidth'])}
                title={entry.getIn(['data', 'banner', 'title'])}
                subtitle={entry.getIn(['data', 'banner', 'subtitle'])}
                button={entry.getIn(['data', 'banner', 'button'])}
                buttonColour={entry.getIn(['data', 'banner', 'buttonColour'])}
                align={entry.getIn(['data', 'banner', 'align'])}
            />
            <h1>{entry.getIn(['data', 'title'])}</h1>
            <div>{widgetFor('body')}</div>
        </div>
    );
}

export default HomePreview;