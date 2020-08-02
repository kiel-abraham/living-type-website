import React from "react";
import Header from "./header";
import Footer from "./footer";
import MusicPlayer from "./musicPlayer";

const Layout = ({ children }) => (
  <>
    <Header />

    <main className="pb-20">
      {children}
    </main>

    <Footer />

    <MusicPlayer />
  </>
);

export default Layout;
