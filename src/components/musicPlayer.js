import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import { MusicPlayerContext } from "./musicPlayerContext";
import "react-h5-audio-player/lib/styles.css";
import "../css/musicplayer.css";

const MusicPlayer = () => {

    const [state, setState] = useContext(MusicPlayerContext);

    const updateTrack = (index) => {
        setState(state => ({ ...state, current: index }));
    }

    const previous = () => {
        let x = state.current - 1;
        if (x === -1) {
            x = state.tracks.length - 1;
        }
        updateTrack(x);
    }

    const next = () => {
        let x = state.current + 1;
        if (x === state.tracks.length) {
            x = 0;
        }
        updateTrack(x);
    }

    return (
        <div id="music-player" className="fixed bottom-0 w-screen bg-lt-black">
            <div className="container">
                <AudioPlayer
                    autoPlay={false}
                    header={state.tracks[state.current].Name}
                    src={state.tracks[state.current].MP3[0].url}
                    volume={0.8}
                    showSkipControls={true}
                    showJumpControls={false}
                    customAdditionalControls={[]}
                    customVolumeControls={[]}
                    onClickPrevious={previous}
                    onClickNext={next}
                    onEnded={next}
                />
            </div>
        </div>
    );
};

export default MusicPlayer;
