import React from 'react';
import Header from '../../components/header';

const HeaderPreview = ({ entry, widgetFor }) => (
    <Header style={entry.getIn(['data', 'headerStyle'])} />
);

export default HeaderPreview;