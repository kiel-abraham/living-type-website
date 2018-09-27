import React from 'react';
import { Row, Col } from 'reactstrap';

const CustomsPreview = ({ entry, widgetFor }) => (
    <section className="container">
      <Row>
        <Col className={`text-${entry.getIn(['data', 'contentAlign'])}`}>
          <h1>{entry.getIn(['data', 'title'])}</h1>
          <div>{widgetFor('body')}</div>
        </Col>
      </Row>
    </section>
);

export default CustomsPreview;