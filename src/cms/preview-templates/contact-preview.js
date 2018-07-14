import React from 'react';
import Banner from '../../components/banner';

const ContactPreview = ({ entry, widgetFor }) => {
    const showHero = entry.getIn(['data', 'hero', 'showHero']);
    const heroFull = entry.getIn(['data', 'hero', 'heroFull']);
    const heroTitle = entry.getIn(['data', 'hero', 'heroTitle']);
    return(
  <div>
    <Banner
      showHero={showHero}
      heroFull={heroFull}
      heroTitle={heroTitle}
      />
  </div>
);
}

export default ContactPreview;