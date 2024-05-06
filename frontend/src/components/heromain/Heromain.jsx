import React from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button, Grid, Container } from "@mui/material";
import { btnStyles } from "../../styles/btnStyles";
import { urls } from "../../constants/urls";
import styles from "./hero.module.css";

function Heromain() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="md">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box mr={2}>
            <img
              className={styles.hero_image}
              src="/hero_image.png"
              alt="Tutor"
            />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box textAlign="center">
            <Box m={2}>
              <Typography fontFamily={"Poppins"} variant="h2">
                <b>Hire the Right Tutor Today</b>
              </Typography>
            </Box>
            <Button
              sx={btnStyles}
              variant="contained"
              color="primary"
              onClick={() => navigate("/" + urls.LOGIN)}
            >
              Hire a tutor
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Heromain;
