import React, { useState } from "react";
import { parentMenuItems } from "../../constants/parentMenuItems";
import { DrawerHeader, AppBar, Drawer } from "../../styles/drawerStyles";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import { School } from "@mui/icons-material";
import AccountMenu from "../account-menu/AccountMenu";

const ParentDrawer = ({ children }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex", bgcolor: "#ececec" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        style={{
          background:
            "linear-gradient(125deg, #4A148C 10%, #7B1FA2 60%, #BA68C8 100%)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box display="flex" width={"100%"} alignItems="center" justifyContent="space-between">
            <Typography
              variant="h6"
              noWrap
              component="div"
              fontFamily={"Poppins"}
            >
              <School sx={{ mb: -0.4, mr: 0.1 }} />
              MegaTutor
            </Typography>
            <AccountMenu />
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        open={open}
        variant="permanent"
        PaperProps={{
          sx: {
            background:
              "linear-gradient(125deg, #4A148C 10%, #7B1FA2 60%, #BA68C8 100%)",
          },
        }}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon sx={{ color: "white" }} />
            ) : (
              <ChevronLeftIcon sx={{ color: "white" }} />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />

        {open && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              color: "white",
              gap: 2,
              m: 2.5,
            }}
          >
            <Avatar
              alt="Avatar"
              src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133352010-stock-illustration-default-placeholder-man-and-woman.jpg"
              style={{ width: 200, height: 200 }}
            />

            <Typography fontFamily={"Poppins"} fontSize={20}>
              {JSON.parse(localStorage.getItem("auth-parent")).displayName}
            </Typography>
          </Box>
        )}

        <List>
          {parentMenuItems.map((item, index) => (
            <ListItem
              key={index}
              component={Link}
              to={"/" + item.to}
              disablePadding
              sx={{ display: "block", color: "white" }}
            >
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center",
                    color: "white",
                  }}
                >
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText
                  primaryTypographyProps={{ fontFamily: "Poppins" }}
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <main>{children}</main>
      </Box>
    </Box>
  );
};

export default ParentDrawer;
