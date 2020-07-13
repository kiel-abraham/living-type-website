import React, { useState } from "react";
import { graphql } from "gatsby";
// import { reverse } from "lodash";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { RiPlayCircleLine } from "react-icons/ri";

import Layout from "../components/layout";
import SEO from "../components/seo";

const Music = ({ data }) => {

    const { allAirtableSongs } = data;
    // data from Airtable comes in reverse order so using flex below to switch around
    let songs = allAirtableSongs.edges;
    const first = songs[songs.length - 1].node.data;
    
    const [audioTitle, setAudioTitle] = useState(first.Name);
    const [audioTrack, setAudioTrack] = useState(first.MP3[0].url);

    function playTrack(name) {
        let selected = songs.find(x => x.node.data.Name === name);
        setAudioTitle(selected.node.data.Name);
        setAudioTrack(selected.node.data.MP3[0].url);
    }

    return (
        <Layout>
            <SEO title="Music" description="Living Type debut EP Eleven is out now! Listen here or stream via Spotify, Apple Music and more." />

            <div className="container">
                <h1>Music</h1>

                <div className="flex flex-col sm:flex-row">

                    <div className="sm:w-1/2">
                        {first.Artwork && 
                            <img src={first.Artwork[0].url} alt={`${first.Album_name} artwork`} />
                        }
                    </div>

                    <div className="sm:w-1/2 bg-lt-black text-white px-8 py-8 sm:py-0">

                        <h2>{first.Album_name}</h2>

                        <div className="flex flex-col-reverse py-8">
                
                            {songs.map((item, index) => {
                                const { data } = item.node;
                                return (
                                    <a
                                        href="#"
                                        key={index}
                                        onClick={() => playTrack(data.Name)}
                                    >
                                        <h3 className="track-title cursor-pointer">
                                            {data.Name} 
                                            <span className="inline-block float-right"><RiPlayCircleLine /></span>
                                        </h3>
                                    </a>
                                );
                            })}
                        
                        </div>

                        <div className="text-lt-black">
                            <AudioPlayer
                                autoPlay={false}
                                footer={audioTitle}
                                src={audioTrack}
                                volume={0.8}
                                customAdditionalControls={[]}
                                // customIcons={{ play: <RiPlayCircleLine />, pause: <RiPauseCircleLine /> }}
                            />
                        </div>

                    </div>

                </div>

            </div>
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
