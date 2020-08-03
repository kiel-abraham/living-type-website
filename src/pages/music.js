import React, { useContext } from "react";
import { RiPlayCircleLine } from "react-icons/ri";

import Layout from "../components/layout";
import SEO from "../components/seo";

import { MusicPlayerContext } from "../components/musicPlayerContext";

const Music = () => {

    const [state, setState] = useContext(MusicPlayerContext);

    const playTrack = (e, index) => {
        e.preventDefault();
        setState(state => ({ ...state, current: index }));
    }

    const songs = state.tracks;
    const first = songs[0];

    return (
        <Layout>
            <SEO title="Music" description="Living Type debut EP Eleven is out now! Listen here or stream via Spotify, Apple Music and more." />

            <div className="container">
                <h1>Music</h1>

                <div className="flex flex-col sm:flex-row shadow-md">

                    <div className="sm:w-1/2">
                        {first.Artwork && 
                            <img src={first.Artwork[0].url} alt={`${first.Album_name} artwork`} />
                        }
                    </div>

                    <div className="sm:w-1/2 bg-lt-black text-white px-8 py-4">

                        <h2>{first.Album_name}</h2>

                        <div className="flex flex-col py-8">
                
                            {songs.map((track, index) => {
                                return (
                                    <a
                                        href="/#"
                                        key={index}
                                        onClick={(e) => playTrack(e, index)}
                                    >
                                        <h3 className="track-title cursor-pointer">
                                            {track.Name} 
                                            <span className="inline-block float-right"><RiPlayCircleLine /></span>
                                        </h3>
                                    </a>
                                );
                            })}
                        
                        </div>

                    </div>

                </div>

            </div>
        </Layout>
    );
}

export default Music;
