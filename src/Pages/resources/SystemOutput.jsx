import React from "react";
import { Container } from "@mui/material";

import ResourcesNavbar from "../../Components/Resources/ResourcesNavbar";
import SystemOut from "../../Components/Resources/SystemOutput/SystemOut";
import Footer from "../../Components/Footer";

const SystemOutput = () => {
    return (
        <>
            <ResourcesNavbar />
        
            <Container sx={{ marginTop: 28, paddingBottom: 6 }}>
                <SystemOut />
            </Container>

            <Footer />
        </>
    );
};

export default SystemOutput;
