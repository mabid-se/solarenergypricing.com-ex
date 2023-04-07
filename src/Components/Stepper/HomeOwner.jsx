import { Box, Button, Card, CardActions, CardContent, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";

import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

import SingleScreenHeader from "./SingleScreenHeader";
import { useNavigate } from "react-router-dom";

const HomeOwner = (props) => {
    const navMe = useNavigate();

    const prevButton = () => {
        props.goBack();
    };

    const disabledOrNot = props.isDisabled;
    const progressValue = props.progValue;

    const [isHomeOwner, setIsHomeOwner] = useState("");

    const handlerHowner = (e) => {
        e.preventDefault();
        setIsHomeOwner(e.currentTarget.value);
        
        if (e.currentTarget.value === "yes") {
            props.handleNext();
            navMe("../flow/roof_shade",);
        }
    };

    return (
        <Box sx={{
            marginTop: { xs: 12, sm: 12, md: 12, lg: 12, xl: 12 },
            paddingTop: { xs: 7, sm: 3, md: 2, lg: 2, xl: 1 },
        }}>
            <Card elevation={7}>
                <SingleScreenHeader goBack={prevButton} isDisabled={disabledOrNot} progValue={progressValue} />

                <Grid container direction="column" justifyContent="center" alignItems="center" padding={6}>
                    <Grid item>

                        <CardContent>
                            <Typography variant="h5" fontWeight="bold">
                                Are you a homeowner?
                            </Typography>

                            <Typography fontWeight="bold" textAlign="center" color="red">
                                {isHomeOwner && isHomeOwner === "no" && "Error It is only for home owners"}
                            </Typography>
                        </CardContent>
                    </Grid>

                    <Grid item>
                        <CardActions>
                            <Grid container direction="row" justifyContent="center" alignItems="center" spacing={7}
                                sx={{ paddingY: { sm: 3, md: 5, lg: 8, xl: 10 } }}>
                                <Grid item>
                                    <Button onClick={handlerHowner} sx={{
                                        width: '200px', height: '160px',
                                        border: 1, borderColor: '#E9E9E9', color: '#C62220',
                                    }} value="no">
                                        <Grid container direction="column" justifyContent="center" alignItems="center" >
                                            <Grid item sx={{ marginBottom: 1, }}>
                                                <ClearIcon sx={{ width: '70px', height: '70px' }} />
                                            </Grid>

                                            <Grid item >
                                                <Typography>
                                                    No
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Button>
                                </Grid>

                                <Grid item>
                                    <Button onClick={handlerHowner} sx={{
                                        width: '200px', height: '160px',
                                        border: 1, borderColor: '#E9E9E9', color: '#21C676',
                                    }} value="yes">
                                        <Grid container direction="column" justifyContent="center" alignItems="center" >
                                            <Grid item sx={{ marginBottom: 1, }}>
                                                <CheckIcon sx={{ width: '70px', height: '70px' }} />
                                            </Grid>

                                            <Grid item >
                                                <Typography>
                                                    Yes
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Button>
                                </Grid>
                            </Grid>
                        </CardActions>
                    </Grid>
                </Grid>
            </Card>
        </Box>
    );

};

export default HomeOwner; // 92
