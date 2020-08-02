import React from "react";
import { MusicPlayerProvider } from "./musicPlayerContext";

const PageWrapper = ({ children }) => (
    <MusicPlayerProvider>
        {children}
    </MusicPlayerProvider>
);

export default PageWrapper;
