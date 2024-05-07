import React from "react";
import { Box, Typography, Grid, CardContent, Avatar } from "@mui/material";
import { Person } from "@mui/icons-material";
import CustomCard2 from "../../styles/customCard2";

function TuitionTypes() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mb={4}
    >
      <Typography m={2} fontFamily={"Poppins"} variant="h5">
        <b>Tuition Types</b>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <CustomCard2>
            <CardContent>
              <Box display="flex" alignItems="center" gap={1}>
                <Avatar />
                <Box>
                  <Typography fontFamily={"Poppins"} variant="h6">
                    <b>Home Tutoring</b>
                  </Typography>
                  <Typography color="textSecondary" fontFamily={"Poppins"}>
                    Home tutoring allows students to learn various subjects in
                    their own home.
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </CustomCard2>
        </Grid>
        <Grid item xs={6}>
          <CustomCard2>
            <CardContent>
              <Box display="flex" alignItems="center" gap={1}>
                <Avatar />
                <Box>
                  <Typography fontFamily={"Poppins"} variant="h6">
                    <b>Group Tutoring</b>
                  </Typography>
                  <Typography color="textSecondary" fontFamily={"Poppins"}>
                    Group tutoring allows students to learn together and share
                    problems at an affordable price.
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </CustomCard2>
        </Grid>
        <Grid item xs={6}>
          <CustomCard2>
            <CardContent>
              <Box display="flex" alignItems="center" gap={1}>
                <Avatar />
                <Box>
                  <Typography fontFamily={"Poppins"} variant="h6">
                    <b>Online Tutoring</b>
                  </Typography>
                  <Typography color="textSecondary" fontFamily={"Poppins"}>
                    Find the best tutors from anywhere and take online classes
                    by tools such as Google Meet, Skype and Zoom.
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </CustomCard2>
        </Grid>
        <Grid item xs={6}>
          <CustomCard2>
            <CardContent>
              <Box display="flex" alignItems="center" gap={1}>
                <Avatar />
                <Box>
                  <Typography fontFamily={"Poppins"} variant="h6">
                    <b>Package Tutoring</b>
                  </Typography>
                  <Typography color="textSecondary" fontFamily={"Poppins"}>
                    Package Tutoring helps a student to complete their studies
                    within a specific time frame.
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </CustomCard2>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TuitionTypes;
