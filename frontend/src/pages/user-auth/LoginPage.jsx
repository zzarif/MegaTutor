import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { urls } from "../../constants/urls";
import { LoadingButton } from "@mui/lab";
import Header from "../../components/header/Header";
import SelectRole from "../../components/select-role/SelectRole";
import { btnStyles2 } from "../../styles/btnStyles2";

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("Parent or Student");

  const signin = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
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
          Choose Yourself to Sign In
        </Typography>
        <SelectRole role={role} setRole={setRole} />
        <form>
          <TextField label="Email" fullWidth margin="normal" />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
          />
          <Typography mt={2} mb={2} fontFamily={"Poppins"}>
            Forgot Password?
          </Typography>
          
        <LoadingButton
          loading={loading}
          loadingPosition="start"
          sx={btnStyles2}
          onClick={signin}
          variant="contained"
          color="primary"
        >
          Sign In
        </LoadingButton>
        </form>
      </Container>
    </Box>
  );
}

export default LoginPage;
