import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import { Person } from "@mui/icons-material";

function TuitionTypes() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      mb={4}
    >
      <Typography m={1} fontFamily={"Poppins"} variant="h5">
        Tuition Types
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card>
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
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
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
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
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
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
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
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default TuitionTypes;
