import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { School } from "@mui/icons-material";
import { btnStyles } from "../../styles/btnStyles";

function Header() {
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      mb={4}
    >
      <Typography
        fontFamily={"Poppins"}
        fontStyle={"bold"}
        color="Purple"
        variant="h5"
      >
        <School sx={{ mb: -0.4, mr: 0.1 }} />
        MegaTutor
      </Typography>
      <Box>
        <Button
          sx={{ mr: 2, fontFamily: "Poppins", textTransform: "none", color: "#6200EE" }}
          variant="text"
        >
          Login
        </Button>
        <Button
          sx={btnStyles}
          variant="contained"
          color="primary"
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}

export default Header;
