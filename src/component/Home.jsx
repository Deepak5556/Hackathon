import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const logout = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <>
      <button onClick={logout}>Log out</button>
    </>
  );
};

export default Home;
