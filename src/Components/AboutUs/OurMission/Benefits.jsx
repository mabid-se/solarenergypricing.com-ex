import React from "react";

import { Container, Grid, Typography } from "@mui/material";

const Benefits = () => {
    return (
        <>
            <Container sx={{ marginY: 6 }}>
                <Grid container direction="row" justifyContent="center" alignItems="center">
                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4} padding={3}>
                        <Grid borderLeft="5px solid #23abf9" paddingLeft={3} paddingY={1}>
                            <Typography variant="h5" fontWeight={700} textTransform="capitalize">
                                no comission
                            </Typography>

                            <Typography variant="subtitle1" fontWeight={400} marginTop={2}>
                                We want you to receive the best deal on solar, period. It doesn't matter to us which solar installer you end up choosing; we just want it to be the RIGHT solar installer.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4} padding={3}>
                        <Grid borderLeft="5px solid #23abf9" paddingLeft={3} paddingY={1}>
                            <Typography variant="h5" fontWeight={700} textTransform="capitalize">
                                instant estimates
                            </Typography>

                            <Typography variant="subtitle1" fontWeight={400} marginTop={2}>
                                Our platform allows consumers to get a system estimate in a matter of seconds. With it, you’ll receive estimated system size, annual production, and 20-year savings.
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item xs={12} sm={4} md={4} lg={4} xl={4} padding={3}>
                        <Grid borderLeft="5px solid #23abf9" paddingLeft={3} paddingY={1}>
                            <Typography variant="h5" fontWeight={700} textTransform="capitalize">
                                vetted installer network
                            </Typography>

                            <Typography variant="subtitle1" fontWeight={400} marginTop={2}>
                                Say goodbye to all of the back-and-forth negotiation that typically comes with comparison shopping. Our competitive marketplace does all the legwork for you.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
};

export default Benefits;
