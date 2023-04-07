import React from 'react'

import { Grid, Typography, Card, CardContent, Box } from '@mui/material';
import "../../assets/CSS/MoreInformation.css";
const MoreInformation = (props) => {
    return (
        <Box sx={{ paddingTop: { xs: 3, sm: 3, md: 2, lg: 4, xl: 4 }, }} className="mainContainer">
            <Grid container spacing={3} className="rowContainer">
                <Grid item xs={12} sm={12} md={7} lg={7} xl={7} className="cardContianer">
                    <Card elevation={7} paddinX={1} paddingY={1}  >

                        <CardContent>
                            <Grid container justifyContent="center" alignItems="center" spacing={2}>
                                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} >
                                    <img src="/lock.svg" width="100%" height="auto" />
                                </Grid>

                                <Grid item xs={8} sm={8} md={8} lg={8} xl={8}>
                                    <Typography variant='h5'>
                                        {props.data.head1}
                                    </Typography>

                                    <Typography variant='subtitle'>
                                        {props.data.detail1}
                                    </Typography>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Grid>

                <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className="cardContianer">

                    <Card elevation={7} paddinX={1} paddingY={1}>
                        <Grid container direction="row" justifyContent="center" alignItems="center">
                            <Grid item>
                                <CardContent>
                                    <Typography variant='h5'>
                                        {props.data.head2}
                                    </Typography>

                                    <Typography variant='subtitle'>
                                        {props.data.detail2}
                                    </Typography>
                                </CardContent>
                            </Grid>
                        </Grid>
                    </Card>

                </Grid>
            </Grid>
        </Box>
    );
};

export default MoreInformation // 112
