import React, { useState } from "react";

import { Box, Container, Grid, Typography } from "@mui/material";

import StartByZipCode from "./StartByZipCode";
import RoundedInpSub from "./RoundedInputField";

import ringingPhone from "../assets/images/ringingPhone.png";
import locationImage from "../assets/images/locPin.png";

import "../assets/CSS/Footer.css"

const Footer = () => {
    const [message, setMessage] = useState("");
    const onAddHandler = (messageError) => {
        console.log(messageError);
        setMessage(messageError);
    };

    return (
        <>
            <Grid paddingTop={7} sx={{ background: '#1C98E4', paddingBottom: { xs: 28, sm: 42, md: 16, lg: 20, xl: 18 }, }}>
                <Grid>
                    <Typography variant="h4" textAlign="center" color="#ffffff">
                        Go Solar Today.
                    </Typography>

                    <Typography variant="body1" textAlign="center" marginTop={1} marginBottom={5} color="#ffffff">
                        Lower your electric bill, increase your property value, reduce<br /> your tax liability, and help the environment.
                    </Typography>

                    <StartByZipCode message={message} />

                    <Grid container justifyContent={'center'} marginTop={1}>
                        <RoundedInpSub onAddHandler={onAddHandler} />
                    </Grid>
                </Grid>
            </Grid>

            <Grid sx={{ marginY: { xs: -24, sm: -30, md: -10, lg: -12, xl: -12 }, }} >
                <Container>
                    <Grid container direction="row" justifyContent="center" alignItems="stretch">
                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ background: '#629BFD', }} padding={2} >
                            <Grid container direction="row" justifyContent="space-around" alignItems="center">
                                <Grid item xs={7} sm={7} md={8} lg={8} xl={8} paddingLeft={5}>
                                    <Typography variant="subtitle1" fontWeight="bold" color="white" textTransform="uppercase" marginTop={5}>
                                        get in touch
                                    </Typography>

                                    <Typography variant="body2" marginTop={2} color="white" textTransform="uppercase">
                                        111 ABCSt. <br /> 1233331, ABC <br/> United States
                                    </Typography>
                                </Grid>

                                <Grid item xs={5} sm={5} md={4} lg={4} xl={4}>
                                    <img src={locationImage} alt="location-png" marginX={5} width="65%" />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={12} md={6} lg={6} xl={6} sx={{ background: '#00B964' }} padding={2}>
                            <Grid container direction="row" justifyContent="space-around" alignItems="center">
                                <Grid item xs={7} sm={7} md={8} lg={8} xl={8} paddingLeft={5}>
                                    <Typography variant="subtitle1" fontWeight="bold" color="white" textTransform="uppercase" marginTop={5}>
                                        call us
                                    </Typography>

                                    <Typography variant="body2" marginTop={2} color="white" textTransform="uppercase">
                                        Support: 123 123 1234 <br /> Office: +00 (123) 123 1234
                                    </Typography>
                                </Grid>

                                <Grid item xs={5} sm={5} md={4} lg={4} xl={4}>
                                    <img src={ringingPhone} alt="ringingPhone-png" marginX={5} width="65%" />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>

            <Grid paddingBottom={7} sx={{ background: "linear-gradient(180deg, #4B79A1 0%, #115197 100%)", paddingTop: { xs: 28, sm: 40, md: 14, lg: 18, xl: 22 }, }}>
                <Container>
                    <Grid container direction="row" justifyContent="center" alignItems="flex-start" spacing={3}>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} >
                            <Grid container direction="column" justifyContent="center" alignItems="flex-start">
                                <Grid item>
                                    <Typography variant="h6" textTransform="uppercase" color="white">
                                        about us
                                    </Typography>
                                </Grid>

                                <Grid item marginTop={2}>
                                    <Typography variant="body2" color="white" paddingRight={6} >
                                        Lorem ipsum dolar sit amet,  coresteture adipsieing elit, sed do eiusmed lemopor
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Grid container direction="column" justifyContent="center" alignItems="flex-start">
                                <Grid item>
                                    <Typography variant="h6" textTransform="uppercase" color="white">
                                        company
                                    </Typography>
                                </Grid>

                                <Grid item marginTop={2} className="pagesMenu">
                                    <Typography variant="body1" >
                                        <a href="#">Home</a>
                                    </Typography>

                                    <Typography variant="body1" marginTop={2}>
                                        <a href="#">About</a>
                                    </Typography>

                                    <Typography variant="body1" marginTop={2}>
                                        <a href="#">Services</a>
                                    </Typography>

                                    <Typography variant="body1" marginTop={2}>
                                        <a href="#">Projects</a>
                                    </Typography>

                                    <Typography variant="body1" marginTop={2}>
                                        <a href="#">Contact</a>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                            <Grid container direction="column" justifyContent="center" alignItems="flex-start">
                                <Grid item>
                                    <Typography variant="h6" textTransform="uppercase" color="white">
                                        contact us
                                    </Typography>
                                </Grid>

                                <Grid item marginTop={2}>
                                    <Typography variant="body2" color="white">
                                        111 ABC St. <br />12333331, ABC
                                    </Typography>

                                    <Typography variant="body2" color="white" marginTop={1}>
                                        (+00) 123-123-1234
                                    </Typography>

                                    <Typography variant="body2" color="white" marginTop={2}>
                                        info@solarenergypricing.com
                                    </Typography>

                                    <Typography variant="body2" color="white" marginTop={2}>
                                        Mon-Fri 09:00-17:00
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
            </Grid>
        </>
    )
};

export default Footer; // 194
