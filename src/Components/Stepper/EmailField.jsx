import React, { useState } from "react";

import { Box, Button, Card, CardActions, CardContent, Container, FormControl, Grid, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import SingleScreenHeader from "./SingleScreenHeader";
import { validEmail } from '../../assets/Js/regex.js';

const EmailField = (props) => {

    const navMe = useNavigate();
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const prevButton = () => {
        props.goBack();
    };

    const disabledOrNot = props.isDisabled;
    const progressValue = props.progValue;

    const emailValidation = () => {
        if (email == "") {
            setMessage("Email can't be empty.")
        }
        else if (!validEmail.test(email)) {
            setMessage("* Email is Invalid");
        }
        else {
            props.handleNext();
            navMe("../flow/tel");
        }
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
    };

    return (
        <Box marginTop={12} sx={{ paddingTop: { xs: 7, sm: 3, md: 2, lg: 2, xl: 1 }, }}>
            <Card elevation={7}>
                <SingleScreenHeader goBack={prevButton} isDisabled={disabledOrNot} progValue={progressValue} />

                <Grid container direction="column" justifyContent="center" alignItems="center" paddingY={6} >
                    <Grid item>
                        <CardContent>
                            <Typography variant="h5" fontWeight="bold" textAlign="center">
                                What is your email?
                            </Typography>

                            <Typography variant="subtitle1" marginTop={1} textAlign="center">
                                We take privacy seriously. No spam!
                            </Typography>

                            <Grid container direction="column" justifyContent="center" alignItems="center"
                                sx={{ paddingY: { xs: 2, sm: 3, md: 5, lg: 6, xl: 6 }, }}>
                                <FormControl>
                                    <Grid item marginTop={3} sx={{ width: { xs: '240px', sm: '260px', md: '320px', lg: '360px', xl: '380px' }, }}>
                                        <TextField fullWidth variant="outlined" label="Email" type="email" value={email} required onChange={emailHandler} />
                                    </Grid>

                                    <Typography color="red" mt={1}>
                                        {message}
                                    </Typography>
                                </FormControl>
                            </Grid>
                        </CardContent>
                    </Grid>

                    <Grid item sx={{ width: { xs: '80%', sm: '70%', md: '50%', lg: '50%', xl: '50%' }, }}>
                        <CardActions>
                            <Button variant="contained" color="success" size="large" fullWidth onClick={emailValidation} sx={{ height: "60px", }}>
                                Continue
                            </Button>
                        </CardActions>
                    </Grid>
                </Grid>
            </Card>
        </Box >
    );
};

export default EmailField; // 66
