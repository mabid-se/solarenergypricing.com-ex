import React, { useState } from "react";

import {
    Box, Button, Card, CardActions, CardContent, FormControlLabel, Container,
    FormControl, Grid, MenuItem, Radio, TextField, Typography
} from "@mui/material";

import SingleScreenHeader from "./SingleScreenHeader";
import { useNavigate } from "react-router-dom";


const ElectricityProvider = (props) => {

    const navMe = useNavigate();

    const prevButton = () => {
        props.goBack();
    };

    const disabledOrNot = props.isDisabled;
    const progressValue = props.progValue;

    const providers = ['More Options', 'Central Hudson Gas & Elec Corp', 'City of Plattsburgh - (NY)', 'City of Salamanca - (NY)',
        'Consolidated Edison Co-NY Inc', 'Fishers Island Utility Co Inc', 'Jamestown Board of Public Util', 'Lake Placid Village Inc - (NY)',
        'Long Island Power Authority', 'New York State Elec & Gas Corp', 'Niagara Mohawk Power Corp.', 'Orange & Rockland Utils Inc',
        'Pennsylvania Electric Co', 'Rochester Gas & Electric Corp', 'Steuben Rural Elec Coop Inc', 'Town of Massena - (NY)',
        'Village of Arcade - (NY)', 'Village of Fairport - (NY)', 'Village of Freeport - (NY)', 'Village of Rockville Centre - (NY)',
        'Village of Rouses Point - (NY)', 'Village of Solvay - (NY)', 'other'];

    const [provider, setProvider] = useState("Central Hudson Gas & Elec Corp");

    const providerChangehandler = (event) => {
        setProvider(event.target.value);
    };

    const radioCheckHandler = () => {
        setTimeout(props.handleNext, 500);
        navMe("../flow/roof_shade",);
    };

    const providerSubmitHandler = () => {
        props.handleNext();
        navMe("../flow/roof_shade",);
    };
    return (
        <Box sx={{
            marginTop: { xs: 12, sm: 12, md: 12, lg: 12, xl: 12, },
            paddingTop: { xs: 7, sm: 3, md: 2, lg: 2, xl: 1 },
        }}>
            <Card elevation={7}  >
                <SingleScreenHeader goBack={prevButton} isDisabled={disabledOrNot} progValue={progressValue} />

                <Grid container direction="column" justifyContent="center" alignItems="center" paddingY={6}>
                    <Grid item>
                        <CardContent>
                            <Typography variant="h5" fontWeight="bold">
                                Who is your electricity provider?
                            </Typography>

                            <FormControl>
                                <Grid border={1} borderRadius="5px" padding={1} borderColor="#c4c4c4"
                                    sx={{ width: { xs: '240px', sm: '260px', md: '320px', lg: '360px', xl: '380px' }, }} marginTop={5}>
                                    <FormControlLabel value="Duqesne Light Co" control={<Radio />}
                                        label="Duqesne Light Co" onChangeCapture={radioCheckHandler} />
                                </Grid>

                                <Grid marginTop={3}>
                                    <TextField select fullWidth type="text" variant="outlined" label="Provider" key={provider}
                                        value={provider} onChange={providerChangehandler} defaultValue="Central Hudson Gas & Elec Corp" >
                                        {
                                            providers.map(providerN => <MenuItem value={providerN}>{providerN}</MenuItem>)
                                        }
                                    </TextField>
                                </Grid>
                            </FormControl>
                        </CardContent>
                    </Grid>

                    <Grid item sx={{ width: { xs: '80%', sm: '70%', md: '50%', lg: '50%', xl: '50%' }, }} marginTop={4}>
                        <CardActions>
                            <Button variant="contained" color="success" size="large" fullWidth onClick={providerSubmitHandler} sx={{ height: "60px", }}>
                                Continue
                            </Button>
                        </CardActions>
                    </Grid>
                </Grid>
            </Card >
        </Box >
    );
};

export default ElectricityProvider; // 191
