import React from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import FaPhone from 'react-icons/lib/fa/phone';
import FaEmail from 'react-icons/lib/fa/envelope';
import FaHome from 'react-icons/lib/fa/home';

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
              <p><FaEmail /> <a href={`mailto:${email}`}>{email}</a></p>
            }
            {address &&
              <p><FaHome /> {address}</p>
            }
          </address>
          {address &&
            <div className="mb-3">
              <iframe
                frameBorder="0"
                width="100%"
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAhL1Fckv4m2EV8Tw7cdHsupwZ7I4tqWQo&q=${address}`}
                allowFullScreen>
              </iframe>
            </div>
          }
        </Col>
        <Col sm="6">
          <Form>
            <h2>{formTitle}</h2>

            {inputs.map((item, index) => {
              return (
                item.required ? (
                  <FormGroup>
                    <Label for="name">{item.name} *</Label>
                    <Input type={item.type} name="name" id="name" placeholder={item.placeholder} required/>
                  </FormGroup>
                  ):(
                  <FormGroup>
                    <Label for="name">{item.name}</Label>
                    <Input type={item.type} name="name" id="name" placeholder={item.placeholder}/>
                  </FormGroup>
                )
              )
            })}

            <FormGroup>
              <Label for="email">Email</Label>
              <Input type="email" name="email" id="email" placeholder="Enter your email" required/>
            </FormGroup>
            <FormGroup>
              <Label for="message">Message</Label>
              <Input type="textarea" name="message" id="message" />
            </FormGroup>
            <Button color={buttonColor}>{buttonText}</Button>
          </Form>
        </Col>
      </Row>
    </section>
  );
}

export default Contact