import React from 'react';
import Hero from '../../components/hero';
import { Row, Col } from 'reactstrap';

const CustomsPreview = ({ entry, widgetFor }) => (
  <div>
    <Hero
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