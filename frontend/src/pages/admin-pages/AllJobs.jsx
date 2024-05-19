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
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { StyledTableCell, StyledTableRow } from "../../styles/table_styles";
import Paper from "@mui/material/Paper";
import {
  EventNoteRounded,
  LocationOnRounded,
  School,
} from "@mui/icons-material";
import FacebookCircularProgress from "../../components/fbspinner/FacebookCircularProgress";
import { centered } from "../../styles/centered";

const AllJobs = () => {
  const [jobList, setJobList] = useState([]);

  const [loading, setLoading] = useState(false);
  const fetchAllTutors = async () => {
    setLoading(true);
    try {
      const url = new URL(import.meta.env.VITE_API_BASE_URL + "getAllJobs");
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
    fetchAllTutors();
  }, []);

  return (
    <Container maxWidth={300}>
      <Typography
        m={4}
        fontFamily={"Poppins"}
        variant="h4"
        align="center"
        gutterBottom
      >
        <b>All Jobs</b>
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
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <StyledTableRow>
                <StyledTableCell>
                  <b>Serial</b>
                </StyledTableCell>
                <StyledTableCell>
                  <b>medium</b>
                </StyledTableCell>
                <StyledTableCell>
                  <b>location</b>
                </StyledTableCell>
                <StyledTableCell>
                  <b>subjects</b>
                </StyledTableCell>
                <StyledTableCell>
                  <b>salary</b>
                </StyledTableCell>
                <StyledTableCell>
                  <b>category</b>
                </StyledTableCell>
                <StyledTableCell>
                  <b>level</b>
                </StyledTableCell>
                <StyledTableCell>
                  <b>institute</b>
                </StyledTableCell>
                <StyledTableCell>
                  <b>studentName</b>
                </StyledTableCell>
                <StyledTableCell>
                  <b>daysPerWeek</b>
                </StyledTableCell>
                {/* <StyledTableCell>
                  <b>details</b>
                </StyledTableCell> */}
                <StyledTableCell>
                  <b>studentGender</b>
                </StyledTableCell>
                <StyledTableCell>
                  <b>status</b>
                </StyledTableCell>
                <StyledTableCell>
                  <b>parentId</b>
                </StyledTableCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {jobList.map((row, idx) => (
                <StyledTableRow
                  key={idx}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <StyledTableCell component="th" scope="row">
                    {idx + 1}
                  </StyledTableCell>
                  <StyledTableCell component="th" scope="row">
                    {row.medium ? row.medium : "--"}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.location ? row.location : "--"}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.subjects ? row.subjects : "--"}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.salary ? row.salary : "--"}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.category ? row.category : "--"}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.level ? row.level : "--"}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.institute ? row.institute : "--"}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.studentName ? row.studentName : "--"}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.daysPerWeek ? row.daysPerWeek : "--"}
                  </StyledTableCell>
                  {/* <StyledTableCell>
                    {row.details ? row.details : "--"}
                  </StyledTableCell> */}
                  <StyledTableCell>
                    {row.studentGender ? row.studentGender : "--"}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.status ? row.status : "--"}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.parentId ? row.parentId : "--"}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default AllJobs;
