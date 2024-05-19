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

const AllTutors = () => {
  const [jobList, setJobList] = useState([]);

  const [loading, setLoading] = useState(false);
  const fetchAllTutors = async () => {
    setLoading(true);
    try {
      const url = new URL(import.meta.env.VITE_API_BASE_URL + "getAllParents");
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
        <b>All Parents</b>
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
                  <b>email</b>
                </StyledTableCell>
                <StyledTableCell>
                  <b>name</b>
                </StyledTableCell>
                <StyledTableCell>
                  <b>phone</b>
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
                    {row.email ? row.email : "--"}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.name ? row.name : "--"}
                  </StyledTableCell>
                  <StyledTableCell>
                    {row.phone ? row.phone : "--"}
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

export default AllTutors;
