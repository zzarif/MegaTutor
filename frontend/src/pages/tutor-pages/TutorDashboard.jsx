import React from "react";
import { Box, Grid, Typography, Container, CardContent } from "@mui/material";
import CustomCard from "../../styles/customCard";

const TutorDashboard = () => {
  return (
    <Container maxWidth="sm">
      <Typography
        m={4}
        fontFamily={"Poppins"}
        variant="h4"
        align="center"
        gutterBottom
      >
        <b>Tutor Dashboard</b>
      </Typography>
      <Box>
        <CustomCard>
          <CardContent>
            <Typography variant="body1" fontFamily="Poppins">
              <b>Notice Board</b>
              <br />
              Our "Tutor of the Month, May 2023" is Mustafa Rafid Nibir (Tutor
              ID: 96177) and our "Guardian of the Month, May 2023" is Ziaul
              Hasan (Job ID: 104518). Heartiest congratulations to both of them;
              we're glad to work with them.
            </Typography>
          </CardContent>
        </CustomCard>

        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item>
            <CustomCard>
              <CardContent>
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h4" fontFamily="Poppins">
                    00
                  </Typography>
                  <Typography variant="body2" fontFamily="Poppins">
                    Pending Job
                  </Typography>
                </Box>
              </CardContent>
            </CustomCard>
          </Grid>
          <Grid item>
            <CustomCard>
              <CardContent>
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h4" fontFamily="Poppins">
                    00
                  </Typography>
                  <Typography
                    variant="body2"
                    fontFamily="Poppins"
                    ml={1.2}
                    mr={1.2}
                  >
                    Live Job
                  </Typography>
                </Box>
              </CardContent>
            </CustomCard>
          </Grid>
          <Grid item>
            <CustomCard>
              <CardContent>
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h4" fontFamily="Poppins">
                    00
                  </Typography>
                  <Typography variant="body2" fontFamily="Poppins">
                    Appointed Job
                  </Typography>
                </Box>
              </CardContent>
            </CustomCard>
          </Grid>
          <Grid item>
            <CustomCard>
              <CardContent>
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Typography variant="h4" fontFamily="Poppins">
                    00
                  </Typography>
                  <Typography variant="body2" fontFamily="Poppins">
                    Confirmed Job
                  </Typography>
                </Box>
              </CardContent>
            </CustomCard>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default TutorDashboard;
