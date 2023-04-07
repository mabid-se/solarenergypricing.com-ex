import { BottomNavigation, BottomNavigationAction,Box } from "@mui/material";
import React from "react";

const StepperFooter = () => {
    return (
        <Box mt={6}>

            <BottomNavigation showLabels
                sx={{ backgroundColor: '#D6CACA' }}  >
                <BottomNavigationAction label="(c) 2020 Solarenergypricing.com" />

                <BottomNavigationAction label="Terms & Disclosures" />

                <BottomNavigationAction label="Do Not Sell My Info" />

                <BottomNavigationAction label="Privacy Policy" />

                <BottomNavigationAction label="Contact Us" />
            </BottomNavigation>
        </Box>
    );
};

export default StepperFooter;
