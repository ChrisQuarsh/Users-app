import React from "react";
import { connect } from "react-redux";
import { registerWithEmail } from "../store/authActions";

function Register(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    let email = e.target.elements.email.value;
    let password = e.target.elements.password.value;
    props.registerWithEmail(email, password);
  };

  return (
    <div>
      <h1>Register Now</h1>

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

        <button type="submit"> Join </button>
      </form>
    </div>
  );
}

const mapStateToProps = () => {};

const mapDispatchToProps = {
  registerWithEmail,
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
