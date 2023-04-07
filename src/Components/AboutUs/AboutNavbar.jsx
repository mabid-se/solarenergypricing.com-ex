import React from "react";
import { AppBar, Box, Button, Grid, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import MainNavbar from "../MainNavbar";

const AboutNavbar = () => {
    return (
        <>
            <MainNavbar>
                <Toolbar sx={{
                    background: "#FAFAFA",
                    ".appbarItem": {
                        color: "#101010ad",
                        textTransform: "uppercase",
                    },

                    ".appbarItem:hover": {
                        color: "#23ABF9",
                        textDecoration: "underline"
                    },
                    ".appbarItem:focus": {
                        color: "#23ABF9",
                    }
                }}>
                    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ paddingY: 3 }} >
                        <Grid item sx={{ marginX: { xs: 1, sm: 2, md: 3, lg: 5, xl: 6 }, }}>
                            <Link to={"/about_us/mission"} className="appbarItem">
                                <Typography variant="h6">
                                    our mission
                                </Typography>
                            </Link>
                        </Grid>

                        <Grid item sx={{ marginX: { xs: 1, sm: 2, md: 3, lg: 5, xl: 6 }, }}>
                            <Link to={"/about_us/company"} className="appbarItem">
                                <Typography variant="h6">
                                    company
                                </Typography>
                            </Link>
                        </Grid>

                        <Grid item sx={{ marginX: { xs: 1, sm: 2, md: 3, lg: 5, xl: 6 }, }}>
                            <Link to={"/about_us/reviews"} className="appbarItem">
                                <Typography variant="h6">
                                    reviews
                                </Typography>
                            </Link>
                        </Grid>

                        <Grid item sx={{ marginX: { xs: 1, sm: 2, md: 3, lg: 5, xl: 6 }, }}>
                            <Link to={"/about_us/contact"} className="appbarItem">
                                <Typography variant="h6">
                                    contact us
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </MainNavbar>
        </>
    );
};

export default AboutNavbar;
