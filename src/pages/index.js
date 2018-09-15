import React from 'react';
import { Row, Col } from 'reactstrap';
import Banner from '../components/banner';

const HomePage = ({ data }) => {
  const frontmatter = data.markdownRemark.frontmatter;
  const x = frontmatter.latestVideo;
  const videoId = x.slice((x.lastIndexOf("/") + 1), x.length);
  return (
    <div>
      <Banner
        visible={frontmatter.banner.visible}
        fullWidth={frontmatter.banner.fullWidth}
        title={frontmatter.banner.title}
        subtitle={frontmatter.banner.subtitle}
        image={frontmatter.banner.image}
        overlay={frontmatter.banner.overlay}
        button={frontmatter.banner.button}
        buttonLink={frontmatter.banner.buttonLink}
        buttonColour={frontmatter.banner.buttonColour}
        align={frontmatter.banner.align}
      />

      <section className="container mt-4">
        <Row>
          <Col className={`text-${frontmatter.contentAlign}`}>
            <h1>{frontmatter.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
            {frontmatter.latestVideo &&
              <div>
                <h3>Latest Video</h3>
                <div className="col-sm-8 offset-sm-2 col-md-6 offset-md-3 embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item" src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" allowFullScreen></iframe>
                </div>
              </div>
            }
          </Col>
        </Row>
      </section>
    </div>
  )
}

export default HomePage

export const IndexQuery = graphql`
  query IndexQuery {
    markdownRemark(frontmatter: { homePage: { eq: true } }) {
      html
      frontmatter {
        title
        contentAlign
        latestVideo
        banner {
          visible
          fullWidth
          align
          title
          subtitle
          image
          overlay
          button
          buttonLink
          buttonColour
        }
      }
    }
  }
`;