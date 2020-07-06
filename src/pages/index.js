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
			<SEO title="Home" />

			<div 
				className="relative bg-fixed bg-cover bg-center pt-4 shadow-lg"
				style={{
					backgroundImage: `url('${background}')`,
					height: `400px`
				}}
			>
				<div className="absolute bottom-0 left-0">
					<div className="bg-lt-black text-white p-8 hover:bg-orange-400 hover:text-lt-black">
						New EP coming soon
					</div>
				</div>
			</div>

			<section className="container">
				<h1>Living Type</h1>

				<div className="flex flex-col sm:flex-row">

					<div className="sm:w-1/2">
						<p className="mb-8">Brisbane based alternative rock band. With straight hitting guitar and drums, and honest vocals, to deliver their driving sound!</p>

						<h3>Members</h3>
						<p>Ben - Vocals / Bass</p>
						<p>Kiel - Guitar</p>
						<p>Greg - Drums</p>
					</div>

					<div className="sm:w-1/2">
						<Img fluid={data.image.childImageSharp.fluid} alt="Living Type live photo" className="w-full sm:w-2/3 float-right" />
					</div>
				</div>

				<h2>Latest video</h2>
				<div className="embed-responsive">
					<iframe className="embed-responsive-item" src="https://www.youtube.com/embed/CQJcYZMWv0A" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
				</div>
				
			</section>
		</Layout>
	);
}

export default IndexPage;
