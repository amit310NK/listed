import React from "react";
import "./login.css";
import { ReactComponent as GoogleIcon } from "../images/google.svg";
import { ReactComponent as AppleIcon } from "../images/apple.svg";

import { auth, provider } from "../config";
import { signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import Dashboard from "../Dashboard/dashboard";


const LoginPage = () => {
  const [value, setValue] = useState("");
  const handleBtn = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email);
      localStorage.setItem("email", data.user.email);
    });
  };

  useEffect(() => {
    setValue(localStorage.getItem("email"));
  });

  return (
    <div className="app">
      {value ? (
        <Dashboard />
      ) : (
        <div className="container">
          <div className="first-page">
            <div className="logo">Board.</div>
            <div className="sign-in">
              <div className="sign-in-box">
                <span
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  {" "}
                  Sign in{" "}
                </span>{" "}
                <br />
                <span
                  style={{
                    fontSize: "1rem",
                    fontWeight: "500",
                    color: "black",
                  }}
                >
                  {" "}
                  Sign in to your account
                </span>
                <div className="Sign-in-options">
                  <button className="login-with-btn" onClick={handleBtn}>
                    <GoogleIcon width="1.2rem" /> &nbsp; &nbsp;Sign in with
                    Google
                  </button>
                  <button className="login-with-btn">
                    <AppleIcon width="1.5rem" />
                    &nbsp; &nbsp; Sign in with Apple
                  </button>
                </div>
                <div className="login-form">
                  <div className="input-box">
                    <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      className="input-area"
                      placeholder="type your email"
                    />
                  </div>
                  <div className="input-box">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      className="input-area"
                      placeholder="enter your password"
                    />
                  </div>
                  <div className="password-reset">
                    <u style={{ color: "#346BD4", cursor: "pointer" }}>
                      Forgot Password?
                    </u>
                  </div>
                  <button className="login-btn">Sign In</button>

                  <div className="register-btn">
                    Don't have an account?{" "}
                    <span style={{ color: "#346BD4", cursor: "pointer" }}>
                      Register here
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* <Dashboard /> */}
    </div>
  );
};

export default LoginPage;
