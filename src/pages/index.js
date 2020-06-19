import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import background from '../images/living-type-banner.jpg';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />

		<div 
			className="bg-fixed bg-cover bg-center pt-4"
			style={{
				backgroundImage: `url('${background}')`,
				height: `400px`
			}}
		>
			<div className="container">
				<div className="">
					<h1>Banner</h1>
				</div>
			</div>
		</div>

		<div className="container">
			<h1>Living Type</h1>
			<p>Welcome to the home of Living Type.</p>
		</div>
	</Layout>
);

export default IndexPage;
