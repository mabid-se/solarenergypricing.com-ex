import React from "react";

import MainNavbar from "../Components/MainNavbar";
import LPHeader from "../Components/LandingPage/LPHeader";
import NumbersDontLie from "../Components/LandingPage/NumbersDontLie";
import FindYourEligibility from "../Components/LandingPage/FindYourEligibility";
import WhyChooseUs from "../Components/LandingPage/WhyChooseUs";
import OurTestimonials from "../Components/LandingPage/OurTestimonials";
import Footer from "../Components/Footer";

const LandingPage = () => {
    return(
        <>
            <MainNavbar />

            <LPHeader />

            <NumbersDontLie />

            <FindYourEligibility />

            <WhyChooseUs />

            <OurTestimonials />

            <Footer />
        </>
    );
};

export default LandingPage;
