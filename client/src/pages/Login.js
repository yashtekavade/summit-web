// src/components/Login.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [redirectToAdmin, setRedirectToAdmin] = useState(false);

  const handleLogin = () => {
    if (password === "rootloginpage") {
      setLoginMessage(`Hello, ${username}! Login successful.`);
      setRedirectToAdmin(true);
    } else {
      setLoginMessage("\n Invalid username or password.\nPlease try again.");
    }
  };

  return (
    <div>
      <div>
        <h2 className="login-heading">Login</h2>
      </div>
      <div className="login-container">
        <form className="login-form">
          <label className="login-label">
            Password:
            <input
              className="login-input"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <br />
          <button className="login-button" type="button" onClick={handleLogin}>
            Login
          </button>
        </form>
        <br></br>
        <p className="login-message">
          {loginMessage}{" "}
          {redirectToAdmin && (
            <span>
              Go to{" "}
              <Link className="login-link" to="/890123fasgbavblaadmin">
                Admin
              </Link>{" "}
              page.
            </span>
          )}
        </p>
        <br></br>
      </div>
    </div>
  );
};

export default Login;
