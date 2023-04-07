import React from "react";
import { Grid, Toolbar, Typography } from "@mui/material";

import { Link } from "react-router-dom";

import MainNavbar from "../../Components/MainNavbar";

const ResourcesNavbar = () => {
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
                            <Link to={"/resources/calculator"} className="appbarItem">
                                <Typography variant="h6">
                                    solar calculator
                                </Typography>
                            </Link>
                        </Grid>

                        <Grid item sx={{ marginX: { xs: 1, sm: 2, md: 3, lg: 5, xl: 6 }, }}>
                            <Link to={"/resources/faq"} className="appbarItem">
                                <Typography variant="h6">
                                    faq
                                </Typography>
                            </Link>
                        </Grid>

                        <Grid item sx={{ marginX: { xs: 1, sm: 2, md: 3, lg: 5, xl: 6 }, }}>
                            <Link to={"/resources/system_output"} className="appbarItem">
                                <Typography variant="h6">
                                    system output
                                </Typography>
                            </Link>
                        </Grid>

                        <Grid item sx={{ marginX: { xs: 1, sm: 2, md: 3, lg: 5, xl: 6 }, }}>
                            <Link to={"/resources/101"} className="appbarItem">
                                <Typography variant="h6">
                                    solar 101
                                </Typography>
                            </Link>
                        </Grid>
                    </Grid>
                </Toolbar>
            </MainNavbar>
        </>
    );
};

export default ResourcesNavbar;
