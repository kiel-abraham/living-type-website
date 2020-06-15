import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import background from '../images/living-type-banner.jpg';

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />

		<div 
			className="bg-fixed bg-cover bg-center"
			style={{
				backgroundImage: `url('${background}')`,
				height: `350px`
			}}
		>
			<div className="container text-primary">
				<div className="">
					<h1>Banner</h1>
				</div>
			</div>
		</div>

		<div className="container">
			<h1>Living Type</h1>
			<p>Welcome to the home of Living Type.</p>
			<button className="transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 ...">
				Hover me
			</button>
		</div>
	</Layout>
);

export default IndexPage;
