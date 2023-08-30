import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Logo, FormRow } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo></Logo>
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="john"></FormRow>
        <FormRow type="text" name="lastName" labelText="Last Name" defaultValue="smith"></FormRow>
        <FormRow type="text" name="location" defaultValue="earth"></FormRow>
        <FormRow type="email" name="email" defaultValue="john@gmail.com"></FormRow>
        <FormRow type="password" name="password" defaultValue="secret123"></FormRow>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
