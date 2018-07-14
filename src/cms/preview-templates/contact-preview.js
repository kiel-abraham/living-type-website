import React from 'react';
import Hero from '../../components/hero';

const ContactPreview = ({ entry, widgetFor }) => {
    const showHero = entry.getIn(['data', 'hero', 'showHero']);
    const heroFull = entry.getIn(['data', 'hero', 'heroFull']);
    const heroTitle = entry.getIn(['data', 'hero', 'heroTitle']);
    return(
  <div>
    <Hero
      showHero={showHero}
      heroFull={heroFull}
      heroTitle={heroTitle}
      />
  </div>
);
}

export default ContactPreview;