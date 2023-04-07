import React from "react";
import { Grid, Typography } from "@mui/material";

import USSolarMap from "../../../assets/images/NationalSO.jpg";

const SystemOut = () => {
    return (
        <>
            <Grid container direction="column" justifyContent="center" alignItems="center">
                <Grid item marginY={3}>
                    <Typography variant="h4" textTransform="capitalize" textAlign="center" fontWeight={700}>
                        average annual solar system output by state
                    </Typography>
                </Grid>

                <Grid item marginY={3}>
                    <Typography variant="h6" fontWeight={400}>
                        One of the biggest factors when it comes to calculating solar savings and how many solar panels you need is how much electricity each solar panel will produce on your roof. This will depend largely on how shaded your roof is and how many hours of daily sunlight your panels receive.
                    </Typography>
                </Grid>

                <Grid item marginY={3}>
                    <Typography variant="h6" fontWeight={400}>
                        Lucky for us, the National Renewal Energy Laboratory (NREL) for the U.S. Department of Energy have created a geospatial solar map that outlines total solar resource in the United States. Their map shows how many kilowatt-hours per day you can get per square meter of solar. Check to see where your area stacks up on the map below.
                    </Typography>
                </Grid>

                <Grid item marginY={3}>
                    <img src={USSolarMap} alt="us-solar-map" />
                </Grid>

                <Grid item marginY={3}>
                    <Typography variant="h6" fontWeight={400}>
                        Please keep in mind that this map should not be the only resource used to determine how economical solar will be for your home. How much you can save will depend largely on utility rates in your area, your roof type and sun exposure, as well as the rebates and incentives offered in your particular region. To give you a better idea of how much you save, you can use our solar calculator.
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default SystemOut;
