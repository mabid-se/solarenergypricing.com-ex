import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useMediaQuery from '@mui/material/useMediaQuery';
import LoadingButton from '@mui/lab/LoadingButton';
import "../assets/CSS/RoundedInputField.css"
import projectSettings from "../assets/Js/projectSettings";
import { callAPI } from "../assets/Js/apiConfig";
import { CircularProgress, FormControl } from "@mui/material";

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
    }

    const zipSubmitHandler = async (e) => {
        e.preventDefault();
        await getZipDetails();
    }
    const redirect = () => {
        if (!error && !loading) {
            navMe("../flow/powerbill");
        }
    }
    const handleZipCodeInput = (e) => {
        onAddHandler("");
        SetError(false);
        SetInputZipCode(e.target.value);
    }

    const style = {
        zipSubmit: {
            borderTopRightRadius: "50px",
            borderBottomRightRadius: "50px",
            // color: "secondary",
            backgroundColor: "#00b964",
            height: "75px",
            border: "none",
            textAlign: "center",
            fontWeight: "700",
            fontSize: "20px",
            textTransform: "none",
            verticalAlign: "top",
        }
    }
    /*<button textAlign='center' className="zipSubmit" onClick={zipSubmitHandler} disabled={loading} >Search </button>*/

    /*<Button textAlign='center' variant="contained" color="success" className="zipSubmit" onClick={zipSubmitHandler} disabled={loading} >Search </Button>*/

    return (
        <>
{/* 
            <FormControl variant="filled">
                <InputFie
        <InputLabel htmlFor="component-filled">Name</InputLabel>
                <FilledInput id="component-filled" value={name} onChange={handleChange} />
            </FormControl> */}
            <input type="text" placeholder="Enter Zip Code" className="zipInput" id="zipInputColor" onChange={handleZipCodeInput} />
            <LoadingButton 
            // size="large"
                //  style={style.zipSubmit}
                // sx={{ color: "white" }}
                className="zipSubmit"
                // onClick={zipSubmitHandler}
                variant="contained"
                loading={loading}
                disabled={loading}
            >
                Search
            </LoadingButton>
        </>
    );
}

export default RoundedInputField;
