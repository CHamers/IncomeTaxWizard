import React from "react";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/LandingPage";

import main from "../assets/images/main.svg";
import problem_solving from "../assets/images/undraw_problem_solving.svg";
import { Logo } from "../components";


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo></Logo>
        <Link to="/tax-info" >
            UK's Tax System
          </Link>
       
      </nav>
      
      <div className="container page">
        <div className="info">
          <h1>
            Income <span>Tax</span> Calculator
          </h1>
          <p>
            Our income tax calculator is a tool designed to estimate the amount
            of income tax an individual or business may owe to the government
            based on their taxable income and relevant tax laws. It takes into
            account factors such as income sources, deductions, credits, and
            applicable tax rates to calculate the tax liability. By entering
            specific financial information, such as income from employment,
            investments, or self-employment, as well as deductions like mortgage
            interest or student loan interest, the calculator provides an
            estimate of the tax amount owed or the refund due. Income Tax Wizard
            will help individuals or businesses plan their finances, make
            informed decisions, and ensure compliance with tax regulations.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img
          src={problem_solving}
          alt="Find your path"
          className="img main-img"
        />
      </div>
    </Wrapper>
  );
};

export default Landing;
