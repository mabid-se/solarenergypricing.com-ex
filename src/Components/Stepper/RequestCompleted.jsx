import React from "react";

import {
    Box, Card, CardContent, Container, Grid, Typography, Button,
    CardActions, List, ListItem, ListItemText, Divider
} from "@mui/material";

import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SavingsIcon from '@mui/icons-material/Savings';
import GroupIcon from '@mui/icons-material/Group';
import PaidIcon from '@mui/icons-material/Paid';
import { useNavigate } from "react-router-dom";

import "../../assets/CSS/RequestCompleted.css";

const RequestCompleted = () => {
    const navMe = useNavigate();
        
    const gotoSiteHandler = () => {
        window.location.replace('https://google.com');
    }

    return (
        <>
            {/* =========== Top Heading Section =========== */}
            <Container sx={{ marginTop: 10, }}>
                <Grid container direction="row" justifyContent="space-around" alignItems="center"
                    spacing={2} sx={{ padding: { xs: 2, sm: 4, md: 5, lg: 5, xl: 7 }, }} >
                    <Grid item sx={{ marginTop: { xs: 2, sm: 3, md: 5, lg: 5, xl: 7 }, }}>
                        <Typography variant="h5" textAlign={'center'} fontWeight={'bold'}>
                            Your Request is Complete
                        </Typography>
                        <Typography variant="body1" textAlign={'center'} >
                            Based on your criteria, the installer below can offer you huge savings. They will contact you shortly, be ready for savings.
                        </Typography>
                    </Grid>
                </Grid>
            </Container>


            {/* =========== Top Pick Section =========== */}
            <Container>
                <Grid container direction="row" justifyContent="center" alignItems="flex-start"
                    spacing={2} sx={{ paddingY: { xs: 2, sm: 3, md: 3, lg: 1, xl: 1 }, }} >

                    {/* =========== Top Pick Left Section =========== */}
                    <Grid item xs={12} sm={12} md={12} lg={4} xl={4} >
                        <Card elevation={3} >
                            <CardContent>
                                <List>
                                    <ListItem>
                                        <ListItemText>
                                            <div className="title">
                                                <Typography variant="subtitle2" sx={{ fontWeight: 'bold', float: 'left' }} >
                                                    What you can expect next
                                                </Typography>
                                                <span className="date" sx={{ float: 'right' }}>
                                                    <KeyboardArrowDownIcon />
                                                </span>
                                            </div>
                                        </ListItemText>
                                    </ListItem>

                                    <Divider />

                                    <ListItem sx={{ marginY: 2 }}>
                                        <Grid container direction="column" justifyContent="center" alignItems="center">
                                            <Grid item>
                                                <WhatsAppIcon color="primary" />
                                                {/* <img src="https://logos-world.net/wp-content/uploads/2020/05/Logo-WhatsApp.png" float="ceb" width={'80px'} /> */}
                                            </Grid>

                                            <Grid item>
                                                <Typography variant="subtitle1" fontWeight="bold" marginTop={1} textAlign="center">
                                                    Installer will call you right away
                                                </Typography>
                                            </Grid>

                                            <Grid item>
                                                <Typography variant="body2" textAlign="center">
                                                    Be ready to take a call - The installer listed here will be calling you with their best offers.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </ListItem>

                                    <Divider />

                                    <ListItem sx={{ marginY: 2 }}>
                                        <Grid container direction="column" justifyContent="center" alignItems="center" >
                                            <Grid item>
                                                <SavingsIcon color="primary" />
                                            </Grid>

                                            <Grid item>
                                                <Typography variant="subtitle1" fontWeight="bold" sx={{ marginTop: 1 }} textAlign="center">
                                                    Save up to 50% on power bills!
                                                </Typography>
                                            </Grid>

                                            <Grid item>
                                                <Typography variant="body2" textAlign="center">
                                                    Our goal is to save you money. We’ve vetted hundreds of installers to find qualified pros that can help you save big.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </ListItem>

                                    <Divider />

                                    <ListItem sx={{ marginY: 2 }}>
                                        <Grid container direction="column" justifyContent="center" alignItems="center" >
                                            <Grid item>
                                                <GroupIcon color="primary" />
                                            </Grid>

                                            <Grid item>
                                                <Typography variant="subtitle1" fontWeight="bold" sx={{ marginTop: 1 }} textAlign="center">
                                                    We won’t waste your time
                                                </Typography>
                                            </Grid>

                                            <Grid item>
                                                <Typography variant="body2" textAlign="center">
                                                    We match you with installers that can help, based on your criteria. We don’t waste time on deals that don’t pencil out.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </ListItem>

                                    <Divider />

                                    <ListItem sx={{ marginY: 2 }}>
                                        <Grid container direction="column" justifyContent="center" alignItems="center" >
                                            <Grid item>
                                                <PaidIcon color="primary" />
                                            </Grid>

                                            <Grid item>
                                                <Typography variant="subtitle1" fontWeight="bold" sx={{ marginTop: 1 }}>
                                                    Let our installers do the work
                                                </Typography>
                                            </Grid>

                                            <Grid item>
                                                <Typography variant="body2" textAlign="center">
                                                    Spend a couple minutes of your time and get a  customized quote that can save you money.
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </ListItem>
                                </List>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* =========== Top Pick Right Section =========== */}
                    <Grid item xs={12} sm={12} md={12} lg={8} xl={8} elevation={6}>
                        <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2} >
                            <Grid item>
                                <Card elevation={3}>
                                    <CardContent>
                                        <Typography variant="h6" fontWeight={'bold'}>Our Top Pick</Typography>
                                    </CardContent>

                                    <CardActions>
                                        <Grid container
                                            direction="row" justifyContent="space-around" alignItems="center" spacing={2} >
                                            <Grid item xs={12} sm={12} md={2} lg={3} xl={3}>
                                                <img width="150px" height="200px"
                                                    src="https://www.thoughtco.com/thmb/1_chnMpM6_ryVnrzxueA39t3g3w=/3097x2323/smart/filters:no_upscale()/solar-panel-photovoltaic-installation-on-a-roof--alternative-electricity-source-884806548-5c5b67b9c9e77c000156659b.jpg" />
                                            </Grid>

                                            <Grid item xs={12} sm={12} md={8} lg={6} xl={7}>
                                                <Typography variant="subtitle2">
                                                    Our mission at Solar America(R) is to accelerate the adoption of cost-effective environmentally beneficial energy solutions - notably solar power and energy storage. We educate consumers on the facts ab...
                                                </Typography>

                                                <div className="title">
                                                    <Button startIcon={<AddCircleIcon />}>More</Button>

                                                    <span className="date" sx={{ float: 'right', }}>
                                                        <Typography variant="subtitle1" fontWeight={'bold'}>
                                                            844-336-1917
                                                        </Typography>
                                                    </span>
                                                </div>
                                            </Grid>

                                            <Grid item xs={12} sm={12} md={2} lg={3} xl={2}>
                                                <Button variant="contained" endIcon={<ArrowForwardIosIcon />} onClick={gotoSiteHandler} color="success">
                                                    Visit Site
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </CardActions>

                                    <CardContent>
                                        <Typography variant="subtitle2" >
                                            <b>Check your email! We’ve emailed you a copy of your free solar system report.</b>
                                            This report will give you a basic idea of your system size, annual production, and expected savings based on the information you provided. Please talk to the installers above to get a more competitive estimate as savings can vary based on roof type sun exposure, roof orientation, etc.
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                            <Grid item>
                                <Card elevation={3}>
                                    <CardContent>
                                        <Typography variant="h6" fontWeight={'bold'}>Our Top Pick</Typography>
                                    </CardContent>

                                    <CardActions>
                                        <Grid container
                                            direction="row" justifyContent="space-around" alignItems="center" spacing={2} >
                                            <Grid item xs={12} sm={12} md={2} lg={3} xl={3}>
                                                <img width="150px" height="200px"
                                                    src="https://www.thoughtco.com/thmb/1_chnMpM6_ryVnrzxueA39t3g3w=/3097x2323/smart/filters:no_upscale()/solar-panel-photovoltaic-installation-on-a-roof--alternative-electricity-source-884806548-5c5b67b9c9e77c000156659b.jpg" />
                                            </Grid>

                                            <Grid item xs={12} sm={12} md={8} lg={6} xl={7}>
                                                <Typography variant="subtitle2">
                                                    Our mission at Solar America(R) is to accelerate the adoption of cost-effective environmentally beneficial energy solutions - notably solar power and energy storage. We educate consumers on the facts ab...
                                                </Typography>

                                                <div className="title">
                                                    <Button startIcon={<AddCircleIcon />}>More</Button>

                                                    <span className="date" sx={{ float: 'right', }}>
                                                        <Typography variant="subtitle1" fontWeight={'bold'}>
                                                            844-336-1917
                                                        </Typography>
                                                    </span>
                                                </div>
                                            </Grid>

                                            <Grid item xs={12} sm={12} md={2} lg={3} xl={2}>
                                                <Button variant="contained" endIcon={<ArrowForwardIosIcon />} onClick={gotoSiteHandler} color="success">Visit Site</Button>
                                            </Grid>
                                        </Grid>
                                    </CardActions>

                                    <CardContent>
                                        <Typography variant="subtitle2" >
                                            <b>Check your email! We’ve emailed you a copy of your free solar system report.</b>
                                            This report will give you a basic idea of your system size, annual production, and expected savings based on the information you provided. Please talk to the installers above to get a more competitive estimate as savings can vary based on roof type sun exposure, roof orientation, etc.
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>


                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default RequestCompleted; // 207
