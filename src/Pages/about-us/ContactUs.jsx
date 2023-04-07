import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

import AboutNavbar from "../../Components/AboutUs/AboutNavbar";
import ContactDetails from "../../Components/ContactDetails";
import ContactForm from "../../Components/ContactForm";
import Footer from "../../Components/Footer";

const ContactUs = () => {
    return (
        <>
            <AboutNavbar />

            <Container sx={{marginTop:25, paddingBottom:5 }}>
                <Grid container direction="column" justifyContent="flex-start" alignItems="flex-start" sx={{ marginTop: 12, paddingTop: { xs: 5, sm: 5, md: 5, lg: 5, xl: 5 } }}>
                    <Grid item>
                        <Typography variant="h3" fontWeight="semi-bold">
                            Contact Us Anytime
                        </Typography>

                        <Typography variant="h5" marginTop="-4px">
                            24 hours a day, 7 days a week
                        </Typography>
                    </Grid>
                </Grid>


                <Grid container direction="row" justifyContent="flex-start" alignItems="center" marginY={3}>
                    <Grid item xs={12} sm={12} md={4} lg={5} xl={5} sx={{ paddingRight: { md: 5, lg: 5, xl: 5 } }}>
                        <ContactDetails />
                    </Grid>

                    <Grid item xs={12} sm={12} md={8} lg={7} xl={7} sx={{ paddingLeft: { md: 5, lg: 5, xl: 5 } }}>
                        <ContactForm />
                    </Grid>
                </Grid>
            </Container >

            <Footer />
        </>
    );
};

export default ContactUs;
