import React, { useState } from "react";

import { Box, Container, Grid, Card, Button, CardActions, CardContent,  FormControl,  TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import SingleScreenHeader from "./SingleScreenHeader";

const PropertyAddress = (props) => {

    const navMe = useNavigate();
    const [address, SetAddress] = useState("");

     const prevButton = () => {
        props.goBack();
    };

    const disabledOrNot = props.isDisabled;
    const progressValue = props.progValue;
    
    const addressSubmitHandler = (e) => {
        e.preventDefault();
        if (address) {
            props.handleNext();
            navMe("../flow/name");
        }
    };

    return (
        <Box marginTop={12} sx={{ paddingTop: { xs: 7, sm: 3, md: 2, lg: 2, xl: 1 }, }}>
            <Card elevation={7}  >
                <SingleScreenHeader goBack={prevButton} isDisabled={disabledOrNot} progValue={progressValue} />

                <Grid container direction="column" justifyContent="center" alignItems="center" paddingY={6} >
                    <Grid item>
                        <CardContent>
                            <Typography variant="h5" fontWeight="bold" textAlign="center">
                                What’s you property address?
                            </Typography>

                            <Typography variant="subtitle1"
                                sx={{ marginTop: { xs: 1, sm: 1, md: 1, lg: 1, xl: 3 }, textAlign: 'center' }}>
                                For verification only. We do not mail.
                            </Typography>
                            {/* 
                            <Grid container direction="column" justifyContent="center" alignItems="center"
                                sx={{ paddingY: { xs: 2, sm: 3, md: 5, lg: 6, xl: 6 }, }}> */}
                            <FormControl>
                                <Grid item marginTop={5}
                                    sx={{ width: { xs: '240px', sm: '260px', md: '320px', lg: '360px', xl: '380px' }, }}>
                                    <TextField fullWidth variant="outlined" label="Street Address" error={address.length === 0 ? true : false} required onChange={(e) => SetAddress(e.target.value)} value={address} />
                                </Grid>
                            </FormControl>
                            {/* </Grid> */}
                        </CardContent>
                    </Grid>

                    <Grid item marginTop={2} sx={{ width: { xs: '80%', sm: '70%', md: '50%', lg: '50%', xl: '50%' }, }}>
                        <CardActions>
                            <Button variant="contained" color="success" size="large" fullWidth onClick={addressSubmitHandler} sx={{ height: "60px", }}>
                                Continue
                            </Button>
                        </CardActions>
                    </Grid>
                </Grid>
            </Card>
        </Box >
    );
};

export default PropertyAddress; // 78
