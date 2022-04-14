import React, {useContext} from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {Navigate, NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "./utils/consts";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const NavBar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar color={"secondary"} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
            {user ?
                <NavLink to={LOGIN_ROUTE}>
                    <Button onClick={() => auth.signOut()} variant={"outlined"} color="inherit">LogOut</Button>
                </NavLink>
                :
                <NavLink to={LOGIN_ROUTE}>
                    <Button variant={"outlined"} color="inherit">LogIn</Button>
                </NavLink>
            }
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default NavBar;