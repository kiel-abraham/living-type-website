import React from "react";
import { graphql } from "gatsby";
import { reverse } from "lodash";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Music = ({ data }) => {
    const { allAirtableSongs } = data;
    const first = allAirtableSongs.edges[0].node.data;
    return (
        <Layout>
            <SEO title="Music" />
            <h1>Music</h1>

            <h2>{first.Album_name}</h2>
            {first.Artwork && 
                <img src={first.Artwork[0].url} alt={`${first.Album_name} artwork`} />
            }
            
            {reverse(allAirtableSongs.edges).map((item, index) => {
                const { data } = item.node;
                return (
                    <div key={index}>
                        <h3>{data.Name}</h3>
                        {data.MP3 &&
                            <audio controls>
                                <source src={data.MP3[0].url} type="audio/mpeg" />
                                Your browser does not support the audio element.
                            </audio>
                        }
                    </div>
                );
            })}
        </Layout>
    );
}

export default Music;

export const query = graphql`
    query {
        allAirtableSongs {
            edges {
                node {
                    data {
                        Album_name
                        Name
                        Artwork {
                            url
                        }
                        MP3 {
                            url
                        }
                    }
                }
            }
        }
    }
`;
