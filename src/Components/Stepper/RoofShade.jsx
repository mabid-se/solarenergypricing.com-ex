import React, { useState } from "react";

import {
    Box, Button, Card, CardActions, CardContent, Container,
    Grid, MenuItem, TextField, Typography, FormControl,
} from "@mui/material";

import SingleScreenHeader from "./SingleScreenHeader";
import { useNavigate } from "react-router-dom";

const RoofShade = (props) => {

    const navMe = useNavigate();

    const prevButton = () => {
        props.goBack();
    };

    const disabledOrNot = props.isDisabled;
    const progressValue = props.progValue;

    const shades = ['No Shade ', 'A Little Shade', 'Uncertain', 'A Lot of Shade'];

    const [shade, setShade] = useState([shades[0]]);

    const shadeChangehandler = (event) => {
        setShade(event.target.value);
    };

    const shadeSubmitHandler = () => {
        props.handleNext();
        navMe("../flow/address",);
    };

    return (
        <Box marginTop={12} sx={{ paddingTop: { xs: 7, sm: 3, md: 2, lg: 3, xl: 1 }, }}>
            <Card elevation={7}  >
                <SingleScreenHeader goBack={prevButton} isDisabled={disabledOrNot} progValue={progressValue} />

                <Grid container direction="column" justifyContent="center" alignItems="center" paddingY={6} >
                    <Grid item>
                        <CardContent>
                            <Typography variant="h5" fontWeight="bold" textAlign="center">
                                How much roof shade do you get?
                            </Typography>

                            <FormControl>
                                <Grid marginTop={6}
                                    sx={{ width: { xs: '240px', sm: '260px', md: '320px', lg: '360px', xl: '380px' }, }}>
                                    <TextField select fullWidth type="text" variant="outlined" label="Roof Shade"
                                        value={shade} onChange={shadeChangehandler} defaultValue={shades[0]} >
                                        {
                                            shades.map(shadeVal => <MenuItem value={shadeVal}>{shadeVal}</MenuItem>)
                                        }
                                    </TextField>
                                </Grid>
                            </FormControl>
                        </CardContent>
                    </Grid>

                    <Grid item marginTop={4} sx={{ width: { xs: '80%', sm: '70%', md: '50%', lg: '50%', xl: '50%' }, }}>
                        <CardActions>
                            <Button variant="contained" color="success" size="large" fullWidth onClick={shadeSubmitHandler} sx={{ height: "60px", }}>
                                Continue
                            </Button>
                        </CardActions>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    );
};

export default RoofShade; // 141
