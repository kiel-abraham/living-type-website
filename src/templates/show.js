import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Show = ({ pageContext, data }) => {
    const { airtableShows } = data;

    return (
        <Layout>
            <SEO title={pageContext.name} />

            <div className="container">
                <h1>{pageContext.name}</h1>
                <p>{airtableShows.data.Address}</p>
                <p>{airtableShows.data.Venue_name}</p>

                {airtableShows.data.Facebook_event && 
                    <a href={`${airtableShows.data.Facebook_event}`} target="_blank" rel="noreferrer">Facebook event</a>
                }

                <div>
                    <img src={`${airtableShows.data.Flyer[0].url}`} alt={`${pageContext.name} flyer`} />
                </div>
            </div>
        </Layout>
    );
}

export default Show;

export const query = graphql`
    query Show($name: String) {
        airtableShows(data: {Name: {eq: $name }}) {
            data {
                Address
                Band_names
                Date(formatString: "MMMMM DD, YYYY")
                Facebook_event
                Venue_name
                Flyer {
                    url
                }
            }
        }
    }
`;