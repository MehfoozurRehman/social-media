import React, { useRef, useState } from "react";
import { Card, Form, Button, Alert } from "react-bootstrap";
import { useAuth } from "../Context/AuthContext";
import { Link, useHistory } from "react-router-dom";
import bg__img from "../Assets/bg__img.png";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("password do not match");
    }
    const promises = [];
    setError("");
    setLoading(true);
    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value));
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value));
    }
    Promise.all(promises)
      .then(() => {
        history.push("/dashboard");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  }
  return (
    <div className="auth">
      <img src={bg__img} alt="auth__img" className="auth__img" />
      <form onSubmit={handleSubmit} className="auth__form">
        <div className="home__heading">Update Profile</div>
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
            defaultValue={currentUser.email}
            placeholder="Leave blank to keep the same"
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
            placeholder="Leave blank to keep the same"
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
            placeholder="Leave blank to keep the same"
            required
          />
        </div>
        <button type="submit" disabled={loading} className="btn primary">
          Update Profile
        </button>
        <div className="home__sub__heading">
          <Link to="/dashboard">Cancel</Link>
        </div>
      </form>
    </div>
    // <>
    //   <Card>
    //     <Card.Body>
    //       <h2 className="text-center mb-4">Update Profile</h2>
    //       {error && <Alert variant="danger">{error}</Alert>}
    //       <Form onSubmit={handleSubmit}>
    //         <Form.Group id="email">
    //           <Form.Label>Email</Form.Label>
    //           <Form.Control
    //             type="email"
    //             ref={emailRef}
    //             required
    //             defaultValue={currentUser.email}
    //             placeholder="Leave blank to keep the same"
    //           />
    //         </Form.Group>
    //         <Form.Group id="password">
    //           <Form.Label>Password</Form.Label>
    //           <Form.Control
    //             type="password"
    //             ref={passwordRef}
    //             placeholder="Leave blank to keep the same"
    //           />
    //         </Form.Group>
    //         <Form.Group id="password-confirm">
    //           <Form.Label>Pssword Confirmation</Form.Label>
    //           <Form.Control
    //             type="password"
    //             ref={passwordConfirmRef}
    //             placeholder="Leave blank to keep the same"
    //           />
    //         </Form.Group>
    //         <Button type="submit" className="w-100" disabled={loading}>
    //           Update
    //         </Button>
    //       </Form>
    //     </Card.Body>
    //   </Card>
    //   <div className="w-100 text-center mt-2">
    //     <Link to="/dashboard">Cancel</Link>
    //   </div>
    // </>
  );
}
