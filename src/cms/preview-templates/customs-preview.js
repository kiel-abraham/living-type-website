import React from 'react';
import Hero from '../../components/hero';

const CustomsPreview = ({ entry, widgetFor }) => (
  <Hero
    heroFull={entry.getIn(['data', 'heroFull'])}
  />
);

export default CustomsPreview;