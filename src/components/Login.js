import React from "react";
import { connect } from "react-redux";
import { loginWithEmail, loginWithGoogle } from "../store/authActions";
import "../loginpage.css";

import { Link } from "react-router-dom";

function Login(props) {
  if (!props.auth.isLoaded) return null;

  if (props.auth.uid) props.history.push("/");
  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    props.loginWithEmail(email, password);
  };

  return (
    <div className="fullpage">
      <h1 className="text" style={{ fontSize: "4rem" }}>
        Login Now
      </h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label
            className="text"
            style={{ marginRight: "50px", marginBottom: "50px" }}
          >
            Email :
          </label>
          <input name="email" type="email" placeholder="Email" />
        </div>

        <div>
          <label className="text">Password :</label>
          <input name="password" type="password" placeholder="  Password" />
        </div>

        <hr />

        <button className="loginButton" type="submit">
          {" "}
          <b>Login</b>{" "}
        </button>

        <hr />

        <button onClick={props.loginWithGoogle}>
          <img
            src={require("../Images/download (2).png")}
            wdth="100"
            alt="google button"
          />
        </button>

        <p className="registerLink">
          Do not have an account?
          <Link to="/register">Register</Link>
        </p>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = {
  loginWithEmail,
  loginWithGoogle,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
