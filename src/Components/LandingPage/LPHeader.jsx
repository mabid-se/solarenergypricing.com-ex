import React from "react";

import { Box, Button, Grid, Typography } from "@mui/material";

import StartByZipCode from "../StartByZipCode";
import RoundedInputField from "../RoundedInputField";

import "../../assets/CSS/LPHeader.css";
import { useState } from "react";

const LPHeader = () => {
    const [message, setMessage] = useState("");

    const onAddHandler = (messageError) => {
        console.log(messageError);
        setMessage(messageError);
    };
    return (

        <Box className="boxContainer" >
            <Grid container direction="column" justifyContent="center" alignItems="center"
                sx={{ paddingY: { xs: 5, sm: 7, md: 8, lg: 10, xl: 12 }, }}
                className="continerGrid" >
                <Grid item sx={{
                    marginTop: { xs: 3, sm: 3, md: 3, lg: 12, xl: 12 },
                    paddingTop: { xs: 8, sm: 8, md: 8, lg: 12, xl: 12 }
                }}>
                    <Typography variant="h4" textAlign="center" textTransform="capitalize">
                        you are our priority.
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="h2" textAlign="center" textTransform="capitalize" fontWeight="bold">
                        get the best deal on solar
                    </Typography>
                </Grid>

                <Grid item sx={{ marginTop: 4 }}>
                    <StartByZipCode message={message} />
                </Grid>

                <Grid item sx={{ marginBottom: { xs: 3, sm: 4, md: 5, lg: 8, xl: 12 }, }} >
                    <RoundedInputField onAddHandler={onAddHandler} />
                </Grid>
            </Grid>
        </Box>
    );
};

export default LPHeader; // 100
