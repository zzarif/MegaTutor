import React, { useState } from "react";
import { Container, Typography, TextField, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { urls } from "../../constants/urls";
import { LoadingButton } from "@mui/lab";
import Header from "../../components/header/Header";
import SelectRole from "../../components/select-role/SelectRole";
import { btnStyles2 } from "../../styles/btnStyles2";

function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("Parent or Student");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validation = () => {
    if (
      !String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    )
      alert("Invalid email format.");
    else signin();
  };

  const signin = async () => {
    setLoading(true);
    try {
      const url = new URL(import.meta.env.VITE_API_BASE_URL + "login");
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User logged in successfully", data.user);
        // Handle success, e.g., redirect to a success page or update the UI
        if (data.role === "Parent or Student") {
          localStorage.setItem("auth-parent", JSON.stringify(data.user));
          navigate("/" + urls.PARENT_DASHBOARD);
        } else {
          localStorage.setItem("auth-tutor", JSON.stringify(data.user));
          navigate("/" + urls.TUTOR_DASHBOARD);
        }
      } else {
        const errorData = await response.json();
        console.error("Error logging in user:", errorData.error);
        // Handle error, e.g., display an error message to the user
        alert(errorData.error);
      }
    } catch (error) {
      console.error("Error logging in user:", error);
      // Handle network or other errors
      alert(error);
    } finally {
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
          Choose Yourself to Sign In
        </Typography>
        <SelectRole role={role} setRole={setRole} />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
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
          onClick={validation}
          variant="contained"
          color="primary"
        >
          Sign In
        </LoadingButton>
      </Container>
    </Box>
  );
}

export default LoginPage;
