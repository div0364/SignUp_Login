import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "./Redux/AuthSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(logout());
    toast.success("You have been logged out.");
    navigate("/");
  }, [dispatch, navigate]);

  return null; // or a message like <p>Logging out...</p>
};

export default Logout;
