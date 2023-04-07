import React, { useState } from "react";
import { Box, Container } from "@mui/material";
import EnergyBillStep from "./Stepper/EnergyBillStep";
import HomeOwner from "./Stepper/HomeOwner";
import ElectricityProvider from "./Stepper/ElectricityProvider";
import RoofShade from "./Stepper/RoofShade";
import PropertyAddress from "./Stepper/PropertyAddress";
import PersonalInformation from "./Stepper/PersonalInformation";
import EmailField from "./Stepper/EmailField";
import PhoneField from "./Stepper/PhoneField";
import RequestCompleted from "./Stepper/RequestCompleted";
import MoreInformation from "./Stepper/MoreInformation";
import StepperNavbar from "./Stepper/StepperNavbar";
import StepperFooter from "./Stepper/StepperFooter";
import { useNavigate } from "react-router-dom";
const BillingStepper = () => {
    const navigate = useNavigate();
    let setProgress = 12;
    let steps = ["/flow/powerbill", "/flow/homeowner",
        // "/flow/provider",
        "/flow/roof_shade", "/flow/address", "/flow/name", "/flow/email", "/flow/tel"];
    const [activeStep, setActiveStep] = useState(0);
    const [activeStepUrl, setActiveStepUrl] = useState("/flow/powerbill");


    window.onpopstate = () => {
        setActiveStepUrl(window.location.pathname);
        setActiveStep(steps.indexOf(window.location.pathname));
    };

    const handleNext = () => {
        setActiveStep(activeStep + 1);
        setActiveStepUrl(steps[activeStep + 1]);
    };

    const handlePrev = () => {
        setActiveStep(activeStep - 1);
        setActiveStepUrl(steps[activeStep - 1]);
        navigate(-1);
    };

    if (activeStep === 0) {
        setProgress = 12;
    }
    if (activeStep === 1) {
        setProgress = 24;
    }
    if (activeStep === 2) {
        setProgress = 36;
    }
    if (activeStep === 3) {
        setProgress = 48;
    }
    if (activeStep === 4) {
        setProgress = 60;
    }
    if (activeStep === 5) {
        setProgress = 72;
    }
    if (activeStep === 6) {
        setProgress = 84;
    }
    if (activeStep === 7) {
        setProgress = 96;
    }


    const moreInfoData = {
        monthlyBill: {
            head1: "100% Confidential",
            detail1: "Your info is only used to connect you with matching solar installers in you neighborhood.",
            head2: "Why We Need This",
            detail2: "Your current energy costs & usage help us determine how much you can save by going solar.",
        },
        homeOwner: {
            head1: "Zero Obligation",
            detail1: "With solarenergypricing.com, there’s never any obligation on your part. Our only goal is to give you great options.",
            head2: "Why this matters",
            detail2: "To qualify for solar, the applicant typically needs to own the property. Ownership is required for installation."
        },
        electricityProvider: {
            head1: "We Don’t Do Lists",
            detail1: "With solarenergypricing.com, your infor is safeand secure. It’s just you, us and the solar installers. That;s all",
            head2: "I Don’t See Mine",
            detail2: " If your utility company isn’t listed, please select “other”. This is typically an easy fix for solar companies."
        },
        roofShade: {
            head1: "Fast & Free",
            detail1: "We never charge for our service, and we never will. Keep going, you’re almost at the finish line!",
            head2: "This is Important",
            detail2: "Trees shading a homeowner’s roof is common.But it’s best for the solar installer to know just how much shade we’re talking!"
        },
        propertyAddress: {
            head1: "Local is Better",
            detail1: "When it comes to going solar, you want a company that knows your town, We’re about to give you a few to choose from!",
            head2: "Final Step",
            detail2: "This is it! You’re about to be matched with several local solar installers. People from your own neighborhood!"
        },
        personalInformation: {
            head1: "SSL Encryption",
            detail1: "We use the latest security technology to ensure that your info is 100% safe. Our customers are our #1 priority-always.",
            head2: "We Never Span",
            detail2: "No email lists with solarenergypricing.co,m.  We respect your privacy, and will only connect you to matching solar installers."
        }
    };
    const getStepContent = (url) => {
        switch (url) {
            case steps[0]:
                return (
                    <>
                        <Container sx={{ paddingX: { sm: 10, md: 15, lg: 15, xl: 20 }, }} >
                            <EnergyBillStep handleNext={handleNext}
                                goBack={handlePrev}
                                isDisabled={activeStep}
                                progValue={setProgress} />
                            <MoreInformation data={moreInfoData.monthlyBill} />
                        </Container>
                    </>
                );
            case steps[1]:
                return (
                    <>
                        <Container sx={{ paddingX: { sm: 10, md: 15, lg: 15, xl: 20 }, }} >
                            <HomeOwner handleNext={handleNext}
                                goBack={handlePrev}
                                isDisabled={activeStep}
                                progValue={setProgress} />
                            <MoreInformation data={moreInfoData.homeOwner} />
                        </Container>
                    </>)
                    ;
            // case steps[2]:
            //     return (
            //         <>
            //             <Container sx={{ paddingX: { sm: 10, md: 15, lg: 15, xl: 20 }, }} >
            //                 <ElectricityProvider
            //                     handleNext={handleNext}
            //                     goBack={handlePrev}
            //                     isDisabled={activeStep}
            //                     progValue={setProgress} />
            //                 <MoreInformation data={moreInfoData.electricityProvider} />
            //             </Container>
            //         </>
            //     );
            case steps[2]:
                return (
                    <>
                        <Container sx={{ paddingX: { sm: 10, md: 15, lg: 15, xl: 20 }, }}>
                            <RoofShade
                                handleNext={handleNext}
                                goBack={handlePrev}
                                isDisabled={activeStep}
                                progValue={setProgress} />
                            <MoreInformation data={moreInfoData.roofShade} />
                        </Container>
                    </>
                );
            case steps[3]:
                return (
                    <>
                        <Container sx={{ paddingX: { sm: 10, md: 15, lg: 15, xl: 20 }, }}>
                            <PropertyAddress
                                handleNext={handleNext}
                                goBack={handlePrev}
                                isDisabled={activeStep}
                                progValue={setProgress} />
                            <MoreInformation data={moreInfoData.propertyAddress} />
                        </Container>
                    </>
                );
            case steps[4]:
                return (
                    <>
                        <Container sx={{ paddingX: { sm: 10, md: 15, lg: 15, xl: 20 }, }}>
                            <PersonalInformation
                                handleNext={handleNext}
                                goBack={handlePrev}
                                isDisabled={activeStep}
                                progValue={setProgress} />
                            <MoreInformation data={moreInfoData.personalInformation} />
                        </Container>
                    </>
                );
            case steps[5]:
                return (
                    <Container sx={{ paddingX: { sm: 10, md: 15, lg: 15, xl: 20 }, }}>
                        <EmailField
                            handleNext={handleNext}
                            goBack={handlePrev}
                            isDisabled={activeStep}
                            progValue={setProgress}
                        />
                    </Container>
                );
            case steps[6]:
                return (
                    <Container sx={{ paddingX: { sm: 10, md: 15, lg: 15, xl: 20 }, }}>
                        <PhoneField
                            handleNext={handleNext}
                            goBack={handlePrev}
                            isDisabled={activeStep}
                            progValue={setProgress} />
                    </Container>
                );
            case steps[7]:
                return (<RequestCompleted />);
        }
    };

    return (
        <Box>
            <StepperNavbar />
            <Container>
                {getStepContent(activeStepUrl)}
            </Container>

            <StepperFooter />
        </Box>
    );
};

export default BillingStepper; // 256
