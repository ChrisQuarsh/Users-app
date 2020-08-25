import React from "react";
import { connect } from "react-redux";
import { loginWithEmail, loginWithGoogle } from "../store/authActions";

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
    <div>
      <h1>Login Now</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input name="email" type="email" placeholder="email" />
        </div>

        <div>
          <label>Password</label>
          <input name="password" type="password" placeholder="password" />
        </div>

        <hr />

        <button type="submit"> Login </button>

        <hr />

        <button onClick={props.loginWithGoogle}>
          <img
            src={require("../Images/download (2).png")}
            wdth="100"
            alt="google button"
          />
        </button>
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
