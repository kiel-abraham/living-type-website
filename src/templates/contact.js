import React from 'react';
import Helmet from 'react-helmet';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ContactPage = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  const space = true ? "mt-4" : "";
return (
  <div>
    <Helmet title={`${frontmatter.title} | ${data.site.siteMetadata.title}`} />

    <section className={`container ${space}`}>
      <Row>
        <Col>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />

        <Form>
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
      }
    }
  }
`;