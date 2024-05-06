import React from "react";
import { Box, Typography, Grid, CardContent } from "@mui/material";
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
              <Typography fontFamily={"Poppins"} variant="h6">
                <Person sx={{ mb: -0.4, mr: 0.1 }} />
                Home Tutoring
              </Typography>
              <Typography fontFamily={"Poppins"}>
                Home tutoring allows students to learn various subjects in their
                own home.
              </Typography>
            </CardContent>
          </CustomCard2>
        </Grid>
        <Grid item xs={6}>
          <CustomCard2>
            <CardContent>
              <Typography fontFamily={"Poppins"} variant="h6">
                <Person sx={{ mb: -0.4, mr: 0.1 }} />
                Group Tutoring
              </Typography>
              <Typography fontFamily={"Poppins"}>
                Group tutoring allows students to learn together and share
                problems at an affordable price.
              </Typography>
            </CardContent>
          </CustomCard2>
        </Grid>
        <Grid item xs={6}>
          <CustomCard2>
            <CardContent>
              <Typography fontFamily={"Poppins"} variant="h6">
                <Person sx={{ mb: -0.4, mr: 0.1 }} />
                Online Tutoring
              </Typography>
              <Typography fontFamily={"Poppins"}>
                Group tutoring allows students to learn together and share
                problems at an affordable price.
              </Typography>
            </CardContent>
          </CustomCard2>
        </Grid>
        <Grid item xs={6}>
          <CustomCard2>
            <CardContent>
              <Typography fontFamily={"Poppins"} variant="h6">
                <Person sx={{ mb: -0.4, mr: 0.1 }} />
                Package Tutoring
              </Typography>
              <Typography fontFamily={"Poppins"}>
                Group tutoring allows students to learn together and share
                problems at an affordable price.
              </Typography>
            </CardContent>
          </CustomCard2>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TuitionTypes;
