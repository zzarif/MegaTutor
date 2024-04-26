import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  FacebookOutlined,
  Instagram,
  LinkedIn,
  School,
  YouTube,
} from "@mui/icons-material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const Footer = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 2,
        background:
          "linear-gradient(135deg, #4A148C 10%, #7B1FA2 60%, #BA68C8 100%)",
        color: "white",
      }}
    >
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
          The goal of this project is to create a web application that allows
          <br />
          students or their parents to find and hire a personal tutor based on
          <br />
          the tutor's location, availability, qualifications, and experience.
        </Typography>
      </Box>
      <Box sx={{ ml: 4 }}>
        <Typography
          fontFamily={"Poppins"}
          variant="h6"
          component="div"
          gutterBottom
        >
          Useful Links
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="About Us" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="Services" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <CheckCircleOutlineIcon sx={{ color: "white" }} />
            </ListItemIcon>
            <ListItemText primary="MegaTutor Advantage" />
          </ListItem>
        </List>
      </Box>
      <Box sx={{ ml: 4 }}>
        <Typography
          fontFamily={"Poppins"}
          variant="h6"
          component="div"
          gutterBottom
        >
          Social
        </Typography>
        <List>
          <ListItem>
            <ListItemIcon>
              <FacebookOutlined sx={{ color: "white" }} />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LinkedIn sx={{ color: "white" }} />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Instagram sx={{ color: "white" }} />
            </ListItemIcon>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <YouTube sx={{ color: "white" }} />
            </ListItemIcon>
          </ListItem>
        </List>
        {/* Add social media icons or links here */}
      </Box>
    </Box>
  );
};

export default Footer;
