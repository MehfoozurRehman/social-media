import React, { useRef, useState } from "react";
import { Alert } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import bg__img from "../Assets/bg__img.png";
import "./SignUp.scss";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("password do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push("/dashboard");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }
  return (
    <div className="auth">
      <img src={bg__img} alt="auth__img" className="auth__img" />
      <form onSubmit={handleSubmit} className="auth__form">
        <div className="home__heading">Create Account</div>
        <div className="home__sub__heading">
          Create a new account to start chatting
        </div>
        {error && <Alert variant="danger">{error}</Alert>}
        <div className="input__box">
          <label htmlFor="Email Address" className="input__label">
            Email Address
          </label>
          <input
            className="input__field"
            id="Email Address"
            type="email"
            ref={emailRef}
            required
          />
        </div>
        <div className="input__box">
          <label htmlFor="Password" className="input__label">
            Password
          </label>
          <input
            className="input__field"
            id="Password"
            type="password"
            ref={passwordRef}
            required
          />
        </div>
        <div className="input__box">
          <label htmlFor="Pssword Confirmation" className="input__label">
            Pssword Confirmation
          </label>
          <input
            className="input__field"
            id="Pssword Confirmation"
            type="password"
            ref={passwordConfirmRef}
            required
          />
        </div>
        <button type="submit" disabled={loading} className="btn primary">
          Sign Up
        </button>
        <div className="home__sub__heading">
          Already have an account! <Link to="/login">click here</Link>
        </div>
      </form>
    </div>
  );
}
