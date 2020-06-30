import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import background from '../images/living-type-banner.jpg';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />

		<div 
			className="relative bg-fixed bg-cover bg-center pt-4"
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

		<div className="container">
			<h1>Living Type</h1>
			<p>Welcome to the home of Living Type.</p>
		</div>
	</Layout>
);

export default IndexPage;
