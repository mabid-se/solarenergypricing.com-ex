import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import Footer from "../Components/Footer";
import MainNavbar from "../Components/MainNavbar";
import ResourcesNavbar from "../Components/ResourcesNavbar";
import FrequentlyAskedQuestions from "./resources/FrequentlyAskedQuestions";
import Solar101 from "./resources/Solar101";
import SolarCalculator from "./resources/SolarCalculator";
import SystemOutput from "./resources/SystemOutput";

const Resources = () => {
    return (
        <>
            <ResourcesNavbar />

            <Typography variant="h2" marginY={12} paddingY={12} textAlign="center">
                You're on Resources Page
            </Typography>

            <Container>
                <SolarCalculator />

                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />

                <FrequentlyAskedQuestions />

                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />

                <SystemOutput />

                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />

                <Solar101 />
            </Container>

            <Footer />
        </>
    );

};

export default Resources;
