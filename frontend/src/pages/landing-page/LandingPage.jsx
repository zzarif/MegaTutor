import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Features from "../../components/heromain/Features";
import Heromain from "../../components/heromain/Heromain";
import TuitionTypes from "../../components/heromain/TuitionTypes";
import { urls } from "../../constants/urls";
import { Navigate } from "react-router-dom";

const LandingPage = () => {
  return localStorage.getItem("auth-parent") ? (
    <Navigate to={urls.PARENT_DASHBOARD} />
  ) : localStorage.getItem("auth-tutor") ? (
    <Navigate to={urls.TUTOR_DASHBOARD} />
  ) : localStorage.getItem("auth-admin") ? (
    <Navigate to={urls.ALL_PARENTS} />
  ) : (
    <Box sx={{ m: 3 }}>
      <Header />
      <Heromain />
      <Features />
      <TuitionTypes />
      <Footer />
    </Box>
  );
};

export default LandingPage;
