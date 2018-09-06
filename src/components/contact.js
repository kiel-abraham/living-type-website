import React from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import FaPhone from 'react-icons/lib/fa/phone';
import FaEmail from 'react-icons/lib/fa/envelope';
import FaHome from 'react-icons/lib/fa/home';

const Contact = ({ title, body, phone, email, address, formTitle, buttonColor, buttonText, inputs }) => {
  let strippedAddress = address.replace(/[, ]/g,'+');
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
              <a href={`https://www.google.com/maps/place/${strippedAddress}/`}>
                <img width="100%" src={`https://maps.googleapis.com/maps/api/staticmap?center=${strippedAddress}&zoom=15&scale=1&size=600x300&maptype=roadmap&format=jpg&key=AIzaSyAhL1Fckv4m2EV8Tw7cdHsupwZ7I4tqWQo&q&format=png&visual_refresh=true&markers=size:small%7Ccolor:0xff0000%7Clabel:%7C${strippedAddress}" alt="Google Map of ${address}"`} />
              </a>
              <img width="100%" src={`https://maps.googleapis.com/maps/api/staticmap?center=${strippedAddress}&zoom=15&scale=1&size=600x300&maptype=roadmap&key=AIzaSyAhL1Fckv4m2EV8Tw7cdHsupwZ7I4tqWQo&q&format=png&visual_refresh=true&markers=size:small%7Ccolor:0xff0000%7Clabel:%7C${strippedAddress}" alt="Google Map of ${address}"`} />
            </div>
          }
        </Col>
        <Col sm="6">
          <Form name="contact" method="POST" action="/thankyou" data-netlify="true">
            <h2>{formTitle}</h2>
            {inputs.map((x, index) => {
              if (Object.keys(inputs[index]).length !== 0) {
                const y = x.item.name.toLowerCase().replace(" ", "_");
                return (
                  x.item.required ? (
                    <FormGroup key={index}>
                      <Label for={`${y}${index}`}>{x.item.name} *</Label>
                      <Input type={x.item.type} name={`${y}${index}`} id={index} placeholder={x.item.placeholder} required/>
                    </FormGroup>
                    ):(
                    <FormGroup key={index}>
                      <Label for={`${y}${index}`}>{x.item.name}</Label>
                      <Input type={x.item.type} name={`${y}${index}`} id={index} placeholder={x.item.placeholder}/>
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