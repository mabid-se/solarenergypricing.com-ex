import React from "react";
import { Box, Button, Grid, TextareaAutosize, TextField, Typography, } from "@mui/material";

const ContactForm = () => {
    return (
        <Box component="form">
            <Grid
                container
                direction="column"
                justifyContent="space-evenly"
                alignItems="stretch" paddingX={2}
            >
                <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    marginY={2}
                >
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6} paddingRight={4} >
                        <TextField fullWidth
                            id="first-name"
                            label="First Name"
                            placeholder="John"
                            variant="standard" />
                    </Grid>

                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6} paddingLeft={4} >
                        <TextField fullWidth
                            id="last-name"
                            label="Last Name"
                            placeholder="Smith"
                            variant="standard" />
                    </Grid>
                </Grid>

                <Grid item marginY={2}>
                    <TextField fullWidth
                        id="email"
                        label="Email"
                        placeholder="abc@domain.com"
                        variant="standard" />
                </Grid>

                <Grid item marginY={2}>
                    <TextField fullWidth
                        id="reason"
                        label="Reason"
                        placeholder="Any Reason"
                        variant="standard" />
                </Grid>

                <Grid item marginY={2}>
                    <TextField fullWidth
                        multiline
                        id="Comments"
                        lable="Comments"
                        placeholder="Your Comments or Concerns"
                        rows={4}
                        variant="standard" />
                </Grid>
                
                <Grid item marginY={2} paddingTop={2}>
                    <Button variant="contained" size="large">
                        submit
                    </Button>
                </Grid>
            </Grid>
        </Box >
    );
};

export default ContactForm;
