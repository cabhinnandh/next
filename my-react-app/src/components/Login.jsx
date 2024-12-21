import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-card">
      <h2 className="login-header">Login</h2>
      <div className="form-container">
        <form>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Enter your name"
          />

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            className="mt20"
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
            className="mt20"
          />
          <button type="submit" className="mt20">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
