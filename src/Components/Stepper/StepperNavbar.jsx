import { AppBar, Container, Grid, Toolbar, Typography } from "@mui/material";
import React from "react";

import LockIcon from '@mui/icons-material/Lock';
import { useNavigate } from "react-router-dom";

const StepperNavbar = () => {
    const styles = {
        lpLink: {
            color: "white", textDecoration: "none",
        },
    }
    return (
        <AppBar >
            <Container>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, paddingLeft: 5, }} >
                        <a href="/" style={styles.lpLink} >

                            Solar Energy Pricing
                        </a>
                    </Typography>

                    <Typography paddingRight={5}>
                        <Grid container direction="row" justifyContent="space-evenly" alignItems="center">
                            <Grid item paddingX={2}>
                                <LockIcon size="large" />
                            </Grid>

                            <Grid item>
                                <Grid container direction="column" justifyContent="space-evenly" alignItems="center">
                                    <Grid item>
                                        <Typography variant="h6">100% Secure</Typography>
                                    </Grid>

                                    <Grid item>
                                        <Typography variant="caption">Safe & Confidential!</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default StepperNavbar;
