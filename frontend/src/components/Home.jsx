import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
 
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100 bg-light">
      <h1 className="mb-4">Welcome to the E-Waste Management App</h1>
      <div className="d-flex">
        <Link to="/login" className="btn btn-primary mx-2">
          Login
        </Link>
        <Link to="/signup" className="btn btn-success mx-2">
          Signup
        </Link>
      </div>
    </div>
  );
};

export default Home;
