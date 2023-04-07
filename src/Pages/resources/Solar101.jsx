import React from "react";
import { Container, Typography } from "@mui/material";

import CustomCarousel from "../../Components/Resources/Solar101/CustomCarousel";
import ResourcesNavbar from "../../Components/Resources/ResourcesNavbar";
import Footer from "../../Components/Footer";

const Solar101 = () => {
    return (
        <>
            <ResourcesNavbar />

            <Container sx={{ marginTop: 30, paddingBottom: 6 }}>
                <Typography variant="h3" textAlign="center" textTransform="capitalize">
                    incredible! but how does it work?
                </Typography>

                <Typography variant="subtitle1" textAlign="center">
                    Most photovoltaic solar panel systems (PV Systems) have four <br /> components that make them work:
                </Typography>

                <CustomCarousel />
            </Container>

            <Footer />
        </>
    );
};

export default Solar101;
