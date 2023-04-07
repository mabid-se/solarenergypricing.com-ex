import React, { useState } from "react";

import { Grid, Slider, Typography } from "@mui/material";

const MonthlyBillSlider = () => {

    const [amount, setAmount] = useState(0);

    const amountChangeHandler = (event, newAmount) => {
        setAmount(newAmount);
    };

    let secondAmount = ' - 99';
    if (amount === 100) {
        secondAmount = ' - 199'
    }
    if (amount === 200) {
        secondAmount = ' - 299'
    }
    if (amount === 300) {
        secondAmount = ' - 399'
    }
    if (amount === 400) {
        secondAmount = ' - 499'
    }
    if (amount === 500) {
        secondAmount = ' - 599'
    }
    if (amount === 600) {
        secondAmount = ' - 699'
    }
    if (amount === 700) {
        secondAmount = '- 799'
    }
    if (amount === 800) {
        secondAmount = '+'
    }

    return (
        <Grid container direction="column" alignItems="center" sx={{ marginY: { xs: 5, sm: 4, md: 4, lg: 7, xl: 7, }, }}>
            <Grid item>
                <Typography variant="h5" fontWeight={'bold'} color={"#5BA6E6"}>USD {amount} {secondAmount}</Typography>
            </Grid>

            <Grid item width={"60%"} alignSelf="center" mt={2}>
                <Slider step={100} min={0} max={800} value={amount} onChange={amountChangeHandler}></Slider>
            </Grid>
        </Grid>
    );
};

export default MonthlyBillSlider; // 58
