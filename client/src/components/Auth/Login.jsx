import React, { useState } from "react";
import { useDispatch } from 'react-redux';
// import {useHistory} from 'react-router-dom'
import {
  Avatar,
  Button,
  Paper,
  Grid,
  Typography,
  Container,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { GoogleLogin } from "react-google-login";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import useStyles from "./Styles.js";
import Input from "./Input.jsx";
import Loginan from "../Lottie/Loginan.js";
import { signin, signup } from '../../state/actions.js';
import { AUTH } from '../../constatnts/actiontypes.js';
// import Navbar from '../Landing/Navbar.jsx'
const initialState = {
  Name: "",
  email: "",
  password: "",
  confirmPassword: "",
  country: "",
  // occupation:"",
  role: "",
};
// const validrole = ["admin", "client", "employee"];

const Login = () => {
  const dispatch=useDispatch();
  const history=useNavigate();
  const [form, setForm] = useState(initialState);
  const [isSignup, setIsSignup] = useState(false);
  const classes = useStyles();

  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => setShowPassword(!showPassword);

  const switchMode = () => {
    setForm(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
    setShowPassword(false);
  };
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const {Name,email,password,confirmPassword,country,role}=form;
    if (isSignup) {
      dispatch(signup(form, history));
    } else {
      dispatch(signin(form, history));
    }

  };

    console.log(form);
  return (
    <>
      {/* <Navbar/> */}
      <div
        className="head"
        style={{
          height: "40px",
          position: "fixed",
          width: "100%",
          background: "transparent",
          textDecoration: "none",
          marginTop: "10px",
          borderBottom: ".1px solid grey",
        }}
      >
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <h2
            style={{
              fontFamily: "monospace",
              fontSize: "30px",
              color: "white",
              fontWeight: "bold",
              marginLeft: "40px",
            }}
          >
            {" "}
            LOGO
          </h2>
        </NavLink>
      </div>
      <div
        className="log"
        style={{
          display: "flex",
          gap: "5rem",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div className="for" style={{ marginLeft: "110px", marginTop: "10px" }}>
          <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={5}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                {isSignup ? "Sign up" : "Sign in"}
              </Typography>
              <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                  {isSignup && (
                    <>
                      <Input
                        name="Name"
                        label="Name"
                        handleChange={handleChange}
                        autoFocus
                        half
                      />
                    </>
                  )}
                  <Input
                    name="email"
                    label="Email Address"
                    handleChange={handleChange}
                    type="email"
                  />
                  <Input
                    name="password"
                    label="Password"
                    handleChange={handleChange}
                    type={showPassword ? "text" : "password"}
                    handleShowPassword={handleShowPassword}
                  />
                  {isSignup && (
                    <Input
                      name="confirmPassword"
                      label="Repeat Password"
                      handleChange={handleChange}
                      type="password"
                    />
                  )}
                  {isSignup && (
                    <Input
                      name="country"
                      label="Country"
                      handleChange={handleChange}
                      type="text"
                      autoFocus
                    />
                  )}
                  {
                    isSignup  &&(
                      <>
                      <Input
                  name="role"
                      label="role"
                      handleChange={handleChange}
                      type="text"
                      autoFocus
                      />
                      </>
                    )
                  }
                  

                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  style={{ marginTop: "10px" }}
                >
                  {isSignup ? "Sign Up" : "Sign In"}
                </Button>
                {/* <GoogleLogin
            clientId="564033717568-e5p23rhvcs4i6kffgsbci1d64r8hp6fn.apps.googleusercontent.com"
            render={(renderProps) => (
              <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} startIcon={<Icon />} variant="contained">
                Google Sign In
              </Button>
            )}
            onSuccess={googleSuccess}
            onFailure={googleError}
            cookiePolicy="single_host_origin"
          /> */}
                <Grid container justify="flex-end">
                  <Grid item>
                    <Button onClick={switchMode}>
                      {isSignup
                        ? "Already have an account? Sign in"
                        : "Don't have an account? Sign Up"}
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Paper>
          </Container>
        </div>

        <div
          className="ani"
          style={{ marginTop: "50px", borderLeft: ".1px solid grey" }}
        >
          <Loginan />
        </div>
      </div>
    </>
  );
};
export default Login;
