import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";

import background from '../images/living-type-banner.jpg';

const IndexPage = () => {
	const data = useStaticQuery(graphql`
		query {
		image: file(relativePath: { eq: "living-type-live-photo.jpg" }) {
					childImageSharp {
						fluid(maxWidth: 300) {
						...GatsbyImageSharpFluid
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<SEO title="The home of Living Type music" />

			<div 
				className="relative bg-cover pt-4"
				style={{
					backgroundImage: `url('${background}')`,
					backgroundPositionX: `50%`,
					backgroundPositionY: `25%`,
					height: `450px`
				}}
			>
				<div className="absolute bottom-0 left-0">
					<div className="bg-lt-black text-orange-400 p-8">
						New EP coming soon
					</div>
				</div>
			</div>

			<section className="container">
				<h1>Living Type</h1>

				<div className="flex flex-col sm:flex-row mb-12">

					<div className="sm:w-1/2">
						<p className="mb-8">Brisbane based alternative rock band. With straight hitting guitar and drums, and honest vocals, to deliver their driving sound!</p>

						<div className="mb-8">
							<h3>Members</h3>
							<p>Ben - Vocals / Bass</p>
							<p>Kiel - Guitar</p>
							<p>Greg - Drums</p>
						</div>
					</div>

					<div className="sm:w-1/2">
						<Img fluid={data.image.childImageSharp.fluid} alt="Living Type live photo" className="w-full sm:w-2/3 float-right" />
					</div>
				</div>

				<h2>Latest video</h2>
				<div className="embed-responsive">
					<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/CQJcYZMWv0A" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
				</div>
				
			</section>
		</Layout>
	);
}

export default IndexPage;
