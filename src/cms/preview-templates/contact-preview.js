import React from 'react';
import { Row, Col } from 'reactstrap';

const ContactPreview = ({ entry, widgetFor }) => (
    <section className="container">
      <Row>
        <Col>
          <h1>{entry.getIn(['data', 'title'])}</h1>
          <div>{widgetFor('body')}</div>
        </Col>
      </Row>
    </section>
);

export default ContactPreview;