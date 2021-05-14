import React, { useRef, useState } from "react";
import { useAuth } from "../Context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import "./Login.scss";
import bg__img from "../Assets/bg__img.png";
import { Alert } from "react-bootstrap";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/chat");
    } catch {
      setError("Failed to sign in");
    }
    setLoading(false);
  }
  return (
    <div className="auth">
      <form onSubmit={handleSubmit} className="auth__form">
        <div className="home__heading">Sign In</div>

        <div className="home__sub__heading">
          Sign in into an existing account
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
        <Link to="/forgot-password">Forgot Password</Link>
        <button type="submit" disabled={loading} className="btn primary">
          Sign In
        </button>

        <div className="home__sub__heading">
          Sign in into an existing account <Link to="/signup">click here</Link>
        </div>
      </form>
      <img src={bg__img} alt="auth__img" className="auth__img" />
    </div>
  );
}
