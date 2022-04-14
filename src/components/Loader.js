import React from 'react';
import {Box, Button, Container, Grid} from "@mui/material";

const Loader = () => {
    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50}}
                  alignItems={"center"}
                  justifyContent={"center"}
            >
                <Grid style={{width: 400, background: "lightgray"}}
                      container
                      alignItems={"center"}
                      direction={"column"}
                >
                    <div className="lds-hourglass"></div>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Loader;