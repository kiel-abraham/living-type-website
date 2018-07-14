import React from 'react';
import Hero from '../../components/hero';

const ContactPreview = ({ entry, widgetFor }) => (
  <div>
    <Hero
      showHero={entry.getIn(['data', 'hero.showHero'])}
      heroFull={entry.getIn(['data', 'hero.heroFull'])}
      heroTitle={entry.getIn(['data', 'hero.heroTitle'])}
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

export default ContactPreview;