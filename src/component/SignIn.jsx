import React from "react";
import "../style/signin.css";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();

  const Login = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="container">
      <h2 className="signin">Sign In</h2>
      <button className="google-btn" onClick={Login}>
        <span>Sign-In With Google</span>
      </button>
    </div>
  );
};

export default SignIn;
