import React from "react";
import FaFacebook from 'react-icons/lib/fa/facebook-square';

const Social = props => (
    <a
    href={props.link}
    className={`nav-link p-0 text-${props.socialColour}`}
    target="_blank"
    title={`${props.siteTitle} on Facebook`}
  >
    <FaFacebook size={28} />
    <span className="sr-only">Facebook</span>
  </a>
);
export default Social;