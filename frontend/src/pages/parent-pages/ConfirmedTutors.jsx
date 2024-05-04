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
import { EventNoteRounded, School, Verified } from "@mui/icons-material";
import FacebookCircularProgress from "../../components/fbspinner/FacebookCircularProgress";
import { centered } from "../../styles/centered";

const ConfirmedTutors = () => {
  const [jobList, setJobList] = useState([]);

  const [loading, setLoading] = useState(false);
  const fetchConfirmedTutors = async () => {
    setLoading(true);
    const parentId = JSON.parse(localStorage.getItem("auth-parent")).uid;
    try {
      const url = new URL(
        import.meta.env.VITE_API_BASE_URL + "getConfirmedTutors"
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
    fetchConfirmedTutors();
  }, []);

  return (
    <Container maxWidth="sm">
      <Typography
        m={4}
        fontFamily={"Poppins"}
        variant="h4"
        align="center"
        gutterBottom
      >
        <b>Confirmed Tutors</b>
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
                    <b>HSC Result: GPA {item.hscGPA}</b> - Regi No:{" "}
                    {item.hscRegiNo} - Year: {item.hscYear}
                  </Typography>
                </Box>
                <Box m={1.5} display="flex" alignItems="center" gap={1}>
                  <School sx={{ color: "gray" }} />
                  <Typography
                    variant="body2"
                    component="p"
                    fontFamily={"Poppins"}
                  >
                    <b>SSC Result: GPA {item.sscGPA}</b> - Regi No:{" "}
                    {item.sscRegiNo} - Year: {item.sscYear}
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
                        Doing Job: {item.studentName}
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
            </CustomCard>
          </Box>
        ))
      )}
    </Container>
  );
};

export default ConfirmedTutors;
