import React from "react";
import { RiFacebookBoxLine, RiInstagramLine, RiYoutubeLine, RiSpotifyLine, RiAppleLine, RiGooglePlayLine } from "react-icons/ri";

const Footer = () => (
  <footer className="bg-lt-black py-4 mb-20 sm:mb-12">
    <div className="container">

      <div className="flex flex-wrap justify-center">
        <a
          href="https://www.facebook.com/livingtype"
          target="_blank"
          rel="noreferrer"
          title="Facebook"
          className="social-link"
        >
          <RiFacebookBoxLine />
        </a>
        <a
          href="https://www.instagram.com/livingtypeofficial/"
          target="_blank"
          rel="noreferrer"
          title="Instagram"
          className="social-link"
        >
          <RiInstagramLine />
        </a>
        <a
          href="https://www.youtube.com/channel/UCgGeqr6xUH3C71ohNZcXb2w"
          target="_blank"
          rel="noreferrer"
          title="Youtube"
          className="social-link"
        >
          <RiYoutubeLine />
        </a>
        <a
          href="https://open.spotify.com/artist/2IQEc43d5HvELQg2lSgBrD"
          target="_blank"
          rel="noreferrer"
          title="Spotify"
          className="social-link"
        >
          <RiSpotifyLine />
        </a>
        <a
          href="https://itunes.apple.com/au/artist/living-type/1439884608"
          target="_blank"
          rel="noreferrer"
          title="Apple Music"
          className="social-link"
        >
          <RiAppleLine />
        </a>
        <a
          href="https://play.google.com/store/music/album/Living_Type_Eleven_EP?id=Bfpyccvlitkyozku7gt7w5drvla"
          target="_blank"
          rel="noreferrer"
          title="Google Play"
          className="social-link"
        >
          <RiGooglePlayLine />
        </a>
      </div>

    </div>
    
    <p className="text-center">© {new Date().getFullYear()}</p>
  </footer>
);

export default Footer;
