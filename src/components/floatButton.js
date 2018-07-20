import React from 'react';
import Link from 'gatsby-link';
import { Button } from 'reactstrap';
import FaPhone from 'react-icons/lib/fa/phone';
import FaEnvelope from 'react-icons/lib/fa/envelope';

const FloatButton = ({ floatButtonColour, floatButton }) => {

    const styles = {
        borderRadius: "50%",
        left: "-10px",
        width: "50px",
        height: "50px"
    };
    return (
        <Button
          color={floatButtonColour}
          className="float-right fixed-bottom"
          style={styles}
        >
          {floatButton === "Phone" &&
            <FaPhone />
          }
          {floatButton === "Email" &&
            <FaEnvelope />
          }
        </Button>
    )
}

export default FloatButton;