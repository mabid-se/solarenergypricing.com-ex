import { Box, Grid, Typography } from "@mui/material";
import React from "react";

import ourMissionHeaderIco from "../../../assets/images/AMMIcon.svg";
import "../../../assets/CSS/OurMissionHeader.css";

const OMHeader = () => {
    return (
        <>
            <Box className="ourMissionBoxContainer" sx={{ marginTop: 32 }}>
                <Grid container direction="column" justifyContent="center" alignItems="center"
                    sx={{ paddingY: { xs: 4, sm: 5, md: 6, lg: 8, xl: 10 }, }}  >
                    <Grid item sx={{
                        marginTop: { xs: 2, sm: 2, md: 4, lg: 10, xl: 10 },
                        paddingTop: { xs: 7, sm: 7, md: 7, lg: 10, xl: 10 }
                    }}>
                        <img src={ourMissionHeaderIco} alt="our-mission-header-icon" />
                    </Grid>

                    <Grid item marginTop={2} >
                        <Typography variant="h4" textAlign="center" color="#252a3d" fontWeight="bold" textTransform="capitalize">
                            our mission
                        </Typography>
                    </Grid>

                    <Grid item marginTop={1} sx={{ marginBottom: { xs: 3, sm: 4, md: 5, lg: 8, xl: 22 }, }}>
                        <Typography variant="h2" textAlign="center" color="#252a3d"
                            letterSpacing="-3.15px"
                            fontSize="82px"
                            lineHeight="82px"

                            fontWeight="bold">
                            Helping homeowners<br />get the best deal on solar.
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default OMHeader;
