import React, { useState } from "react";
import {
  Box,
  Grid,
  Typography,
  Container,
  Card,
  CardContent,
  styled,
} from "@mui/material";

const GrayCard = styled(Card)({
  background: "#f0f0f0",
});

const ParentDashboard = () => {
  const [loading, setLoading] = useState(false);
  const requestTutor = () => {
    setLoading(true);
    setTimeout(() => {
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
        Parent Dashboard
      </Typography>
      <Box sx={{ backgroundColor: "white", padding: 2 }}>
        <Card>
          <CardContent>
            <Typography variant="body1">
              Our "Tutor of the Month, May 2023" is Mustafa Rafid Nibir (Tutor
              ID: 96177) and our "Guardian of the Month, May 2023" is Ziaul
              Hasan (Job ID: 104518). Heartiest congratulations to both of them;
              we're glad to work with them.
            </Typography>
          </CardContent>
        </Card>

        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          <Grid item>
            <GrayCard>
              <CardContent>
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Typography variant="body2">00</Typography>
                  <Typography variant="body2">Pending Job</Typography>
                </Box>
              </CardContent>
            </GrayCard>
          </Grid>
          <Grid item>
            <GrayCard>
              <CardContent>
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Typography variant="body2">00</Typography>
                  <Typography variant="body2">Live Job</Typography>
                </Box>
              </CardContent>
            </GrayCard>
          </Grid>
          <Grid item>
            <GrayCard>
              <CardContent>
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Typography variant="body2">00</Typography>
                  <Typography variant="body2">Appointed Job</Typography>
                </Box>
              </CardContent>
            </GrayCard>
          </Grid>
          <Grid item>
            <GrayCard>
              <CardContent>
                <Box
                  sx={{
                    textAlign: "center",
                  }}
                >
                  <Typography variant="body2">00</Typography>
                  <Typography variant="body2">Confirmed Job</Typography>
                </Box>
              </CardContent>
            </GrayCard>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default ParentDashboard;
