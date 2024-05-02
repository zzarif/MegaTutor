import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Container,
  styled,
  Divider,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { btnStyles3 } from "../../styles/btnStyles3";

const CustomCard = styled(Card)({
  marginBottom: 20,
  background: "white",
});

const AppliedTutors = () => {
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
        Applied Tutors
      </Typography>
      <CustomCard>
        <CardContent>
          <Typography variant="h6" component="h2">
            Job: Md. Sameen Mahmud
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
            <br />
            <br />
          </Typography>
          <Divider />
          <br />
          <Typography variant="h6" component="h2">
            Applicant: Md. Sakib Rahman
          </Typography>
          <Typography color="textSecondary" gutterBottom>
            University of Dhaka (B.Sc. Hons)
          </Typography>
          <Typography variant="body2" component="p">
            HSC Grade: 5.00, SSC Grade: 5.00
          </Typography>
        </CardContent>
        <LoadingButton
          loading={loading}
          loadingPosition="start"
          sx={btnStyles3}
          onClick={requestTutor}
          variant="contained"
          color="primary"
        >
          Confirm Tutor
        </LoadingButton>
      </CustomCard>
    </Container>
  );
};

export default AppliedTutors;
