import React from 'react';
import Hero from '../../components/hero';
import { Row, Col } from 'reactstrap';

const CustomsPreview = ({ entry, widgetFor }) => (
  <div>
    <Hero
      hero={entry.getIn(['data', 'hero'])}
      heroFull={entry.getIn(['data', 'heroFull'])}
      heroTitle={entry.getIn(['data', 'heroTitle'])}
    />

    <section className="container">
      <Row>
        <Col>
          <h1>{entry.getIn(['data', 'title'])}</h1>
          <div dangerouslySetInnerHTML={{ __html: widgetFor('body')}} />
        </Col>
      </Row>
    </section>
  </div>
);

export default CustomsPreview;