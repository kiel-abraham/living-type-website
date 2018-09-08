import React from 'react';
import Banner from '../../components/banner';
import { Row, Col } from 'reactstrap';

const HomePreview = ({ entry, widgetFor }) => {
    return(
        <div>
            <Banner
                visible={entry.getIn(['data', 'banner', 'visible'])}
                fullWidth={entry.getIn(['data', 'banner', 'fullWidth'])}
                title={entry.getIn(['data', 'banner', 'title'])}
                subtitle={entry.getIn(['data', 'banner', 'subtitle'])}
                image={entry.getIn(['data', 'banner', 'image'])}
                overlay={entry.getIn(['data', 'banner', 'overlay'])}
                button={entry.getIn(['data', 'banner', 'button'])}
                buttonLink={entry.getIn(['data', 'banner', 'buttonLink'])}
                buttonColour={entry.getIn(['data', 'banner', 'buttonColour'])}
                align={entry.getIn(['data', 'banner', 'align'])}
            />

            <section className="container mt-4">
                <Row>
                    <Col className={`text-${entry.getIn(['data', 'contentAlign'])}`}>
                        <h1>{entry.getIn(['data', 'title'])}</h1>
                        <div>{widgetFor('body')}</div>
                    </Col>
                </Row>
            </section>
        </div>
    );
}

export default HomePreview;