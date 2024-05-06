import React from "react";
import {
  Box,
  Typography,
  Grid,
} from "@mui/material";
import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  School,
  YouTube,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <Box
      sx={{
        p: 2,
        background:
          "linear-gradient(135deg, #4A148C 10%, #7B1FA2 60%, #BA68C8 100%)",
        color: "white",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Box>
            <Typography
              fontFamily={"Poppins"}
              variant="h6"
              component="div"
              gutterBottom
            >
              <School sx={{ mb: -0.4, mr: 0.1 }} />
              MegaTutor
            </Typography>
            <Typography fontFamily={"Poppins"} variant="body1" component="div">
              The goal of this project is to create a web application that
              allows
              <br />
              students or their parents to find and hire a personal tutor based
              on
              <br />
              the tutor's location, availability, qualifications, and
              experience.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ ml: 4 }}>
            <Typography
              fontFamily={"Poppins"}
              variant="h6"
              component="div"
              gutterBottom
            >
              Useful Links
            </Typography>
            <Typography fontFamily={"Poppins"} variant="body2" component="p">
              Terms of Service
            </Typography>
            <Typography fontFamily={"Poppins"} variant="body2" component="p">
              About Us
            </Typography>
            <Typography fontFamily={"Poppins"} variant="body2" component="p">
              Affiliates
            </Typography>
            <Typography fontFamily={"Poppins"} variant="body2" component="p">
              Contact Us
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Box sx={{ ml: 4 }}>
            <Typography
              fontFamily={"Poppins"}
              variant="h6"
              component="div"
              gutterBottom
            >
              Social
            </Typography>
            <FacebookOutlined sx={{ color: "white" }} />
            <LinkedIn sx={{ color: "white" }} />
            <Instagram sx={{ color: "white" }} />
            <YouTube sx={{ color: "white" }} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
