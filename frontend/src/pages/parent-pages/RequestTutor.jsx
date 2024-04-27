import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { btnStyles2 } from "../../styles/btnStyles2";

const RequestTutor = () => {
  const [loading, setLoading] = useState(false);
  const requestTutor = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };
  
  return (
    <Container maxWidth="sm">
      <Typography m={4} fontFamily={"Poppins"} variant="h4" align="center" gutterBottom>
        Tutor Request Page
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField label="Tuition Type" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Institute Name" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Select City *" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Number of Students" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Select Location" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Days / Week" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Category" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Tutoring Time" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Class / Course" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Hire Date" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Required Subjects" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Salary" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select fullWidth defaultValue="Select Student Gender">
            <MenuItem value="Select Student Gender"><em>Select Student Gender</em></MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Any">Any</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Institute Name" fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Select fullWidth defaultValue="Select Tutor Gender Preference">
            <MenuItem value="Select Tutor Gender Preference"><em>Select Tutor Gender Preference</em></MenuItem>
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
            <MenuItem value="Any">Any</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField label="Student Result" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Address Details" multiline rows={4} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="More about your requirement"
            multiline
            rows={4}
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <LoadingButton
            loading={loading}
            loadingPosition="start"
            sx={btnStyles2}
            onClick={requestTutor}
            variant="contained"
            color="primary"
          >
            Request Tutor
          </LoadingButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RequestTutor;
