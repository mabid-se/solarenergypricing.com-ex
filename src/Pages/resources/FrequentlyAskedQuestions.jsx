import React from "react";
// import Container from "@mui/material";
import { Container } from "@mui/material";

import ResourcesNavbar from "../../Components/Resources/ResourcesNavbar";
// import FAQComp from "../../Components/FAQComp";
import FAQComp from "../../Components/Resources/FAQ/FAQComp";
import Footer from "../../Components/Footer";

const FrequentlyAskedQuestions = () => {


    return (
        <>
            <ResourcesNavbar />
          
            <Container sx={{ marginTop: 28, paddingBottom: 6 }}>
                <FAQComp />
            </Container>
            
            <Footer />
        </>
    );
};

export default FrequentlyAskedQuestions; //141
