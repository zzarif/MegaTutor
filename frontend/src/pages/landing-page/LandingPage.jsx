import React from "react";
import { Box } from "@mui/material";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Features from "../../components/heromain/Features";
import Heromain from "../../components/heromain/Heromain";
import TuitionTypes from "../../components/heromain/TuitionTypes";

const LandingPage = () => {
  return (
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
