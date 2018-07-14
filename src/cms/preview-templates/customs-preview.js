import React from 'react';
import Banner from '../../components/banner';
import { Row, Col } from 'reactstrap';

const CustomsPreview = ({ entry, widgetFor }) => (
  <div>
    <Banner
      showHero={entry.getIn(['data', 'hero'])}
      heroFull={entry.getIn(['data', 'heroFull'])}
      heroTitle={entry.getIn(['data', 'heroTitle'])}
      />

    <section className="container">
      <Row>
        <Col>
          <h1>{entry.getIn(['data', 'title'])}</h1>
          <div>{widgetFor('body')}</div>
        </Col>
      </Row>
    </section>
  </div>
);

export default CustomsPreview;