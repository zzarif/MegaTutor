import React, { Fragment, useEffect, useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Grid, TextField } from "@mui/material";
import { textFieldStyles } from "../../styles/textFieldStyles";
import { LoadingButton } from "@mui/lab";
import { Edit } from "@mui/icons-material";
import { btnStyles2 } from "../../styles/btnStyles2";

export default function EditUser({
  open,
  setOpen,
  role,
  email,
  name,
  setName,
  phone,
  setPhone,
}) {
  const [loading, setLoading] = useState(false);
  const updateUser = async () => {
    setLoading(true);
    try {
      const url = new URL(import.meta.env.VITE_API_BASE_URL + "updateUser");
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name, phone, role }),
      });

      if (response.ok) {
        const data = await response.json();
        alert("User updated successfully.");
        window.location.reload();
      } else {
        const errorData = await response.json();
        console.error("Error updating user:", errorData.error);
        alert(errorData.error);
      }
    } catch (error) {
      console.error("Error updating user:", error);
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            minWidth: 300,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
            overflowY: "auto",
          }}
        >
          <ModalClose variant="plain" sx={{ m: 1 }} />
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontFamily="Poppins"
            fontWeight="lg"
            mb={1}
          >
            Edit {role}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                sx={textFieldStyles}
                value={email}
                disabled
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Name"
                fullWidth
                sx={textFieldStyles}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Phone"
                fullWidth
                sx={textFieldStyles}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <LoadingButton
              loading={loading}
              startIcon={<Edit />}
              loadingPosition="start"
              sx={btnStyles2}
              onClick={updateUser}
              variant="contained"
              color="primary"
            >
              <b>Update Parent</b>
            </LoadingButton>
          </Grid>
        </Sheet>
      </Modal>
    </Fragment>
  );
}
