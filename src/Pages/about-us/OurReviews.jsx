import React, { useState } from "react";

import { Box, Container, Grid, Rating, Typography } from "@mui/material";

import AboutNavbar from "../../Components/AboutUs/AboutNavbar";
import Footer from "../../Components/Footer";
import quoteIcon from "../../assets/images/quote.svg";

const OurReviews = () => {
    const [value, setValue] = useState(4.7);

    const reviewsList = [
        {
            revId: "rev1",
            reviewText: "I was about to sign up with a solar company, had my bid and everything, when I decided to check the competition. EnergyBillCruncher had so much info, and when I typed in my home’s specs, I got 3 separate bids, 2 of which were way lower than the one I’d signed up for. It was very easy and saved me a ton. Highly recommend.",
            revName: "Jake Kahres",
            revLoc: "Altadena, CA",
        },
        {
            revId: "rev2",
            reviewText: "I got my system installed without paying 1 dollar upfront, they handled all the paperwork, and now my electric meter is spinning backwards! Plus I love the way the panels look on my house, which is a pretty big deal in my opinion. I recommend EnergyBillCruncher to anybody who asks me about my solar panels. And A LOT of people ask about them. Who can blame them? Solar is awesome.",
            revName: "Elena Anderson",
            revLoc: "Columbia, MD",
        },
        {
            revId: "rev3",
            reviewText: "You guys helped me drop my electric bill from almost $200/month to less than $75/month. My solar system is going to save me $40,000 easily over the next 25 years; I would’ve flushed that money down the toilet with my old electric company. Now I’m saving more for retirement and helping save the environment as well. And it all started with EnergyBillCruncher.",
            revName: "Michael & Lisa Hwang",
            revLoc: "Mesa, AZ",
        },
        {
            revId: "rev4",
            reviewText: "I knew I wanted to make the switch to solar, but the process seemed a bit intimidating to me. Until I found EnergyBillCruncher. They matched me with a local solar company that handled all the rebate paperwork for me, and I ended up getting my system installed without paying anything out of pocket. Incredible experience!",
            revName: "Bart W.",
            revLoc: "Westfield, NJ",
        },
        {
            revId: "rev5",
            reviewText: "EnergyBillCruncher takes out all the guesswork. You guys made it so easy for me to choose a solar installer, custom design my system, get all the incentives and tax breaks… I’m saving a ton. From start to finish this was WAY easier than I’d anticipated. I’m on the verge of having completely free energy I’m generating myself, so cool!",
            revName: "Victoria B.",
            revLoc: "Salem, MA",
        },
    ];

    return (
        <>
            <AboutNavbar />

            <Container>
                <Box sx={{ marginTop: 32 }}>
                    <Grid container direction="column" justifyContent="center" alignItems="center" sx={{ paddingY: { xs: 8, sm: 6, md: 7, lg: 10, xl: 11 }, }} >
                        <Grid item>
                            <Typography variant="h2" textTransform="capitalize" textAlign="center" fontWeight={500} color="#252a3d">
                                what our customers say
                            </Typography>
                        </Grid>

                        <Grid item marginTop={2} >
                            <Typography variant="h5" textAlign="center" color="#252a3d">
                                Thousands of Americans are using our services and making the switch to solar
                            </Typography>
                        </Grid>

                        <Grid item padding={3} sx={{ background: "#f6faff" }} marginY={5}>
                            <Grid container direction="row" justifyContent="center" alignItems="center" >
                                <Grid item xs={12} sm={6} md={5} lg={5} xl={5} paddingLeft={3} paddingRight={7}>
                                    <Typography variant="h2" textAlign="center" color="#252a3d" fontSize="160px" fontWeight={400}>
                                        4.7
                                    </Typography>
                                </Grid>

                                <Grid item xs={12} sm={6} md={7} lg={7} xl={7} paddingLeft={7} paddingRight={3} >
                                    <Rating name="read-only" value={value} size="large" readOnly />

                                    <Typography variant="h5" fontWeight={600}>
                                        152 reviews
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>


                        {
                            Object.entries(reviewsList).map(
                                ([key, value]) => {
                                    return (
                                        <Grid item padding={3} marginY={5}>
                                            <Grid container direction="row" justifyContent="center" alignItems="center" >
                                                <Grid item xs={2} sm={2} md={2} lg={1} xl={1} paddingLeft={3} paddingRight={7}>
                                                    <img src={quoteIcon} alt="quote-icon" />
                                                </Grid>

                                                <Grid item xs={10} sm={10} md={10} lg={11} xl={11} paddingLeft={7} paddingRight={3} display="block">
                                                    <Typography variant="h5">
                                                        {value.reviewText}
                                                    </Typography>

                                                    <Typography variant="h5" fontWeight={600} textAlign="right" marginTop={2}>
                                                        {value.revName}
                                                    </Typography>

                                                    <Typography variant="h6" textAlign="right" fontWeight={500} color="#9b9b9b">
                                                        {value.revLoc}
                                                    </Typography>
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    );
                                }
                            )
                        }
                    </Grid>
                </Box>
            </Container>
            
            <Footer />
        </>
    );
};

export default OurReviews;
