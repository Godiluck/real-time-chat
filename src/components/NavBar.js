import React from 'react';
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE} from "./utils/consts";

const NavBar = () => {
    const user = false
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar color={"secondary"} position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
            {user ?
                <Button variant={"outlined"} color="inherit">LogOut</Button>
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