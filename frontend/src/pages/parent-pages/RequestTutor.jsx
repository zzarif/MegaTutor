import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  Container,
  FormControl,
  InputLabel,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { btnStyles2 } from "../../styles/btnStyles2";
import { urls } from "../../constants/urls";
import { useNavigate } from "react-router-dom";
import { textFieldStyles } from "../../styles/textFieldStyles";
import { RequestPage } from "@mui/icons-material";

const RequestTutor = () => {
  const navigate = useNavigate();

  const [studentName, setStudentName] = useState("");
  const [studentGender, setStudentGender] = useState("");
  const [institute, setInstitute] = useState("");
  const [subjects, setSubjects] = useState("");
  const [level, setLevel] = useState("");
  const [medium, setMedium] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [daysPerWeek, setDaysPerWeek] = useState("");
  const [salary, setSalary] = useState("");
  const [details, setDetails] = useState("");

  const [loading, setLoading] = useState(false);
  const requestTutor = async () => {
    setLoading(true);
    const parentId = JSON.parse(localStorage.getItem("auth-parent")).uid;
    try {
      const url = new URL(import.meta.env.VITE_API_BASE_URL + "postNewJob");
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          parentId,
          jobData: {
            studentName,
            studentGender,
            institute,
            subjects,
            level,
            medium,
            category,
            location,
            daysPerWeek,
            salary,
            details,
          },
        }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        navigate("/" + urls.POSTED_JOBS);
      } else {
        const errorData = await response.json();
        alert(errorData.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  const validation = () => {
    if (
      studentName &&
      studentGender &&
      institute &&
      subjects &&
      level &&
      medium &&
      category &&
      location &&
      daysPerWeek &&
      salary &&
      details
    )
      requestTutor();
    else alert("Please fill up all the information.");
  };

  return (
    <Container maxWidth="sm">
      <Typography
        m={4}
        fontFamily={"Poppins"}
        variant="h4"
        align="center"
        gutterBottom
      >
        <b>Tutor Request Page</b>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Student Name"
            fullWidth
            sx={textFieldStyles}
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="student-gender-label">
              Select Student Gender
            </InputLabel>
            <Select
              sx={textFieldStyles}
              labelId="student-gender-label"
              id="student-gender-select"
              label="Select Student Gender"
              value={studentGender}
              onChange={(e) => setStudentGender(e.target.value)}
            >
              <MenuItem value="">Select Student Gender</MenuItem>
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Institute"
            fullWidth
            sx={textFieldStyles}
            value={institute}
            onChange={(e) => setInstitute(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="medium-label">Select Standard</InputLabel>
            <Select
              sx={textFieldStyles}
              labelId="Standard-label"
              id="Standard-select"
              label="Select Standard"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
            >
              <MenuItem value="">Select Standard</MenuItem>
              <MenuItem value="1">Standard 1</MenuItem>
              <MenuItem value="2">Standard 2</MenuItem>
              <MenuItem value="3">Standard 3</MenuItem>
              <MenuItem value="4">Standard 4</MenuItem>
              <MenuItem value="5">Standard 5</MenuItem>
              <MenuItem value="6">Standard 6</MenuItem>
              <MenuItem value="7">Standard 7</MenuItem>
              <MenuItem value="8">Standard 8</MenuItem>
              <MenuItem value="9">Standard 9</MenuItem>
              <MenuItem value="10">Standard 10</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Subjects"
            fullWidth
            sx={textFieldStyles}
            value={subjects}
            onChange={(e) => setSubjects(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="medium-label">Select Medium</InputLabel>
            <Select
              sx={textFieldStyles}
              labelId="medium-label"
              id="medium-select"
              label="Select Medium"
              value={medium}
              onChange={(e) => setMedium(e.target.value)}
            >
              <MenuItem value="">Select Medium</MenuItem>
              <MenuItem value="Bangla">Bangla</MenuItem>
              <MenuItem value="English">English</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="category-label">Select Category</InputLabel>
            <Select
              sx={textFieldStyles}
              labelId="category-label"
              id="category-select"
              label="Select Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <MenuItem value="">Select Category</MenuItem>
              <MenuItem value="One to One">One to One</MenuItem>
              <MenuItem value="One to Many">One to Many</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Address Details"
            multiline
            rows={4}
            fullWidth
            sx={textFieldStyles}
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl fullWidth>
            <InputLabel id="days-per-week-label">
              Select Days per Week
            </InputLabel>
            <Select
              sx={textFieldStyles}
              labelId="days-per-week-label"
              id="days-per-week-select"
              label="Select Days per Week"
              value={daysPerWeek}
              onChange={(e) => setDaysPerWeek(e.target.value)}
            >
              <MenuItem value="">Select Days per Week</MenuItem>
              <MenuItem value="2 days / week">2 days / week</MenuItem>
              <MenuItem value="3 days / week">3 days / week</MenuItem>
              <MenuItem value="4 days / week">4 days / week</MenuItem>
              <MenuItem value="5 days / week">5 days / week</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Salary"
            fullWidth
            sx={textFieldStyles}
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="More about your requirement"
            fullWidth
            multiline
            rows={4}
            sx={textFieldStyles}
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <LoadingButton
            loading={loading}
            startIcon={<RequestPage />}
            loadingPosition="start"
            sx={btnStyles2}
            onClick={validation}
            variant="contained"
            color="primary"
          >
            <b>Request Tutor</b>
          </LoadingButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RequestTutor;
