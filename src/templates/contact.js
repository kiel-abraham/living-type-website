import React from 'react';
import Helmet from 'react-helmet';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const ContactPage = ({ data }) => {
const page = data.markdownRemark;
const metaTitle = page.frontmatter.title + " | " + data.site.siteMetadata.title;
return (
  <div>
    <Helmet title={metaTitle} />

    <section className="container">
      <Row>
        <Col>
          <h1>{page.frontmatter.title}</h1>
          <div>{page.frontmatter.hero.heroTitle}</div>
          <div dangerouslySetInnerHTML={{ __html: page.html }} />

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
        hero {
          showHero
          heroFull
          heroTitle
        }
      }
    }
  }
`;