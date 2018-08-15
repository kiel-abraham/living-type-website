import React from 'react';
import Helmet from 'react-helmet';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import FaPhone from 'react-icons/lib/fa/phone';
import FaEmail from 'react-icons/lib/fa/envelope';
import FaHome from 'react-icons/lib/fa/home';

const ContactPage = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
return (
  <div>
    <Helmet title={`${frontmatter.title} | ${data.site.siteMetadata.title}`} />

    <section className="container mt-4">
      <Row>
        <Col xs="12">
          <h1>{frontmatter.title}</h1>
        </Col>
        <Col sm="6">
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          <address>
            <FaPhone/> <a href={`tel:${data.markdownRemark.frontmatter.phone}`}>{data.markdownRemark.frontmatter.phone}</a><br/>
            <FaEmail/> <a href={`mailto:${data.markdownRemark.frontmatter.email}`}>{data.markdownRemark.frontmatter.email}</a><br/>
            <FaHome/> {data.markdownRemark.frontmatter.address}
          </address>
        </Col>
        <Col sm="6">
        <Form>
          <h2>Send a message</h2>
          <FormGroup>
          <Label for="name">Name</Label>
          <Input type="text" name="name" id="name" placeholder="Enter your name" />
        </FormGroup>
        <FormGroup>
          <Label for="email">Email</Label>
          <Input type="email" name="email" id="email" placeholder="Enter your email" />
        </FormGroup>
        <FormGroup>
          <Label for="message">Message</Label>
          <Input type="textarea" name="message" id="message" />
        </FormGroup>
        <Button color="primary">Submit</Button>
      </Form>
        </Col>
      </Row>
    </section>
  </div>
);
}

export default ContactPage

export const ContactQuery = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(frontmatter: { pageType: { eq: "contact" } }) {
      html
      frontmatter {
        title
        phone
        email
        address
      }
    }
  }
`;