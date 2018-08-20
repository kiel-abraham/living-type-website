import React from 'react';
import Contact from '../../components/contact';

const ContactPreview = ({ entry, widgetFor }) => {
  console.log(entry.getIn(['data']));
  return (
    <Contact
      title={entry.getIn(['data', 'title'])}
      body={entry.getIn(['data', 'body'])}
      phone={entry.getIn(['data', 'phone'])}
      email={entry.getIn(['data', 'email'])}
      address={entry.getIn(['data', 'address'])}
      formTitle={entry.getIn(['data', 'form', 'formTitle'])}
      buttonText={entry.getIn(['data', 'form', 'buttonText'])}
      buttonColor={entry.getIn(['data', 'form', 'buttonColor'])}
      inputs={entry.getIn(['data', 'inputs', 'item'])}
    />
  );
}

export default ContactPreview