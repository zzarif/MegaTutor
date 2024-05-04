import React, { useEffect, useState } from "react";
import {
  CardContent,
  Typography,
  Container,
  Box,
  Avatar,
  Divider,
} from "@mui/material";
import CustomCard from "../../styles/customCard";
import { Check, EventNoteRounded, School, Verified } from "@mui/icons-material";
import FacebookCircularProgress from "../../components/fbspinner/FacebookCircularProgress";
import { centered } from "../../styles/centered";
import { LoadingButton } from "@mui/lab";
import { btnStyles3 } from "../../styles/btnStyles3";
import { urls } from "../../constants/urls";
import { useNavigate } from "react-router-dom";

const AppliedTutors = () => {
  const navigate = useNavigate();
  const [jobList, setJobList] = useState([]);

  const [loading, setLoading] = useState(false);
  const fetchAppliedTutors = async () => {
    setLoading(true);
    const parentId = JSON.parse(localStorage.getItem("auth-parent")).uid;
    try {
      const url = new URL(
        import.meta.env.VITE_API_BASE_URL + "getAppliedTutors"
      );
      url.searchParams.append("parentId", parentId);
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        const data = await response.json();
        setJobList(data);
      } else {
        const errorData = await response.json();
        alert(errorData.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAppliedTutors();
  }, []);

  const [confirmLoadingStates, setConfirmLoadingStates] = useState([]);
  const confirmJob = async (jobId, applicationId, idx) => {
    // loading animation on button
    const updatedConfirmLoadingStates = [...confirmLoadingStates];
    updatedConfirmLoadingStates[idx] = true;
    setConfirmLoadingStates(updatedConfirmLoadingStates);
    try {
      const url = new URL(import.meta.env.VITE_API_BASE_URL + "confirmJob");
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ applicationId, jobId }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        navigate("/" + urls.CONFIRMED_TUTORS);
      } else {
        const errorData = await response.json();
        alert(errorData.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error);
    } finally {
      // revert button states to normal
      updatedConfirmLoadingStates[idx] = false;
      setConfirmLoadingStates(updatedConfirmLoadingStates);
    }
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
        <b>Applied Tutors</b>
      </Typography>
      {loading ? (
        <Box sx={centered}>
          <FacebookCircularProgress />
        </Box>
      ) : jobList.length === 0 ? (
        <Box sx={centered}>
          <EventNoteRounded sx={{ color: "gray" }} />
          <Typography variant="body2" component="p" fontFamily="Poppins">
            Nothing to show
          </Typography>
        </Box>
      ) : (
        jobList.map((item, idx) => (
          <Box key={idx}>
            <CustomCard>
              <CardContent>
                <Box m={1.5} display="flex" alignItems="center" gap={1}>
                  <Avatar />
                  <Box>
                    <Box display="flex" alignItems="center" gap={1}>
                      <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        fontFamily={"Poppins"}
                      >
                        <b>{item.name}</b>
                      </Typography>
                      {item.verified && <Verified sx={{ color: "green" }} />}
                    </Box>
                    <Typography mt={-0.5} color="textSecondary">
                      {item.email}
                    </Typography>
                  </Box>
                </Box>

                <Box m={1.5} display="flex" alignItems="center" gap={1}>
                  <School sx={{ color: "gray" }} />
                  <Typography
                    variant="body2"
                    component="p"
                    fontFamily={"Poppins"}
                  >
                    <b>
                      HSC Result: GPA{" "}
                      {item.hscGPA ? item.hscGPA : "Not Provided"}
                    </b>{" "}
                    - Regi No: {item.hscRegiNo} - Year: {item.hscYear}
                  </Typography>
                </Box>
                <Box m={1.5} display="flex" alignItems="center" gap={1}>
                  <School sx={{ color: "gray" }} />
                  <Typography
                    variant="body2"
                    component="p"
                    fontFamily={"Poppins"}
                  >
                    <b>
                      SSC Result: GPA{" "}
                      {item.sscGPA ? item.sscGPA : "Not Provided"}
                    </b>{" "}
                    - Regi No: {item.sscRegiNo} - Year: {item.sscYear}
                  </Typography>
                </Box>
                <Divider />
                <Box m={1.5} display="flex" justifyContent="space-between">
                  <Box display="flex" alignItems="center" gap={1}>
                    <Box>
                      <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        fontFamily={"Poppins"}
                      >
                        Applied Job: {item.studentName}
                      </Typography>
                      <Typography mt={-0.5} color="textSecondary">
                        {item.institute}
                      </Typography>
                    </Box>
                  </Box>
                  <Typography variant="h4" component="p" fontFamily={"Poppins"}>
                    ৳<b>{item.salary}</b>
                  </Typography>
                </Box>

                <Box ml={1.5} display="flex" alignItems="center" gap={1}>
                  <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                    fontFamily={"Poppins"}
                  >
                    {item.subjects} - Standard {item.level} ({item.medium}{" "}
                    Medium)
                    <br />
                    {item.location} ({item.daysPerWeek})
                  </Typography>
                </Box>
              </CardContent>
              <LoadingButton
                loading={confirmLoadingStates[idx]}
                startIcon={<Check />}
                loadingPosition="start"
                sx={btnStyles3}
                onClick={() => confirmJob(item.jobId, item.applicationId, idx)}
                variant="contained"
                color="primary"
              >
                <b>Confirm Job</b>
              </LoadingButton>
            </CustomCard>
          </Box>
        ))
      )}
    </Container>
  );
};

export default AppliedTutors;
