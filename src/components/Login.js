import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import {Context} from "../index";

const Login = () => {
    const {auth} = useContext(Context)

    const login = () => {

    }

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
                    <Box p={5}>
                        <Button variant={"outlined"}>Login with Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;