import React from "react";
import { Box, Button, Grid, LinearProgress } from "@mui/material";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const SingleScreenHeader = (props) => {
    
    return (
        <Box sx={{ backgroundcolor: 'error.main', borderBottom: 2, borderColor: 'grey.500',}} px="5%" py="2%">
            <Grid container alignItems="center">
                <Grid item xs={2}>
                    <Button variant="outlined" startIcon={<ArrowBackIosNewIcon />} color="success" onClick={props.goBack} disabled={props.isDisabled === 0}>Back</Button>
                </Grid>
                            
                <Grid item xs={4}></Grid>
                <Grid item xs={4}></Grid>

                <Grid item xs={2}>
                    <LinearProgress variant="determinate" value={props.progValue} sx={{ height: "14px", width:'90%'}} />
                </Grid>    
            </Grid>
        </Box>
    );
};

export default SingleScreenHeader; //29
