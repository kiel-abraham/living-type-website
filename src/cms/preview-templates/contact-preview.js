import React from 'react';
import Hero from '../../components/hero';

const ContactPreview = ({ entry, widgetFor }) => {
    const data = entry.getIn(['data', 'hero']);
    return(
  <div>
      <div>{data}</div>
    <Hero
      showHero={data.showHero}
      heroFull={data.heroFull}
      heroTitle={data.heroTitle}
      />
  </div>
);
}

export default ContactPreview;