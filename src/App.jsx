import React, { useState, useEffect } from "react";
import logo from "./cra-logo.png";
import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
// import { SetCurrentUser } from "./redux/user/user.actions";
// import { selectCurrentUser } from "./redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import Headers from "./components/Header";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

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

const App = (props) => {
  const classes = useStyles();
  //these variables are used for firebase signin(good examples of using redux to pass the user as a prop to the app.jsx)
  // const { setCurrentUser } = props;
  // const unsubscribeFromAuth = null;

  return (
    <div className="App">
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{ backgroundColor: "white", boxShadow: "none" }}
        >
          <Headers />
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="black"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              Track you investments
            </Typography>
            <Button color="black">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    </div>
  );
};

{
  /* this is how we pass props with redux to our App.jsx */
}
{
  /* const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(SetCurrentUser(user)),
}); */
}

export default App;
