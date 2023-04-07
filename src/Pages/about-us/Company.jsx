import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import React from "react";

import AboutNavbar from "../../Components/AboutUs/AboutNavbar";
import OurGoal from "../../Components/AboutUs/Company/OurGoal";
import ServingEarlyMajority from "../../Components/AboutUs/Company/ServingEarlyMajority";
import MessageFromCEO from "../../Components/AboutUs/Company/MessageFromCEO";
import Footer from "../../Components/Footer";

const Company = () => {
    return (
        <>
            <AboutNavbar />

            <Box sx={{ marginY: 15, paddingTop: 15, }}>
                <OurGoal />

                <ServingEarlyMajority />

                <MessageFromCEO />
            </Box>

            <Footer />
        </>
    );
};

export default Company;
