import React from "react";
import SignUp from "./Pages/SignUp";
import Chat from "./Pages/Chat";
import Login from "./Pages/Login";
import UpdateProfile from "./Pages/UpdateProfile";
import ForgotPassword from "./Pages/ForgotPassword";
import Home from "./Pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "./Context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PrivateRoute from "./Routes/PrivateRoute";
import "./App.scss";

export default function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <PrivateRoute path="/chat" component={Chat} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
