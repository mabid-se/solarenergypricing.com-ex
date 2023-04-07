import { Container, Grid, Typography } from "@mui/material";
import React from "react";

import innovation from "../../../assets/images/Innovation.jpg";

const ServingEarlyMajority = () => {
    return (
        <>
            <Container paddingX={2}>
                <Grid container direction="column" justifyContent="center" alignItems="flex-start" paddingY={5}>
                    <Grid item marginY={2} paddingTop={2}>
                        <Typography variant="h2" fontWeight={500}>
                            Serving the Early Majority
                        </Typography>
                    </Grid>

                    <Grid item marginY={2}>
                        <Typography variant="h6" fontWeight={400}>
                            During the innovative and early adoption stages, installing solar panels on your home typically required a large upfront investment that could take up to 10 years or more to recoup. The cost to install solar was too high for most homeowners and only made economical sense if you were spending several hundred dollars every month on electricity.
                        </Typography>
                    </Grid>

                    <Grid item marginY={2}>
                        <Typography variant="h6" fontWeight={400}>
                            In the past 4 years, the cost of solar panels and installations have dropped by a significant margin. These advancements in technology coupled with federal rebates and incentives have eliminated the need for large upfront investments for many homeowners; thus, making solar panels more economically viable for a much broader range of homeowners.
                        </Typography>
                    </Grid>

                    <Grid item marginY={2}>
                        <img src={innovation} alt="innovation" width="80%" />
                    </Grid>

                    <Grid item marginY={2}>
                        <Typography variant="h6" fontWeight={400}>
                            Now that homeowners are starting to realize that solar panels are a real money-saver, interest has never been higher. As solar panels continue to become more and more popular, we saw an opportunity to save a whole bunch of people a whole bunch of time, and money.
                        </Typography>
                    </Grid>

                    <Grid item marginY={2}>
                        <Typography variant="h6" fontWeight={400}>
                            Finding the right installer in your specific area that is licensed to work on your home can be overwhelming. We're here to make sure it's not.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default ServingEarlyMajority;
