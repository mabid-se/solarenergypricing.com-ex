import { Box, Button, Card, CardActions, CardContent, Container, FormControl, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import SingleScreenHeader from "./SingleScreenHeader";

const PersonalInformation = (props) => {
    const navMe = useNavigate();
    const [firstName, SetFirstName] = useState("");
    const [lastName, SetLastName] = useState("");
    const prevButton = () => {
        props.goBack();
    };

    const disabledOrNot = props.isDisabled;
    const progressValue = props.progValue;

    const nameSubmitHandler = (e) => {
        e.preventDefault();
        if (firstName && lastName) {
            navMe("../flow/email");
            props.handleNext();
        }
    };

    return (
        <Box marginTop={12} sx={{ paddingTop: { xs: 7, sm: 3, md: 2, lg: 2, xl: 1 }, }}>
            <Card elevation={7}>
                <SingleScreenHeader goBack={prevButton} isDisabled={disabledOrNot} progValue={progressValue} />

                <Grid container direction="column" justifyContent="center" alignItems="center" paddingY={6} >
                    <Grid item>
                        <CardContent>
                            <Typography variant="h5" fontWeight="bold" textAlign="center">
                                Personal Information Safe & Secure
                            </Typography>

                            <Grid container direction="column" justifyContent="center" alignItems="center"
                                sx={{ paddingY: { xs: 2, sm: 3, md: 5, lg: 6, xl: 6 }, }}>
                                <FormControl>
                                    <Grid item marginTop={3}
                                        sx={{ width: { xs: '240px', sm: '260px', md: '320px', lg: '360px', xl: '380px' }, }}>
                                        <TextField fullWidth variant="outlined" label="First Name" id="first-name" sx={{ marginBottom: 3 }} error={firstName.length === 0 ? true : false} required onChange={(e) => SetFirstName(e.target.value)} value={firstName} />

                                        <TextField fullWidth variant="outlined" label="Last Name" id="last-name" error={lastName.length === 0 ? true : false} required onChange={(e) => SetLastName(e.target.value)} value={lastName} />
                                    </Grid>
                                </FormControl>
                            </Grid>
                        </CardContent>
                    </Grid>

                    <Grid item sx={{ width: { xs: '80%', sm: '70%', md: '50%', lg: '50%', xl: '50%' }, }}>
                        <CardActions>
                            <Button variant="contained" color="success" size="large" fullWidth onClick={nameSubmitHandler} sx={{ height: "60px", }}>
                                Continue
                            </Button>
                        </CardActions>
                    </Grid>
                </Grid>
            </Card>
        </Box >
    );
};

export default PersonalInformation; // 67
