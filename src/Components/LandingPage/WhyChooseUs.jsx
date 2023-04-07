
import React from "react";

import { Box, Container, Grid, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";
import savings from "../../assets/images/savings.png";
import map from "../../assets/images/map.png";
import toDoList from "../../assets/images/toDoList.png";

const WhyChooseUs = () => {
    return (
        <Box sx={{ background: '#E0EAFC', }}>
            <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ paddingX: { md: 6, lg: 10, xl: 15, }, }} >
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} paddingX={3} sx={{ marginTop: { xs: 7, sm: 7, md: 3, } }}>
                    <Typography variant="h3" textAlign="center" textTransform="capitalize">
                        why choose us
                    </Typography>

                    <Typography variant="subtitle1" textAlign="center" marginTop={3}>
                        sample text here
                    </Typography>
                </Grid>

                <Grid item xs={12} sm={12} md={4} lg={4} xl={4} padding={5}>
                    <Box sx={{ background: "#629BFD", borderRadius: "10px", padding: 3 }}>
                        <img src={map} alt="map-png" width="25%" />

                        <Typography variant="subtitle1" marginTop={2}>
                            1. Complete Commercial Services Package
                        </Typography>

                        <Typography variant="subtitle1" marginTop={1}>
                            We will find you the biggest rebates and incentives currently offered in you region.
                        </Typography>
                    </Box>
                </Grid>

                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Grid container direction="column" justifyContent="center" alignItems="center">
                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} padding={5} sx={{ marginTop: { md: "-65px", lg: "-65px", xl: "-65px" }, marginBottom: { md: "20px", lg: "20px", xl: "20px" } }} >
                            <Box sx={{ background: "#00B964", borderRadius: "10px", padding: 3 }}>
                                <img src={map} alt="map-png" width="25%" />

                                <Typography variant="subtitle1" marginTop={2}>
                                    2. Complete Residential Services Package
                                </Typography>

                                <Typography variant="subtitle1" marginTop={1}>
                                    Enter basic information to see if installing solar panels make sense for your home.
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={12} md={12} lg={12} xl={12} padding={5} sx={{ marginTop: { md: "20px", lg: "20px", xl: "20px" }, marginBottom: { md: "-65px", lg: "-65px", xl: "-65px" }, }} >
                            <Box sx={{ background: "#3BDADC", borderRadius: "10px", padding: 3 }}>
                                <img src={map} alt="map-png" width="25%" />

                                <Typography variant="subtitle1" marginTop={2}>
                                    3. Use of Sustainable Resources and Environmental Practices
                                </Typography>

                                <Typography variant="subtitle1" marginTop={1}>
                                    Once your home approved, you can compare the best saving offers in your area.
                                </Typography>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
};

export default WhyChooseUs;
