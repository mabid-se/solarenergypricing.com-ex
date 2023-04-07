import React from "react";

import { Box, Card, CardActions, CardContent, Container, Grid, Rating, Typography } from "@mui/material";
import testimonial1 from "../../assets/images/testimonial1.png";
import testimonial2 from "../../assets/images/testimonial2.png";
import testimonial3 from "../../assets/images/testimonial3.png";
const OurTestimonials = () => {
    return (
        <Box>
            <Container>
                <Grid container direction="row" justifyContent="center" alignItems="center" paddingBottom={5}>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <Typography variant="h3" textAlign="center" marginTop={10}>
                            Our Testimonials
                        </Typography>
                    </Grid>

                    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" marginTop={4} >
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} padding={3}>
                            <Card elevation={7}>
                                <CardContent>
                                    <Typography variant="body1" marginTop={1} color="#444444" marginX="10px">
                                        “Search no more and save your time for web design and development with SeedProd”
                                    </Typography>
                                </CardContent>

                                <CardActions>
                                    <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                                        <Grid item marginLeft="15px">
                                            <img src={testimonial1} alt="testimonial-1" width="80%" />
                                        </Grid>

                                        <Grid item>
                                            <Typography variant="subtitle1" color="#4F394D" fontWeight="bold">
                                                Hanan Gazit, PhD
                                            </Typography>

                                            <Typography variant="subtitle2" color="#4F394D">
                                                Founder & CEO Julocting
                                            </Typography>

                                            <Typography textAlign="center" marginTop={1}>
                                                <Rating readOnly value={4} />
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} padding={3} >
                            <Card elevation={7}>
                                <CardContent>
                                    <Typography variant="body1" marginTop={1} color="#444444" marginX="10px">
                                        “Search no more and save your time for web design and development with SeedProd”
                                    </Typography>
                                </CardContent>

                                <CardActions>
                                    <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                                        <Grid item marginLeft="15px">
                                            <img src={testimonial2} alt="testimonial-2" width="80%" />
                                        </Grid>

                                        <Grid item>
                                            <Typography variant="subtitle1" color="#4F394D" fontWeight="bold">
                                                Chris Ducker
                                            </Typography>

                                            <Typography variant="subtitle2" color="#4F394D">
                                                Author of 'Virtual Freedom'
                                            </Typography>

                                            <Typography textAlign="center" marginTop={1}>
                                                <Rating readOnly value={5}/>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} padding={3} >
                            <Card elevation={7}>
                                <CardContent>
                                    <Typography variant="body1" marginTop={1} color="#444444" marginX="10px">
                                        “Search no more and save your time for web design and development with SeedProd”
                                    </Typography>
                                </CardContent>

                                <CardActions>
                                    <Grid container direction="row" justifyContent="flex-start" alignItems="center" spacing={1}>
                                        <Grid item marginLeft="15px">
                                            <img src={testimonial3} alt="testimonial-3" width="80%" />
                                        </Grid>

                                        <Grid item>
                                            <Typography variant="subtitle1" color="#4F394D" fontWeight="bold">
                                                Taz Johnston
                                            </Typography>

                                            <Typography variant="subtitle2" color="#4F394D">
                                                WordPress Developer
                                            </Typography>

                                            <Typography textAlign="center" marginTop={1}>
                                                <Rating readOnly value={3}/>
                                            </Typography>
                                        </Grid>
                                    </Grid>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default OurTestimonials;
