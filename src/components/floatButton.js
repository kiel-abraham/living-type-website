import React from 'react';
import { Link } from 'gatsby';
import { FaPhone, FaEnvelope } from 'react-icons/fa';

const FloatButton = ({ floatButtonColour, floatButton, phone }) => {

    const styles = {
        borderRadius: "50%",
        right: "10px",
        bottom: "10px",
        width: "55px",
        height: "55px",
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