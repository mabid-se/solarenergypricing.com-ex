import React from "react";

import { Button, Card, CardActions, CardContent, Container, Grid, Typography, Box } from "@mui/material";

import MonthlyBillSlider from "../MonthlyBillSlider";
import SingleScreenHeader from "./SingleScreenHeader";

import { useNavigate } from "react-router-dom";

const EnergyBillStep = (props) => {

    const navMe = useNavigate();

    const prevButton = props.goBack;
    const disabledOrNot = props.isDisabled;
    const progressValue = props.progValue;

    const zipBillSubmitHandler = () => {
        props.handleNext();
        navMe("../flow/homeowner");
    };

    return (
        <Box marginTop={12} sx={{ paddingTop: { xs: 7, sm: 3, md: 2, lg: 2, xl: 1 }, }}>
            <Card elevation={7}>
                <SingleScreenHeader goBack={prevButton} isDisabled={disabledOrNot} progValue={progressValue} />

                <Grid container direction="column" justifyContent="center" alignItems="center" paddingY={6} >
                    <Grid item>
                        <CardContent>
                            <Typography variant="h5" textAlign="center" fontWeight="bold">
                                How much is your monthly energy bill?
                            </Typography>

                            <MonthlyBillSlider />
                        </CardContent>
                    </Grid>

                    <Grid item sx={{ width: { xs: '80%', sm: '70%', md: '50%', lg: '50%', xl: '50%' }, }}>
                        <CardActions>
                            <Button variant="contained" color="success" size="large" fullWidth onClick={zipBillSubmitHandler} sx={{ height: "60px", }}>
                                Continue
                            </Button>
                        </CardActions>
                    </Grid>
                </Grid>
            </Card>
        </Box >
    );
};

export default EnergyBillStep; // 88
