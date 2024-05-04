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
import {
  Check,
  EventNoteRounded,
  LocationOnRounded,
  School,
} from "@mui/icons-material";
import FacebookCircularProgress from "../../components/fbspinner/FacebookCircularProgress";
import { centered } from "../../styles/centered";
import { LoadingButton } from "@mui/lab";
import { btnStyles3 } from "../../styles/btnStyles3";
import { urls } from "../../constants/urls";
import { useNavigate } from "react-router-dom";

const AvailableJobs = () => {
  const navigate = useNavigate();
  const [jobList, setJobList] = useState([]);

  const [loading, setLoading] = useState(false);
  const fetchAvailableJobs = async () => {
    setLoading(true);
    const tutorId = JSON.parse(localStorage.getItem("auth-tutor")).uid;
    try {
      const url = new URL(
        import.meta.env.VITE_API_BASE_URL + "getAvailableJobs"
      );
      url.searchParams.append("tutorId", tutorId);
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
    fetchAvailableJobs();
  }, []);

  const [applyLoadingStates, setApplyLoadingStates] = useState([]);
  const applyForJob = async (jobId, idx) => {
    // loading animation on button
    const updatedApplyLoadingStates = [...applyLoadingStates];
    updatedApplyLoadingStates[idx] = true;
    setApplyLoadingStates(updatedApplyLoadingStates);

    // get logged in tutor id
    const tutorId = JSON.parse(localStorage.getItem("auth-tutor")).uid;
    try {
      const url = new URL(import.meta.env.VITE_API_BASE_URL + "applyForJob");
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tutorId, jobId }),
      });

      if (response.ok) {
        const data = await response.json();
        alert(data.message);
        navigate("/" + urls.MY_APPLICATIONS);
      } else {
        const errorData = await response.json();
        alert(errorData.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert(error);
    } finally {
      // revert button states to normal
      updatedApplyLoadingStates[idx] = false;
      setApplyLoadingStates(updatedApplyLoadingStates);
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
        <b>Available Jobs</b>
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
                <Box m={1.5} display="flex" justifyContent="space-between">
                  <Box display="flex" alignItems="center" gap={1}>
                    <Avatar />
                    <Box>
                      <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        fontFamily={"Poppins"}
                      >
                        <b>{item.studentName}</b>
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

                <Divider />
                <Box m={2} display="flex" alignItems="center" gap={1}>
                  <School sx={{ color: "gray" }} />
                  <Typography
                    variant="body2"
                    component="p"
                    fontFamily={"Poppins"}
                  >
                    <b>{item.subjects}</b> - Standard {item.level} (
                    {item.medium} Medium)
                  </Typography>
                </Box>

                <Box m={2} display="flex" alignItems="center" gap={1}>
                  <LocationOnRounded sx={{ color: "gray" }} />
                  <Typography
                    variant="body2"
                    component="p"
                    fontFamily={"Poppins"}
                  >
                    <b>{item.location}</b> ({item.daysPerWeek})
                  </Typography>
                </Box>
                <Divider />
                <Box mt={2} ml={2} display="flex" gap={1}>
                  <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                    fontFamily={"Poppins"}
                  >
                    {Date(item.createdAt)}
                  </Typography>
                </Box>
                <Box ml={2} display="flex" gap={1}>
                  <Typography
                    variant="body2"
                    component="p"
                    color="textSecondary"
                    fontFamily={"Poppins"}
                  >
                    Note: {item.details}
                  </Typography>
                </Box>
              </CardContent>
              <LoadingButton
                loading={applyLoadingStates[idx]}
                startIcon={<Check />}
                loadingPosition="start"
                sx={btnStyles3}
                onClick={() => applyForJob(item.jobId, idx)}
                variant="contained"
                color="primary"
              >
                <b>Apply For Job</b>
              </LoadingButton>
            </CustomCard>
          </Box>
        ))
      )}
    </Container>
  );
};

export default AvailableJobs;
