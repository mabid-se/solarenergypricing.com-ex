import React from "react";
import { Grid, Typography } from "@mui/material";

import howSolarWorks from "../../../assets/images/HowItWorks.gif";

const CustomCarousel = () => {
    return (
        <>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid item>
                    <img src={howSolarWorks} alr="how-solar-works" />
                </Grid>

                <Grid item>
                    <Typography variant="h4" color="#4d8ecc" fontWeight="bold">
                        1. PV Modules
                    </Typography>
                </Grid>

                <Grid item>
                    <Typography variant="h6" textAlign="center" fontWeight={500}>
                        Solar panel contains photovoltaic cells which capture the sun's<br />energy and cover it to electricity.
                    </Typography>
                </Grid>
                
                <Grid item marginY={5}>
                    <Typography variant="h6" fontWeight={400}>
                        EnergyBillCruncher provides homeowners with a unique online marketplace to shop for solar installers. After you run a side by side comparison, we’ll match
                        you with a dedicated solar power expert to answer all of your questions and help guide you through the purchase and installation process. Our experts are
                        fully trained and extremely knowledgeable regarding all federal and state solar incentives, rebates, and tax breaks you can qualify for. As we custom design
                        your solar system, we’ll simultaneously organize the installation (permits and all) for you with as little out of pocket cost as possible (sometimes even Zero
                        Down!). We’ll be here for you even after your system is up and running, ensuring you have all the maintenance and monitoring services you require to have your
                        system running at maximum efficiency at all times. Are your ready to start saving? Then let’s go solar!
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default CustomCarousel;
