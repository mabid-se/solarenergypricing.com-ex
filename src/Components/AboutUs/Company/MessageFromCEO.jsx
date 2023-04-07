import React from "react";

import { Container, Grid, Typography } from "@mui/material";

import ceoPhoto from "../../../assets/images/jonathan.jpeg";
import quoteIcon from "../../../assets/images/quote.svg";
import "../../../assets/CSS/MessageFromCEO.css";

const MessageFromCEO = () => {
    return (
        <>
            <Container sx={{ marginTop: 6 }}>
                <Grid container direction="row" justifyContent="center" alignItems="flex-start" marginY={3} paddingY={5} sx={{ background: "#f6faff" }} >
                    <Grid item xs={12} sm={3} md={4} lg={4} xl={4} paddingLeft={4}>
                        <img src={ceoPhoto} alt="ceo-photo" width="80%" className="circledImage" />
                    </Grid>

                    <Grid item xs={12} sm={9} md={4} lg={8} xl={8} paddingRight={4}>
                        <Typography variant="h2" fontWeight={400}>
                            A word from our CEO
                        </Typography>

                        <Typography variant="h6" fontWeight={400} marginTop={4}>
                            As solar power continues to become the most viable source of energy on the planet, the need for high-quality solar installers will continue to grow. We'll find them for you and have them compete for your business.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container direction="column" justifySelf="center" alignItems="center" sx={{ paddingX: 3, marginY: 13, }}>
                    <Grid item>
                        <img src={quoteIcon} alt="quote-icon" />
                    </Grid>

                    <Grid item marginTop={4}>
                        <Typography variant="h3" textAlign="center" fontWeight={600} color="#252a3d">
                            Some people choose between<br />saving people money or saving the<br />planet. We chose both.
                        </Typography>
                    </Grid>

                    <Grid item marginTop={2}>
                        <Typography variant="h6" textAlign="center" fontWeight={600} color="#9b9b9b">
                            Johnathan Zah, CEO
                        </Typography>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default MessageFromCEO;
