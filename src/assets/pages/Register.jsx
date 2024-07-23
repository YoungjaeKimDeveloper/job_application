import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div>
      <h1>Register Page</h1>
      <Link to="/login">
        <p>Login Page</p>{" "}
      </Link>
    </div>
  );
};

export default Register;
