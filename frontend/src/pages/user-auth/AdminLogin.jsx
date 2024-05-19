import React, { useState } from "react";
import { Container, Typography, TextField, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { urls } from "../../constants/urls";
import { LoadingButton } from "@mui/lab";
import Header from "../../components/header/Header";
import { btnStyles2 } from "../../styles/btnStyles2";

function AdminLogin() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [key, setKey] = useState("");

  const signin = () => {
    setLoading(true);
    if (key === "admin123")
      setTimeout(() => {
        localStorage.setItem("auth-admin", "auth-admin");
        navigate("/" + urls.ALL_PARENTS);
      }, 1500);
    else {
      alert("Not Authorized.");
      setLoading(false);
    }
  };

  return (
    <Box sx={{ m: 3 }}>
      <Header />
      <Container maxWidth="sm">
        <Typography
          mb={4}
          fontFamily={"Poppins"}
          variant="h5"
          align="center"
          gutterBottom
        >
          <b>Admin Login</b>
        </Typography>
        <TextField
          label="Admin Key"
          value={key}
          onChange={(e) => setKey(e.target.value)}
          type="password"
          fullWidth
          margin="normal"
        />
        <LoadingButton
          loading={loading}
          loadingPosition="start"
          sx={btnStyles2}
          onClick={signin}
          variant="contained"
          color="primary"
        >
          Sign In as Admin
        </LoadingButton>
      </Container>
    </Box>
  );
}

export default AdminLogin;
