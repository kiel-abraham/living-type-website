import React from 'react';
import Hero from '../../components/hero';
import { Row, Col } from 'reactstrap';

const CustomsPreview = ({ entry, widgetFor }) => {
  const hero = entry.getIn(['data', 'hero']);
  const heroFull = entry.getIn(['data', 'heroFull']);
  const heroTitle = entry.getIn(['data', 'heroTitle'])
  return (
    <div>
      <Hero heroData={hero, heroFull, heroTitle} />

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
}

export default CustomsPreview;