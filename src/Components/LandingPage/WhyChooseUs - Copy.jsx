import React from "react";

import { Box, Container, Grid, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import savings from "../../assets/images/savings.png";
import map from "../../assets/images/map.png";
import toDoList from "../../assets/images/toDoList.png";
const WhyChooseUs = () => {
    return (
        <Box sx={{ background: '#E0EAFC', }}>
            <Container>
                {/* <Table > */}
                    <TableBody>
                        <TableRow>
                            <TableCell rowSpan={2} >
                                <Typography variant="h3" textAlign="center">
                                    Why Choose Us?
                                </Typography>

                                <Typography variant="subtitle1" textAlign="center">
                                    Smaple Text Here
                                </Typography>
                            </TableCell>

                            <TableCell rowSpan={2}>
                                <Grid p={2} sx={{ background: '#629BFD', borderRadius: '10px', }}>
                                    <img src={map} alt="map-png" width="25%" />

                                    <Typography variant="subtitle1" marginTop={2}>
                                        1. Complete Commercial Services Package
                                    </Typography>

                                    <Typography variant="subtitle1" marginTop={1}>
                                        We will find you the biggest rebates and incentives currently offered in you region.
                                    </Typography>
                                </Grid>
                            </TableCell>

                            <TableCell>
                                <Grid item p={2} sx={{ background: '#00B964', borderRadius: '10px', }} marginTop="-45px">
                                <img src={toDoList} alt="toDoList-png" width="25%" />

                                    <Typography variant="subtitle1" marginTop={2}>
                                        2. Complete Residential Services Package
                                    </Typography>

                                    <Typography variant="subtitle1" marginTop={1}>
                                        Enter basic information to see if installing solar panels make sense for your home.
                                    </Typography>
                                </Grid>
                            </TableCell>
                        </TableRow>

                        <TableRow>
                            <TableCell>
                                <Grid item p={2} sx={{ background: '#3BDADC', borderRadius: '10px', }} marginBottom="-45px">
                                <img src={savings} alt="savings-png" width="25%" />

                                    <Typography variant="subtitle1" marginTop={2}>
                                        3. Use of Sustainable Resources and Environmental Practices
                                    </Typography>

                                    <Typography variant="subtitle1" marginTop={1}>
                                        Once your home approved, you can compare the best saving  offers in your area.
                                    </Typography>
                                </Grid>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                {/* </Table> */}
            </Container>
        </Box>
    );
};

export default WhyChooseUs;
