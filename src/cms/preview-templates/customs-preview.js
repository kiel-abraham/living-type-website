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
          {/* widgetFor I believe */}
          <div dangerouslySetInnerHTML={{ __html: entry.getIn(['data', 'title'])}} />
        </Col>
      </Row>
    </section>
  </div>
);

export default CustomsPreview;