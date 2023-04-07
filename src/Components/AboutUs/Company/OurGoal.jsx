import React from "react";

import { Container, Grid, Typography } from "@mui/material";

const OurGoal = () => {
    return (
        <>
        <Container paddingX={2}>
            <Grid container direction="column" justifyContent="center" alignItems="flex-start">
                <Grid item marginY={2}>
                    <Typography variant="h2" fontWeight={500}>
                        Our goal
                    </Typography>
                </Grid>

                <Grid item marginY={2}>
                    <Typography variant="h6" fontWeight={400}>
                        We understand that going solar is nuanced - there are variables that can make the process feel overwhelming including equiment types, federal incentives and rebates, cost comparisons, and financing methods. Just matching with the right installer who will custom design your system to fit your home's specs can be a challenge.
                    </Typography>
                </Grid>

                <Grid item marginY={2}>
                    <Typography variant="h6" fontWeight={400}>
                        As solar panel systems slowly step into the mainstream, it's natural for confusion to be abound. People have questions about solar, and it isn't always so easy to find answers. This is where EnergyBillCruncher comes in.
                    </Typography>
                </Grid>

                <Grid item marginY={2}>
                    <Typography variant="h6" fontWeight={400}>
                        EnergyBillCruncher flips the script on the entire going solar process. With us, the homeowner is in the driver's seat. Our platform allows you to get all the info you need - comparison shop, check incentives and rebates, calculate savings - and get the absolute best deal possible.
                    </Typography>
                </Grid>

                <Grid item marginY={2}>
                    <Typography variant="h6" fontWeight={400}>
                        Please join us and you'll see that going solar has never been easier.
                    </Typography>
                </Grid>
            </Grid>
            </Container>
        </>
    );
};

export default OurGoal;
