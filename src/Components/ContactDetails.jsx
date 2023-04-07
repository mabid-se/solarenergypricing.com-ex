import React from "react";
import { Grid, Typography } from "@mui/material";

const ContactDetails = () => {
    return (
        <>
            <Grid container direction="column" justifyContent="flex-start" alignItems="stretch" marginY={4}>
                <Grid item xs={12} sx={{ background: "#f7f7f7", paddingY: 4, paddingX: { xs: 4, sm: 4, md: 4, lg: 4, xl: 4 } }}>
                    <Typography variant="h6">
                        Address
                    </Typography>

                    <Typography variant="subtitle1">
                        8383 Wilshire Blvd, Suite 540 <br /> Los Angeles, CA 90211
                    </Typography>
                </Grid>

                <Grid item xs={12} sx={{ background: "#f7f7f7", marginTop: 5, paddingY: 4, paddingX: { xs: 4, sm: 4, md: 4, lg: 4, xl: 4 } }}    >
                    <Typography variant="h6">
                        Email us
                    </Typography>


                    <Typography variant="subtitle1" fontWeight="bold">
                        <a href="#">
                            contact@solarenergypricing.com
                        </a>
                    </Typography>

                    <Typography variant="body2">
                        Mon-Fri
                    </Typography>
                </Grid>
            </Grid>
        </>
    );
};

export default ContactDetails;