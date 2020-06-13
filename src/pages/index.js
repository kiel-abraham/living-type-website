import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
	<Layout>
		<SEO title="Home" />
		<h1 className="shadow">Living Type</h1>
		<p>Welcome to the home of Living Type.</p>
		<button className="transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 ...">
			Hover me
		</button>
	</Layout>
);

export default IndexPage;
