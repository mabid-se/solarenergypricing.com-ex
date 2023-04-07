import React from "react";

import { Box, Container, Grid, Typography } from "@mui/material";

import mapSq from "../../assets/images/mapSquared.png";
import mapRounded from "../../assets/images/mapRounded.png";
import reliablityCircled from "../../assets/images/reliablityCircled.png";
import reliablitySquared from "../../assets/images/reliablitySquared.png";
import savingsCircled from "../../assets/images/savingsCircled.png";
import savingsSquared from "../../assets/images/savingsSquared.png";

import "../../assets/CSS/eligitbility.css";

const FindYourEligibility = () => {
    return (
        <Box marginTop={5} paddingBottom={9} sx={{ background: '#23ABF9', }}>
            <Container>
                <Grid container direction="row" justifyContent="center" alignItems="center" >
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} >
                        <Typography variant="h4" textAlign="center" marginTop={8} color="#ffffff">
                            Finding out if you are eligible for solar is simple
                        </Typography>

                        <Typography variant="h6" textAlign="center" marginTop={2} color="#ffffff">
                            it’s as easy as one two, three.
                        </Typography>
                    </Grid>

                    <Grid container direction="row" justtifyContent="space-evenly" alignItems="center" marginTop={4}>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} padding={2}>
                            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" display="table">
                                <Grid item xs={7} sm={7} md={8} lg={9} xl={9} padding={3} display="table-cell" sx={{ background: "#03458D", width: '100%' }}>
                                    <img src={mapRounded}  alt="map-png" width="10%" height="auto" />

                                    <Typography variant="body2" marginTop={1} color="#ffffff">
                                        We will find you the biggest rebates and incentives currently offered in you region.
                                    </Typography>
                                </Grid>

                                <Grid item xs={5} sm={5} md={4} lg={3} xl={3} display="table-cell" padding={1} sx={{ background: '#6FB9FF' }} >
                                    <Grid container justifyContent="center" alignContent="center" direction="row">
                                        <img src={mapSq}  alt="map-png" width="80%" height="auto" />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Typography variant="body1" color="#ffffff" paddingLeft={2} paddingTop={2}>
                                1. Enter Your Zip Code
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} padding={2}>
                            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" display="table">
                                <Grid item xs={7} sm={7} md={8} lg={9} xl={9} padding={3} display="table-cell" sx={{ background: "#03458D", width: '100%' }}>
                                    <img src={reliablityCircled} alt="map-png" width="10%" height="auto" />

                                    <Typography variant="body2" marginTop={1} color="#ffffff">
                                        Tutorials <br />How to customize <br /> the WooCommerce Shop Page
                                    </Typography>
                                </Grid>

                                <Grid item xs={5} sm={5} md={4} lg={3} xl={3} display="table-cell" padding={1} sx={{ background: '#6FB9FF' }} >
                                    <Grid container justifyContent="center" alignContent="center" direction="row">
                                        <img src={reliablitySquared} alt="map-png" width="80%" height="auto" />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Typography variant="body1" color="#ffffff" paddingLeft={2} paddingTop={2}>
                                2. Check reliability
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} padding={2}>
                            <Grid container direction="row" justifyContent="space-evenly" alignItems="center" display="table">
                                <Grid item xs={7} sm={7} md={8} lg={9} xl={9} padding={3} display="table-cell" sx={{ background: "#03458D", width: '100%' }}>
                                    <img src={savingsCircled}  alt="map-png" width="10%" height="auto" />

                                    <Typography variant="body2" marginTop={1} color="#ffffff">
                                        Tutorials <br />How to customize <br /> the WooCommerce Shop Page
                                    </Typography>
                                </Grid>

                                <Grid item xs={5} sm={5} md={4} lg={3} xl={3} display="table-cell" padding={1} sx={{ background: '#6FB9FF' }} >
                                    <Grid container justifyContent="center" alignContent="center" direction="row">
                                        <img src={savingsSquared}  alt="map-png" width="80%" height="auto" />
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Typography variant="body1" color="#ffffff" paddingLeft={2} paddingTop={2}>
                                3. See your savings
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default FindYourEligibility;
