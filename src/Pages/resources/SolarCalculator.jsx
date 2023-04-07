import React, { useState } from "react";
import { Box, Button, Container, FormControl, Grid, InputLabel, MenuItem, TextField, Typography } from "@mui/material";
import Select from '@mui/material/Select';

import ResourcesNavbar from "../../Components/Resources/ResourcesNavbar";
import CalculatorForm from "../../Components/Resources/SolarCalculator/CalculatorForm";
import Footer from "../../Components/Footer";

const SolarCalculator = () => {


    return (
        <>
            <ResourcesNavbar />

            <Container sx={{ marginTop: 28, paddingBottom: 5 }}>
                <CalculatorForm />
            </Container>

            <Footer />
        </>
    );
};

export default SolarCalculator;
