import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const NavMenu = () => {
  const classes = useStyles();
  return (
    <AppBar position="static" color="secondary">
      <Toolbar variant="dense">
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        ></IconButton>
        <Typography variant="h6" color="inherit">
          Nedra Stream - Тестовое задание
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default NavMenu;
