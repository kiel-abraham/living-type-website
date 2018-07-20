import React from 'react';
import Link from 'gatsby-link';
import { Button } from 'reactstrap';

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
            "P"
          }
          {floatButton === "Email" &&
            "E"
          }
        </Button>
    )
}

export default FloatButton;