import React from "react";

import { Box, Container, Grid, Typography } from "@mui/material";

const NumbersDontLie = () => {
    return (
        <Box>
            <Container>
                <Grid container direction="row" justifyContent="center" alignItems="center" >
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant="h4" textAlign="center" fontWeight="bold" marginTop={8}>
                            The numbers don't lie
                        </Typography>

                        <Typography variant="h6" textAlign="center" fontWeight="normal">
                            We work with only the best installers in your area<br />to save you thousands annually.
                        </Typography>
                    </Grid>

                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" marginTop={4} >
                        <Grid item xs={12} sm={6} md={6} lg={3} xl={3} padding={3} >
                            <Typography variant="h3" color="#00B964" >
                                500+
                            </Typography>

                            <Typography variant="subtitl1" color="#00B964">
                                Solar Providers
                            </Typography>

                            <Typography variant="body2" marginTop={1} color="#9A9A9A">
                                Your generosity and our group of volunteers has allowed us to build over 740 houses in communities.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} lg={3} xl={3} padding={3} >
                            <Typography variant="h3" color="#00B964" >
                                $4,350
                            </Typography>

                            <Typography variant="subtitl1" color="#00B964">
                                Avg. Upfront Savings
                            </Typography>

                            <Typography variant="body2" marginTop={1} color="#9A9A9A">
                                Children and their families have been saved and taken off the streets to be housed.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} lg={3} xl={3} padding={3} >
                            <Typography variant="h3" color="#00B964" >
                                $51,500
                            </Typography>

                            <Typography variant="subtitl1" color="#00B964">
                                Avg. Lifetime Savings
                            </Typography>

                            <Typography variant="body2" marginTop={1} color="#9A9A9A">
                                Through global partnerships. We’re able to provide communities with the quality life they deserve.
                            </Typography>
                        </Grid>

                        <Grid item xs={12} sm={6} md={6} lg={3} xl={3} padding={3} >
                            <Typography variant="h3" color="#00B964" >
                                1M +
                            </Typography>

                            <Typography variant="subtitl1" color="#00B964">
                                Home Owners Served
                            </Typography>

                            <Typography variant="body2" marginTop={1} color="#9A9A9A">
                                Through global partnerships. We’re able to provide communities with the quality life they deserve.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default NumbersDontLie;
