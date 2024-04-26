import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { btnStyles } from "../../styles/btnStyles";

function Heromain() {
  return (
    <Box display="flex" alignItems="center" justifyContent="center" mb={4}>
      <Box mr={2}>
        <img
          width={400}
          src="https://img.freepik.com/free-vector/girl-reading-books-white-background_1308-95869.jpg"
          alt="Tutor"
        />
      </Box>
      <Box textAlign="center">
        <Box m={2}>
          <Typography fontFamily={"Poppins"} variant="h2">
            Hire the Right
          </Typography>
          <Typography fontFamily={"Poppins"} variant="h2">
            Tutor Today
          </Typography>
        </Box>
        <Button sx={btnStyles} variant="contained" color="primary">
          Hire a tutor
        </Button>
      </Box>
    </Box>
  );
}

export default Heromain;
