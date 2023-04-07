import { Box, Button, Card, CardActions, CardContent, Container, FormControl, Grid, Link, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingButton from '@mui/lab/LoadingButton';
import projectSettings from "../../assets/Js/projectSettings";
import { callAPI } from "../../assets/Js/apiConfig";
import SingleScreenHeader from "./SingleScreenHeader";

const PhoneField = (props) => {
    const navMe = useNavigate();
    const [phoneNumber, SetPhoneNumber] = useState("");
    const [loading, SetLoading] = useState(false);
    const [error, SetApiError] = useState("");
    const prevButton = () => {
        props.goBack();
    };

    const disabledOrNot = props.isDisabled;
    const progressValue = props.progValue;

    const callApi = async () => {
        if (phoneNumber) {
            let url = `${projectSettings.baseUrl}/api/home/calculator/CA/95446`;
            let header = false;
            let data = null;
            let type = "GET";
            SetLoading(true);
            const response = await callAPI(url, header, type, data, null);
            SetLoading(false)
            if (response.status === 200) {
                props.handleNext();
                navMe("../confirmation");
            }
            else {
                console.log("Server responds with error!");
                const error = await response.data?.error;
                SetApiError(error);
            }
        }
    };
    const handlePhoneNumber = (e) => {
        SetApiError("");
        SetPhoneNumber(e.target.value);
    };
    const phoneSubmitHandler = async (e) => {
        e.preventDefault();
        await callApi();
    };

    return (
        <Box marginTop={12} sx={{ paddingTop: { xs: 7, sm: 3, md: 2, lg: 2, xl: 1 }, }}>
            <Card elevation={7}>
                <SingleScreenHeader goBack={prevButton} isDisabled={disabledOrNot} progValue={progressValue} />

                <Grid container direction="column" justifyContent="center" alignItems="center" paddingY={6} >
                    <Grid item>
                        <CardContent>
                            <Typography variant="h5" fontWeight="bold" textAlign="center">
                                The Final Step - See if you qualify for <br />solar incentives!
                            </Typography>

                            <Typography variant="subtitle1" marginTop={1} textAlign="center">
                                Please complete this step to view your savings.
                            </Typography>

                            <Grid container direction="column" justifyContent="center" alignItems="center"
                                sx={{ paddingY: { xs: 2, sm: 3, md: 5, lg: 6, xl: 6 }, }}>
                                <FormControl>
                                    <Grid item marginTop={3}
                                        sx={{ width: { xs: '240px', sm: '260px', md: '380px', lg: '500px', xl: '600px' }, }}>
                                        <TextField fullWidth variant="outlined" label="Phone No" id="phone-no" required error={phoneNumber.length === 0 ? true : false} onChange={handlePhoneNumber} value={phoneNumber} />

                                        <Typography variant="body2" paddingLeft={1} marginTop={2}>
                                            By clicking the button below, you authorize up to four <Link href="#" underline="none"> home services or solar companies </Link> to email and/or call you, and send you pre-recorded messages and text messages at the number you entered above, using an autodialer, with offers about their products or services, even if your phone number is on any national or state “Do Not Call” list. Message and data rates may apply. Your consent here is not based on a condition of purchase. You may revoke your consent at any time.
                                        </Typography>
                                    </Grid>
                                </FormControl>
                            </Grid>
                        </CardContent>
                    </Grid>

                    <Grid item sx={{ width: { xs: '80%', sm: '70%', md: '50%', lg: '50%', xl: '50%' }, }}>
                        <CardActions>
                            <LoadingButton variant="contained" color="success" size="large" fullWidth onClick={phoneSubmitHandler} sx={{ height: "60px", }} disabled={loading} loading={loading}>
                                Continue
                            </LoadingButton>
                        </CardActions>
                    </Grid>
                </Grid>
            </Card>
        </Box >
    );
};

export default PhoneField; // 73
