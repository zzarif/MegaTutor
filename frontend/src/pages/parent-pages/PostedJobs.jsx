import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  styled,
} from "@mui/material";

const GrayCard = styled(Card)({
  marginBottom: 20,
  background: "#f0f0f0",
});

const PostedJobs = () => {
  return (
    <Container maxWidth="sm">
      <Typography
        m={4}
        fontFamily={"Poppins"}
        variant="h4"
        align="center"
        gutterBottom
      >
        Posted Jobs
      </Typography>
      <GrayCard>
        <CardContent>
          <Typography variant="h6" component="h2">
            Md. Sameen Mahmud
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Chattogram Collegiate School and College
          </Typography>
          <Typography variant="body2" component="p">
            Standard 10 (Bangla Medium)
            <br />
            Location: Mirpur 10, Dhaka
            <br />
            <br />
            3 days / per week
            <br />
            Salary: 7000 tk
          </Typography>
        </CardContent>
      </GrayCard>
      

      <GrayCard>
        <CardContent>
          <Typography variant="h6" component="h2">
            Onamika Choudhury
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Holy Cross College
          </Typography>
          <Typography variant="body2" component="p">
            Standard 9 (Bangla Medium)
            <br />
            Location: Dhanmondi, Dhaka
            <br />
            <br />
            4 days / per week
            <br />
            Salary: 8000 tk
          </Typography>
        </CardContent>
      </GrayCard>

      <GrayCard>
        <CardContent>
          <Typography variant="h6" component="h2">
            Anower Khan
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            Dhaka College
          </Typography>
          <Typography variant="body2" component="p">
            Standard 11 (Bangla Medium)
            <br />
            Location: Lalmatia, Dhaka
            <br />
            <br />
            3 days / per week
            <br />
            Salary: 7500 tk
          </Typography>
        </CardContent>
      </GrayCard>

    </Container>
  );
};

export default PostedJobs;
