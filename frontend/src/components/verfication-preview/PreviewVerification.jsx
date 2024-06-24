import React, { Fragment, useEffect, useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";

export default function PreviewVerification({
  open,
  setOpen,
  name,
  hscGPA,
  hscRegiNo,
  hscYear,
}) {
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
            Verification Details
          </Typography>
          <img width={600} alt="Result Header" src="/result_header.png"></img>
          <br />
          <Typography
            component="p"
            textColor="inherit"
            fontFamily="Poppins"
            ml={1}
            mb={1}
          >
            Name: {name}
          </Typography>
          <Typography
            component="p"
            textColor="inherit"
            fontFamily="Poppins"
            ml={1}
            mb={1}
          >
            GPA: {hscGPA}
          </Typography>
          <Typography
            component="p"
            textColor="inherit"
            fontFamily="Poppins"
            ml={1}
            mb={1}
          >
            Regi. No: {hscRegiNo}
          </Typography>
          <Typography
            component="p"
            textColor="inherit"
            fontFamily="Poppins"
            ml={1}
            mb={1}
          >
            Year: {hscYear}
          </Typography>
          <img width={600} alt="Result Footer" src="/result_footer.png"></img>
        </Sheet>
      </Modal>
    </Fragment>
  );
}
