import React, { useState } from "react";
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, TextField, Typography } from "@mui/material";
import Select from "@mui/material/Select";

const CalculatorForm = () => {
    const [monthlyBill, setMonthlyBill] = useState("");
    const [homeOwner, setHomeOwner] = useState("");
    const [electricProvider, setElectricProvider] = useState("");
    const [roofShade, setRoofShade] = useState("");

    const monthlyBillChangeHandler = (event) => {
        setMonthlyBill(event.target.value);
    };

    const homeOwnerChangeHandler = (event) => {
        setHomeOwner(event.target.value);
    };

    const electricProviderChangeHandler = (event) => {
        setElectricProvider(event.target.value);
    };

    const roofShaderChangeHandler = (event) => {
        setRoofShade(event.target.value);
    };

    return (
        <>
            <Box component="form">
                <Grid container direction="column" justifyContent="space-evenly" alignItems="stretch" paddingX={2}>
                    <Grid item>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ marginY: { xs: 2, sm: 3, md: 3, lg: 3, xl: 3 }, }} >
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} sx={{ paddingRight: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }, }} >
                                <TextField fullWidth id="zip-code" label="Zip Code" placeholder="Enter 5 digits zip code" variant="standard" />
                            </Grid>

                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} sx={{ paddingLeft: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }, }} >
                                <FormControl variant="standard" fullWidth>
                                    <InputLabel id="monthly-bill-select-label">Monthly Bill</InputLabel>

                                    <Select variant="standard" labelId="monthly-bill-select-label" id="monthly-bill-select" value={monthlyBill} onChange={monthlyBillChangeHandler} label="Monthly Bill">
                                        <MenuItem value={101}>$101 - $150</MenuItem>
                                        <MenuItem value={151}>$151 - $200</MenuItem>
                                        <MenuItem value={201}>$201 - $300</MenuItem>
                                        <MenuItem value={301}>$301 - $400</MenuItem>
                                        <MenuItem value={401}>$401 - $500</MenuItem>
                                        <MenuItem value={501}>501 - $600</MenuItem>
                                        <MenuItem value={601}>$601 - $700</MenuItem>
                                        <MenuItem value={701}>$701 - $800</MenuItem>
                                        <MenuItem value={801}>$801 +</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ marginY: { xs: 2, sm: 3, md: 3, lg: 3, xl: 3 }, }} >
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} sx={{ paddingRight: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }, }} >
                                <FormControl variant="standard" fullWidth>
                                    <InputLabel id="homeowner-select-label">You're Homeowner?</InputLabel>
                                    
                                    <Select variant="standard" labelId="homeowner-select-label" id="homeOwner-select" value={homeOwner} onChange={homeOwnerChangeHandler} label="You Own a Home or Not?" >
                                        <MenuItem value="yes">Yes</MenuItem>
                                        <MenuItem value="no">No</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} sx={{ paddingLeft: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }, }} >
                                <FormControl variant="standard" fullWidth>
                                    <InputLabel id="electric-provider-select-label">Electric Provider</InputLabel>
                                    <Select variant="standard" labelId="electric-provider-select-label" id="electric-provider-select" value={electricProvider} onChange={electricProviderChangeHandler} label="Your Electricty Provider Name">
                                        <MenuItem value="provider1">Provider 1</MenuItem>
                                        <MenuItem value="provider2">Provider 2</MenuItem>
                                        <MenuItem value="provider3">Provider 3</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>

                    <Grid item>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center" sx={{ marginY: { xs: 2, sm: 3, md: 3, lg: 3, xl: 3 }, }} >
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} sx={{ paddingRight: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }, }} >
                                <FormControl variant="standard" fullWidth>
                                    <InputLabel id="roof-shade-select-label">Roof Shade</InputLabel>
                                    
                                    <Select variant="standard" labelId="roof-shade-select-label" id="roof-shade-select" value={roofShade} onChange={roofShaderChangeHandler} label="How much Roof Shade your home has?">
                                        <MenuItem value="no shade">No Shade</MenuItem>
                                        <MenuItem value="a little shade">A Little Shade</MenuItem>
                                        <MenuItem value="uncertain">Uncertain</MenuItem>
                                        <MenuItem value="a lot of shade">A Lot of Shade</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>

                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6} sx={{ paddingLeft: { xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }, }}>
                                <FormControl variant="standard" fullWidth>
                                    <Button variant="contained" size="large">calculate savings</Button>
                                </FormControl>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Box >

            <Typography variant="h6" marginY={6} textAlign="center" fontWeight={400}>
                As you may know, an accurate solar savings calculation will depend<br />on many different variables.
            </Typography>
        </>
    );
};

export default CalculatorForm; //168
