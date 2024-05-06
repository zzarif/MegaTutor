import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import { School } from "@mui/icons-material";
import { btnStyles } from "../../styles/btnStyles";
import { urls } from "../../constants/urls";

function Header() {
  const navigate = useNavigate();
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
        <b>MegaTutor</b>
      </Typography>
      <Box>
        <Button
          sx={{
            mr: 2,
            fontFamily: "Poppins",
            textTransform: "none",
            color: "#6200EE",
          }}
          variant="text"
          onClick={() => navigate("/" + urls.LOGIN)}
        >
          Login
        </Button>
        <Button
          sx={btnStyles}
          variant="contained"
          color="primary"
          onClick={() => navigate("/" + urls.SIGNUP)}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}

export default Header;
