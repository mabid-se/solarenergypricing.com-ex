import { Box, Card, CardContent, CardMedia, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";

const SystemEstimate = (props) => {

    return (
        <Box>

            {/* =========== Top Heading Section =========== */}
            <Container sx={{ marginTop: 10, }} >
                <Grid container
                    direction="row" justifyContent="space-around" alignItems="center" spacing={2}
                    sx={{ padding: { xs: 2, sm: 4, md: 6, lg: 5, xl: 11 }, }} >
                    <Grid item >
                        <Typography variant="h5" textAlign={'center'} fontWeight={'bold'}>
                            Your System Estimate
                        </Typography>
                    </Grid>
                </Grid>
            </Container>


            {/* =========== Calculations Boxes Section =========== */}
            <Container>
                <Grid container
                    direction="row" justifyContent="space-around" alignItems="center" spacing={2}
                    sx={{ padding: { xs: 2, sm: 4, md: 6, lg: 5, xl: 11 }, }} >
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} >
                        <Card elevation={3} >
                            <CardContent>
                                <Typography variant="subtitle2" textAlign={'center'} fontWeight={'bold'}>
                                    System Size
                                </Typography>

                                <Typography variant="h5" textAlign={'center'} color="primary" sx={{ marginTop: 1, }}>
                                    10.09 kW
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} >
                        <Card elevation={3}>
                            <CardContent>
                                <Typography variant="subtitle2" textAlign={'center'} fontWeight={'bold'}>
                                    Annual Production
                                </Typography>

                                <Typography variant="h5" textAlign={'center'} color="primary" sx={{ marginTop: 1, }}>
                                    15,129 kW-hours
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} >
                        <Card elevation={3}>
                            <CardContent>
                                <Typography variant="subtitle2" textAlign={'center'} fontWeight={'bold'}>
                                    20-Year Savings
                                </Typography>

                                <Typography variant="h5" textAlign={'center'} color="primary" sx={{ marginTop: 1, }}>
                                    $26,604
                                </Typography>

                                <Typography variant="body2" textAlign={'center'} sx={{ marginTop: 1, }}>
                                    (savings minus cost of system)
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>


            {/* =========== Information Text Section =========== */}
            <Container>
                <Grid container direction="row" justifyContent="space-around" alignItems="center" spacing={2}
                    sx={{ padding: { xs: 2, sm: 4, md: 6, lg: 5, xl: 11 }, }} >
                    <Grid item >
                        <Typography variant="body2" textAlign={'center'} >
                            These numbers are just estimates according to our marketplace research and these assumptions. For a more exact estimate, please talk to one of our experts as savings can vary depending on roof type, sun exposure, electrical utility, etc.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>


            {/* =========== Three Cards Section =========== */}
            <Container>
                <Grid container
                    direction="row" justifyContent="space-around" alignItems="center" spacing={2}
                    sx={{ padding: { xs: 2, sm: 4, md: 6, lg: 5, xl: 11 }, }} >

                    {/* =========== Card 1 =========== */}
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} >
                        <Card elevation={0} >
                            <CardMedia>
                                <center>
                                    <img src="https://d3bnsjl54t3oyq.cloudfront.net/img/v3/lock.svg"
                                        alt="icon" height="120px" width="120px" />
                                </center>
                            </CardMedia>

                            <CardContent>
                                <Typography variant="h6" textAlign={'center'} fontWeight={'bold'}>
                                    Congratulations!
                                </Typography>

                                <Typography variant="body2" sx={{ marginTop: 1, }}>
                                    You are one step closer to getting solar panels installed on your home. One of our courteous experts will confirm your information and review your eligibility.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* =========== Card2 =========== */}
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} >
                        <Card elevation={0} >
                            <CardMedia>
                                <center>
                                    <img src="https://d3bnsjl54t3oyq.cloudfront.net/img/v3/lock.svg"
                                        alt="icon" height="120px" width="120px" />
                                </center>
                            </CardMedia>

                            <CardContent>
                                <Typography variant="h6" textAlign={'center'} fontWeight={'bold'}>
                                    We’re Calling Now!
                                </Typography>

                                <Typography variant="body2" sx={{ marginTop: 1, }}>
                                    Solarenergypriciing.com does not make high pressure sales calls -  our main goal is to help you lower your electric bill. We’ve matched you with several local installers, so get ready!
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* =========== Card 3 =========== */}
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} >
                        <Card elevation={0} >
                            <CardMedia>
                                <center>
                                    <img src="https://d3bnsjl54t3oyq.cloudfront.net/img/v3/lock.svg"
                                        alt="icon" height="120px" width="120px" />
                                </center>
                            </CardMedia>

                            <CardContent>
                                <Typography variant="h6" textAlign={'center'} fontWeight={'bold'}>
                                    Grab A Pen
                                </Typography>

                                <Typography variant="body2" sx={{ marginTop: 1, }}>
                                    You’re moments away from a complete savings & cost breakdown. In order to see which incentives you qualify for, we’re researching state rebates, your zip & utility provider, energy usage, & roof shade.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>


            {/* =========== More Information Section =========== */}
            <Container>
                <Grid container
                    direction="row" justifyContent="space-around" spacing={2} alignItems="center"
                    sx={{ padding: { xs: 2, sm: 4, md: 6, lg: 5, xl: 11 }, }} >
                    <Grid item xs={12} sm={12} md={6} lg={7} xl={8} >
                        <Card elevation={7} sx={{ paddingX: 2, paddingY: 1, height: '100%' }}>
                            <CardContent>
                                <Grid container>
                                    <Grid item xs={4} margin={0}>
                                        <img src="https://d3bnsjl54t3oyq.cloudfront.net/img/v3/lock.svg" />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography variant='h5'>
                                            Ask Away!
                                        </Typography>
                                        <Typography variant='subtitle'>
                                            Bad question? No such thing. Make sure everything is crystal clear when speaking with your installer. Knowledge is power.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={12} md={6} lg={5} xl={4} >
                        <Card elevation={7} sx={{ paddingX: 2, paddingY: 1, height: '100%' }} >
                            <CardContent >
                                <Typography variant='h5'>
                                    Compare & Save
                                </Typography>
                                <Typography variant='subtitle'>
                                    Speaking with a few different installers instead of just one will allow you to compare offers and pick the best deal.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default SystemEstimate; //326
