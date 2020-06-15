import React from "react";
import { Link, graphql } from "gatsby";
import { kebabCase } from "lodash";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Shows = ({ data }) => {
    const { allAirtableShows } = data;
    return (
        <Layout>
            <SEO title="Shows" />
            
            <div className="container">
                <h1>Shows</h1>

                {allAirtableShows.edges.map((item, index) => {
                    const { data } = item.node;
                    return (
                        <div key={index}>
                            <h2>
                                <Link to={`/shows/${kebabCase(data.Name)}`}>{data.Name}</Link>
                            </h2>
                            <p>{data.Date}</p>
                            <p>
                                <a href={`https://maps.google.com/maps?q=${data.Address}`} title="Open address in Google maps" target="_blank" rel="noreferrer">
                                    {data.Venue_name}
                                </a>
                            </p>
                        </div>
                    );
                })}
            </div>
        </Layout>
    );
}

export default Shows;

export const query = graphql`
    query {
        allAirtableShows {
            edges {
                node {
                    data {
                        Date(formatString: "DD MMMM, Y")
                        Name
                        Address
                        Venue_name
                    }
                }
            }
        }
    }
`;
