import React from "react";
import { MusicPlayerProvider } from "./musicPlayerContext";
import MusicPlayer from "./musicPlayer";

const PageWrapper = ({ children }) => (
    <MusicPlayerProvider>
        {children}
        <MusicPlayer />
    </MusicPlayerProvider>
);

export default PageWrapper;
