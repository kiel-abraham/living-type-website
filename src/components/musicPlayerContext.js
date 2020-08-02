import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { reverse } from "lodash";

const MusicPlayerContext = React.createContext([{}, () => {}]);

const MusicPlayerProvider = (props) => {
    const data = useStaticQuery(graphql`
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
    `);

    let tracks = data.allAirtableSongs.edges.map((item, index) => {
        return item.node.data;
    });
    tracks = reverse(tracks);

    const [state, setState] = useState({ tracks, current: 0 });

    return (
        <MusicPlayerContext.Provider value={[state, setState]}>
            {props.children}
        </MusicPlayerContext.Provider>
    );
};
  
export { MusicPlayerContext, MusicPlayerProvider };
