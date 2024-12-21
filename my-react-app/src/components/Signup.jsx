import React from "react";
import "./Signup.css";
import { Button, TextField } from "@mui/material";

const Signup = () => {
  return (
    <div className="signup-container">
      <h2 className="signup-title">Signup</h2>
      <div className="signup-field">
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          placeholder="Enter your name"
          className="signup-input"
          required="true"
        />
      </div>
      <div className="signup-field">
        <TextField
          id="standard-basic"
          label="Password"
          variant="standard"
          className="signup-input"
          type="password"
        />
      </div>
      <div className="signup-button-container">
        <Button variant="outlined" className="signup-button">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Signup;
