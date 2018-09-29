import React from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { FaPhone, FaEnvelope, FaHome } from 'react-icons/fa';

const Contact = ({ title, body, phone, email, address, formTitle, buttonColor, buttonText, inputs }) => {
  return (
    <section className="container mt-4">
      <Row>
        <Col xs="12">
          <h1>{title}</h1>
        </Col>
        <Col sm="6">
          <div dangerouslySetInnerHTML={{ __html: body }} />
          <br / >
          <address>
            {phone &&
              <p><FaPhone /> <a href={`tel:${phone}`}>{phone}</a></p>
            }
            {email &&
              <p><FaEnvelope /> <a href={`mailto:${email}`}>{email}</a></p>
            }
            {address &&
              <p><FaHome /> {address}</p>
            }
          </address>
          {address &&
            <div className="mb-3">
              <iframe
                title="contact-map"
                frameBorder="0"
                width="100%"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAhL1Fckv4m2EV8Tw7cdHsupwZ7I4tqWQo&q=${address}`}
                allowFullScreen>
              </iframe>
            </div>
          }
        </Col>
        <Col sm="6">
          <Form name="contact" method="POST" action="/thank-you" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="bot-field" />
            <h2>{formTitle}</h2>
            {inputs.map((x, index) => {
              if (Object.keys(inputs[index]).length !== 0) {
                const y = x.item.name.toLowerCase().replace(" ", "_");
                return (
                  x.item.required ? (
                    <FormGroup key={index}>
                      <Label for={y}>{x.item.name} *</Label>
                      <Input type={x.item.type} name={y} id={y} placeholder={x.item.placeholder} required/>
                    </FormGroup>
                    ):(
                    <FormGroup key={index}>
                      <Label for={y}>{x.item.name}</Label>
                      <Input type={x.item.type} name={y} id={y} placeholder={x.item.placeholder}/>
                    </FormGroup>
                  )
                )
              } else {
                return <Input type="text"/>;
              }
            })}

            <Button color={buttonColor}>{buttonText}</Button>
          </Form>
        </Col>
      </Row>
    </section>
  );
}

export default Contact
