import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import LoadingButton from '@mui/lab/LoadingButton';
import "../assets/CSS/RoundedInputField.css" // remove this
import projectSettings from "../assets/Js/projectSettings";
import { callAPI } from "../assets/Js/apiConfig";
import { FormControl, OutlinedInput } from "@mui/material";

const RoundedInputField = ({ onAddHandler }) => {

    const navMe = useNavigate();

    const [inputZipCode, SetInputZipCode] = useState("");
    const [loading, SetIsLoading] = useState(false);
    const [error, SetError] = useState(false);

    const getZipDetails = async () => {
        if (inputZipCode) {
            let url = `${projectSettings.baseUrl}/api/home/zipcheck/${inputZipCode}`;
            SetIsLoading(true);
            let header = false;
            let data = null;
            let type = "GET";
            const response = await callAPI(url, header, type, data, null)
            SetIsLoading(false);
            if (response.status === 200) {
                console.log(response);
                redirect();
            }
            else {
                const _error = response.data?.error;
                SetError(true);
                onAddHandler(_error);
            }
        } else {
            SetError(true);
            onAddHandler("Please Enter Zip code");
        }
    };

    const zipSubmitHandler = async (e) => {
        e.preventDefault();
        await getZipDetails();
    };

    const redirect = () => {
        if (!error && !loading) {
            navMe("../flow/powerbill");
        }
    };

    const handleZipCodeInput = (e) => {
        onAddHandler("");
        SetError(false);
        SetInputZipCode(e.target.value);
    };

    const styles = {
        zipInput: {
            borderTopLeftRadius: "50px",
            borderBottomLeftRadius: "50px",
            backgroundColor: "white",
            fontSize: "20px",
            fontWeight: 700,
            color: "#0d0c0ced",
            textAlign: "center"
        },
        zipSubmit: {
            borderTopRightRadius: "50px",
            borderBottomRightRadius: "50px",
            backgroundColor: "#00b964",
            border: "none",
            // textAlign: "center",
            fontWeight: "700",
            fontSize: "20px",
            textTransform: "none",
            verticalAlign: "top",
        }
    };

    return (
        <>
            <FormControl>
                <OutlinedInput placeholder="Enter Zip Code" style={styles.zipInput} onChange={handleZipCodeInput}
                    sx={{
                        width: { xs: '160px', sm: '195px', md: '245px', lg: '245px', xl: '245px' },
                        height: { xs: '50px', sm: '55px', md: '75px', lg: '75px', xl: '75px' },
                        input: { textAlign: "center" },

                        // '&:hover': {
                        //     '&$notchedOutline': {
                        //         borderColor: '#f00',
                        //     }
                        // },                     

                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            border: 'none',
                        },
                    }} />
            </FormControl>

            <LoadingButton style={styles.zipSubmit}
                sx={{
                    width: { xs: '160px', sm: '195px', md: '245px', lg: '245px', xl: '245px' },
                    height: { xs: '50px', sm: '55px', md: '75px', lg: '75px', xl: '75px' },
                }}
                onClick={zipSubmitHandler} loading={loading} variant="contained" disabled={loading} >
                Get Started
            </LoadingButton>
        </>
    );
}

export default RoundedInputField;
