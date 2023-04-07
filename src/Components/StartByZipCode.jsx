import { Typography } from "@mui/material";
import React from "react";

import "../assets/CSS/StartByZipCode.css";

const StartByZipCode = ({ message }) => {
    const error = message;
    console.log("in error messagfe", error)
    return (
        <>
            <div container className="typo3Box">
                <Typography variant="h6" className="typo3" textAlign="center">
                    {!error ? "Start by entering Zip Code" : error}
                </Typography>
            </div>
        </>
    );
}

export default StartByZipCode;
