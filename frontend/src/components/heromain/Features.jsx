import React from "react";
import { Box, Typography, Card, Grid } from "@mui/material";
import { styled } from "@mui/system";

const PurpleCard = styled(Card)({
  background: "linear-gradient(45deg, #4A148C 10%, #7B1FA2 60%, #BA68C8 100%)",
  color: "white",
});

function Features() {
  return (
    <Box mb={4}>
      <PurpleCard>
        <Grid container p={2} spacing={2}>
          <Grid item xs={4}>
            <Typography fontFamily={"Poppins"} variant="h4">
              153
            </Typography>
            <Typography fontFamily={"Poppins"}>ACTIVE TUTORS</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography fontFamily={"Poppins"} variant="h4">
              254
            </Typography>
            <Typography fontFamily={"Poppins"}>LIVE TUITION JOBS</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography fontFamily={"Poppins"} variant="h4">
              4.9/5
            </Typography>
            <Typography fontFamily={"Poppins"}>AVERAGE TUTOR RATING</Typography>
          </Grid>
        </Grid>
      </PurpleCard>
    </Box>
  );
}

export default Features;
