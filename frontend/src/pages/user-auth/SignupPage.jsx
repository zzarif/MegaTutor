import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { urls } from "../../constants/urls";
import { LoadingButton } from "@mui/lab";
import Header from "../../components/header/Header";
import SelectRole from "../../components/select-role/SelectRole";
import { btnStyles2 } from "../../styles/btnStyles2";

function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("Parent or Student");

  const signup = () => {
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
          Choose Yourself to Sign Up
        </Typography>
        <SelectRole role={role} setRole={setRole} />
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Phone" fullWidth margin="normal" />
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Password" type="password" fullWidth margin="normal" />
        <TextField
          label="Confirm Password"
          type="password"
          fullWidth
          margin="normal"
        />
        <FormControlLabel
          control={<Checkbox />}
          label="I agree to the Terms of Use and Privacy Policy"
        />
        <LoadingButton
          loading={loading}
          loadingPosition="start"
          sx={btnStyles2}
          onClick={signup}
          variant="contained"
          color="primary"
        >
          Sign Up
        </LoadingButton>
      </Container>
    </Box>
  );
}

export default SignupPage;
