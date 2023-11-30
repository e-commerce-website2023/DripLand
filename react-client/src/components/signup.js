
import { useState,useContext  } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  Paper,
  MenuItem,
} from "@mui/material";
import { makeStyles } from '@mui/styles';
import axios from "axios";
import { Navigate } from "react-router-dom";
import PasswordSignUp from "../lib/PasswordSignUp.js";
import EmailSignUp from "../lib/EmailSignUp.js";
import { SetPopupContext } from "../App.js";
import apiRest from "../lib/apiRest.js";
import isAuth from "../lib/isAuth.js";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "60px 60px",
  },
  inputBox: {
    width: "400px",
  },
  submitButton: {
    width: "400px",
  },
}));

const Signup = (props) => {
  const classes = useStyles();
  const setPopup = useContext(SetPopupContext);
  const [loggedin, setLoggedin] = useState(isAuth());
  const [signupDetails, setSignupDetails] = useState({
    type: "user",
    email: "",
    password: "",
    name: "",
  });

  const [inputErrorHandler, setInputErrorHandler] = useState({
    email: {
      untouched: true,
      required: true,
      error: false,
      message: "",
    },
    password: {
      untouched: true,
      required: true,
      error: false,
      message: "",
    },
    name: {
      untouched: true,
      required: true,
      error: false,
      message: "",
    },
    role: {
      untouched: true,
      required: true,
      error: false,
      message: "",
    },

  });

  const handleInput = (key, value) => {
    setSignupDetails((prevDetails) => ({
      ...prevDetails,
      [key]: value,
    }));
  };

  const handleInputError = (key, status, message) => {
    setInputErrorHandler((prevErrorHandler) => ({
      ...prevErrorHandler,
      [key]: {
        required: true,
        untouched: false,
        error: status,
        message: message,
      },
    }));
  };

  const handleSignup = () => { //
    const tmpErrorHandler = {};
    Object.keys(inputErrorHandler).forEach((obj) => {
      if (inputErrorHandler[obj].required && inputErrorHandler[obj].untouched) {
        tmpErrorHandler[obj] = {
          required: true,
          untouched: false,
          error: true,
          message: `${obj[0].toUpperCase() + obj.substr(1)} is required`,
        };
      } else {
        tmpErrorHandler[obj] = inputErrorHandler[obj];
      }
    });

    // // Check for confirmCode for admin
    // if (signupDetails.type === "admin") {
    //   tmpErrorHandler.confirmCode = {
    //     required: true,
    //     untouched: false,
    //     error: true,
    //     message: "Invalid confirmation code. Please contact admin to receive the code.",
    //   };
    // }

    const verified = !Object.keys(tmpErrorHandler).some((obj) => {
      return tmpErrorHandler[obj].error;
    });

    if (verified) {
      axios
        .post(apiRest.signup, signupDetails)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("type", response.data.type);
          setLoggedin(isAuth());
          setPopup({
            open: true,
            severity: "success",
            message: " successfully",
          });
          console.log(response);
        })
        .catch((err) => {
          setPopup({
            open: true,
            severity: "error",
            message: err.response.data.message,
          });
          console.log(err.response);
        });
    } else {
      setInputErrorHandler(tmpErrorHandler);
      setPopup({
        open: true,
        severity: "error",
        message: "Incorrect Input",
      });
    }
  };

  return loggedin ? (
    <Navigate to="/" />
  ) : (
    <Paper elevation={3} className={classes.body}>
      <Grid container direction="column" spacing={4} alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h2">
            Signup
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            select
            label="Category"
            variant="outlined"
            className={classes.inputBox}
            value={signupDetails.type}
            onChange={(event) => {
              handleInput("type", event.target.value);
            }}
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="seller">Seller</MenuItem>
          </TextField>
        </Grid>
        <Grid item>
          <TextField
            label="Name"
            value={signupDetails.name}
            onChange={(event) => handleInput("name", event.target.value)}
            className={classes.inputBox}
            error={inputErrorHandler.name.error}
            helperText={inputErrorHandler.name.message}
            onBlur={(event) => {
              if (event.target.value === "") {
                handleInputError("name", true, "Name is required");
              } else {
                handleInputError("name", false, "");
              }
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <EmailSignUp
            label="Email"
            value={signupDetails.email}
            onChange={(event) => handleInput("email", event.target.value)}
            inputErrorHandler={inputErrorHandler}
            handleInputError={handleInputError}
            className={classes.inputBox}
            required={true}
          />
        </Grid>
        <Grid item>
          <PasswordSignUp
            label="Password"
            value={signupDetails.password}
            onChange={(event) => handleInput("password", event.target.value)}
            className={classes.inputBox}
            error={inputErrorHandler.password.error}
            helperText={inputErrorHandler.password.message}
            onBlur={(event) => {
              if (event.target.value === "") {
                handleInputError("password", true, "Password is required");
              } else {
                handleInputError("password", false, "");
              }
            }}
          />
        </Grid>
        {/* {signupDetails.type === "admin" ? (
          <Grid item>
            <TextField
              label="Confirmation Code"
              value={signupDetails.confirmCode}
              onChange={(event) => handleInput("confirmCode", event.target.value)}
              className={classes.inputBox}
              error={inputErrorHandler.confirmCode.error}
              helperText={inputErrorHandler.confirmCode.message}
              onBlur={(event) => {
                if (event.target.value === "") {
                  handleInputError("confirmCode", true, "Confirmation code is required");
                } else {
                  handleInputError("confirmCode", false, "");
                }
              }}
              variant="outlined"
            />
          </Grid>
        ) : null} */}

        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSignup}
            className={classes.submitButton}
          >
            Signup
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Signup;
