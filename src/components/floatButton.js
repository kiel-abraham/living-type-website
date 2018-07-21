import React from 'react';
import Link from 'gatsby-link';
import FaPhone from 'react-icons/lib/fa/phone';
import FaEnvelope from 'react-icons/lib/fa/envelope';

const FloatButton = ({ floatButtonColour, floatButton, phone }) => {

    const styles = {
        borderRadius: "50%",
        right: "10px",
        bottom: "10px",
        width: "50px",
        height: "50px",
        position: "fixed"
    };
    
    if (floatButton === "Phone") {
      return (
        <a href={`tel:${phone}`} className={`btn btn-${floatButtonColour}`} style={styles}><FaPhone size={20} /></a>
      );
    } else if (floatButton === "Email") {
      return (
        <Link to="/contact" className={`btn btn-${floatButtonColour}`} style={styles}><FaEnvelope size={20} /></Link>
      );
    } else {
      return null;
    }
}

export default FloatButton;