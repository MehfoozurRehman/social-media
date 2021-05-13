import React from "react";
import "./Login.scss";
import bg__img from "../Assets/bg__img.png";
import InputBox from "../Components/InputBox";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="login">
      <form action="" className="login__form">
        <div className="home__heading">Create Account</div>
        <div className="home__sub__heading">
          Create a new account to start chatting
        </div>
        <InputBox label="Email Address" type="email" />
        <InputBox label="Password" type="password" />
        <InputBox label="Confirm Password" type="password" />
        <Link to="/chat" className="btn primary">
          Sign Up
        </Link>
        <div className="home__sub__heading">
          Already have an account! <Link to="/login">click here</Link>
        </div>
      </form>
      <img src={bg__img} alt="login__img" className="login__img" />
    </div>
  );
}
