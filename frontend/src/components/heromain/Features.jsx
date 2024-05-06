import React from "react";
import { Box, Typography, Card, Grid } from "@mui/material";
import { styled } from "@mui/system";

const PurpleCard = styled(Card)({
  marginBottom: 10,
  borderRadius: 14,
  boxShadow: "5px 8px #4A148C",
  background: "linear-gradient(45deg, #4A148C 10%, #7B1FA2 60%, #BA68C8 100%)",
  color: "white",
});

function Features() {
  return (
    <Box mb={4} mt={4}>
      <PurpleCard>
        <Grid container p={2} spacing={2}>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography fontFamily={"Poppins"} variant="h4">
                153
              </Typography>
              <Typography fontFamily={"Poppins"}>ACTIVE TUTORS</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography fontFamily={"Poppins"} variant="h4">
                254
              </Typography>
              <Typography fontFamily={"Poppins"}>LIVE TUITION JOBS</Typography>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Box display="flex" flexDirection="column" alignItems="center">
              <Typography fontFamily={"Poppins"} variant="h4">
                4.9/5
              </Typography>
              <Typography fontFamily={"Poppins"}>
                AVERAGE TUTOR RATING
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </PurpleCard>
    </Box>
  );
}

export default Features;
