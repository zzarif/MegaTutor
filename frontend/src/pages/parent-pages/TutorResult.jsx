import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  Grid,
  Typography,
  Container,
  Box,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { btnStyles2 } from "../../styles/btnStyles2";

const TutorResult = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const checkResult = () => {
    setLoading(true);
    setTimeout(() => {
      setResult("GPA 5.00");
      setLoading(false);
    }, 1500);
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
        Check Tutor Result
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Select fullWidth defaultValue="Select Examination">
            <MenuItem value="Select Examination">
              <em>Select Examination</em>
            </MenuItem>
            <MenuItem value="Male">HSC</MenuItem>
            <MenuItem value="Male">SSC</MenuItem>
            <MenuItem value="Male">JSC</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Select fullWidth defaultValue="Select Year">
            <MenuItem value="Select Year">
              <em>Select Year</em>
            </MenuItem>
            <MenuItem value="Male">2020</MenuItem>
            <MenuItem value="Male">2021</MenuItem>
            <MenuItem value="Male">2022</MenuItem>
            <MenuItem value="Male">2023</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <Select fullWidth defaultValue="Select Year">
            <MenuItem value="Select Year">
              <em>Select Board</em>
            </MenuItem>
            <MenuItem value="Male">Dhaka</MenuItem>
            <MenuItem value="Male">Chattogram</MenuItem>
            <MenuItem value="Male">Khulna</MenuItem>
            <MenuItem value="Male">Rajshahi</MenuItem>
            <MenuItem value="Male">Sylhet</MenuItem>
            <MenuItem value="Male">Barisal</MenuItem>
            <MenuItem value="Male">Cumilla</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Roll" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Reg. No" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <TextField label="Solve: 4+3" fullWidth />
        </Grid>
        {result && (
          <Grid item xs={12}>
            <Box p={3}>
              <Typography fontFamily={"Poppins"} variant="h4" align="center">
                Tutor Result: {result}
              </Typography>
            </Box>
          </Grid>
        )}
        <Grid item xs={12}>
          <LoadingButton
            loading={loading}
            loadingPosition="start"
            sx={btnStyles2}
            onClick={checkResult}
            variant="contained"
            color="primary"
          >
            Check Result
          </LoadingButton>
        </Grid>
      </Grid>
    </Container>
  );
};

export default TutorResult;
