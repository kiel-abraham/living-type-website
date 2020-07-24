import React from "react";
import { Link, graphql } from "gatsby";
import { kebabCase } from "lodash";

import Layout from "../components/layout";
import SEO from "../components/seo";

import placeholder from '../images/living-type-banner.jpg';

const Shows = ({ data }) => {
    const { allAirtableShows } = data;
    return (
        <Layout>
            <SEO title="Shows" />
            
            <div className="container">

                <div className="mb-4">
                    <h1>Shows</h1>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 row-gap-8">

                    {allAirtableShows.edges.map((item, index) => {
                        const { data } = item.node;
                        const image = data.Flyer !== null ? data.Flyer[0].url : placeholder;
                        return (
                            <div key={index} className="shadow-md bg-lt-black transform transition duration-500 ease-in-out hover:scale-105">
                                <Link to={`/shows/${kebabCase(data.Name)}`}>
                                    <div className="w-full bg-cover bg-center" style={{backgroundImage: `url('${image}')`, minHeight: `200px`}} alt={`${data.Name} flyer`}></div>
                                    <div className="px-6 py-4">
                                        <h3 className="mb-2">{data.Name}</h3>
                                        <p className="text-base">{data.Date}</p>
                                        <p className="text-base">{data.Venue_name}</p>
                                    </div>
                                    <div className="px-6 py-4 space-x-2">
                                        {data.Band_names && data.Band_names.map((item, index) => (
                                            <span key={index} className="chip bg-lt-black-body">{item}</span>
                                        ))}
                                    </div>
                                </Link>
                            </div>
                        );
                    })}
                </div>

            </div>
        </Layout>
    );
}

export default Shows;

export const query = graphql`
    query {
        allAirtableShows(sort: {fields: data___Date, order: DESC}) {
            edges {
                node {
                    data {
                        Date(formatString: "DD MMMM, Y")
                        Name
                        Venue_name
                        Band_names
                        Flyer {
                            url
                        }
                    }
                }
            }
        }
    }
`;
