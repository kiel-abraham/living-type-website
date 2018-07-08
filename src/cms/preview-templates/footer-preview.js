import React from 'react';
import Footer from '../components/footer';

const FooterPreview = ({ entry, widgetFor }) => (
  <Footer
    background={entry.getIn(['data', 'footerBackground'])}
  />
)

export default FooterPreview