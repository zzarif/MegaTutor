import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Checkbox,
  FormControlLabel,
  Box,
  Divider,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { urls } from "../../constants/urls";
import { LoadingButton } from "@mui/lab";
import Header from "../../components/header/Header";
import SelectRole from "../../components/select-role/SelectRole";
import { btnStyles2 } from "../../styles/btnStyles2";

function SignupPage() {
  const navigate = useNavigate();
  const [role, setRole] = useState("Parent or Student");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  const [result, setResult] = useState({
    hscRegiNo:"",hscYear:"",hscGPA:"",
    sscRegiNo:"",sscYear:"",sscGPA:""
  });
  const handleResultChange = e => {
    const { name, value } = e.target;
    setResult(prevState => ({
        ...prevState,
        [name]: value
    }));
};

  const [checked, setChecked] = useState(false);

  const [loading, setLoading] = useState(false);

  const validation = () => {
    if (checked) {
      if (password !== confPassword) alert("Passwords do not match.");
      else if (
        !String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      )
        alert("Invalid email format.");
      else if (name && phone && email && confPassword) register();
      else alert("Please complete the form.");
    } else alert("You must accept Terms and Conditions to proceed.");
  };

  const register = async () => {
    setLoading(true);
    try {
      const url = new URL(import.meta.env.VITE_API_BASE_URL + "register");
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, email, password, role, result }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("User registered successfully:", data.user);
        // Handle email verification
        alert("Please verify your email.");
        navigate("/" + urls.LOGIN);
        // if (role === "Parent or Student") {
        //   localStorage.setItem("auth-parent", JSON.stringify(data.user));
        //   navigate("/" + urls.LOGIN);
        // } else {
        //   localStorage.setItem("auth-tutor", JSON.stringify(data.user));
        //   navigate("/" + urls.TUTOR_DASHBOARD);
        // }
      } else {
        const errorData = await response.json();
        console.error("Error registering user:", errorData.error);
        // Handle error, e.g., display an error message to the user
        alert(errorData.error + "(Try another email or use stronger passwords)");
      }
    } catch (error) {
      console.error("Error registering user:", error);
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
          Choose Yourself to Sign Up
        </Typography>
        <SelectRole role={role} setRole={setRole} />
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          fullWidth
          margin="normal"
        />
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
        <TextField
          label="Confirm Password"
          type="password"
          value={confPassword}
          onChange={(e) => setConfPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        {role === "Tutor" && (
          <>
            <Typography
              mt={3}
              ml={1}
              fontFamily={"Poppins"}
            >
              Academic Information (HSC)
            </Typography>
            <TextField
              name="hscRegiNo"
              label="Registration No."
              value={result.hscRegiNo}
              onChange={handleResultChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="hscYear"
              label="Year"
              type="number"
              value={result.hscYear}
              onChange={handleResultChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="hscGPA"
              label="GPA"
              type="decimal"
              value={result.hscGPA}
              onChange={handleResultChange}
              fullWidth
              margin="normal"
            />
            <Typography
              mt={3}
              ml={1}
              fontFamily={"Poppins"}
            >
              Academic Information (SSC)
            </Typography>
            <TextField
              name="sscRegiNo"
              label="Registration No."
              value={result.sscRegiNo}
              onChange={handleResultChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="sscYear"
              label="Year"
              type="number"
              value={result.sscYear}
              onChange={handleResultChange}
              fullWidth
              margin="normal"
            />
            <TextField
              name="sscGPA"
              label="GPA"
              type="decimal"
              value={result.sscGPA}
              onChange={handleResultChange}
              fullWidth
              margin="normal"
            />
          </>
        )}
        <FormControlLabel
          control={<Checkbox />}
          checked={checked}
          onChange={(e) => setChecked(!checked)}
          label="I agree to the Terms of Use and Privacy Policy"
        />
        <LoadingButton
          loading={loading}
          loadingPosition="start"
          sx={btnStyles2}
          onClick={validation}
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
