import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { Link } from "react-router-dom";
import bg__img from "../Assets/bg__img.png";

export default function FrogotPassowrd() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Check your inbox for further insturctions");
    } catch {
      setError("Failed to reset Password");
    }
    setLoading(false);
  }
  return (
    <div className="auth">
      <form onSubmit={handleSubmit} className="auth__form">
        <div className="home__heading">Forgot Password</div>
        {error && <Alert variant="danger">{error}</Alert>}
        {message && <Alert variant="success">{message}</Alert>}
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
        <button type="submit" disabled={loading} className="btn primary">
          Reset Password
        </button>
        <div className="home__sub__heading">
          Need a new account <Link to="/signup">click here</Link>
        </div>
      </form>
      <img src={bg__img} alt="auth__img" className="auth__img" />
    </div>
  );
}
