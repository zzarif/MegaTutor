import React, { Fragment, useEffect, useState } from "react";
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Typography from "@mui/joy/Typography";
import Sheet from "@mui/joy/Sheet";
import { Rating } from "@mui/material";

export default function PreviewVerification({
  open,
  setOpen,
  name,
  email,
  hscGPA,
  hscRegiNo,
  hscYear,
}) {
  const [rating, setRating] = useState(0);
  const rateTutor = async () => {
    try {
      const url = new URL(import.meta.env.VITE_API_BASE_URL + "rateTutor");
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, rating }),
      });

      if (response.ok) {
        const data = await response.json();
      } else {
        const errorData = await response.json();
        console.error("Error rating user:", errorData.error);
        alert(errorData.error);
      }
    } catch (error) {
      console.error("Error rating user:", error);
      alert(error);
    }
  };

  useEffect(() => {
    if(rating != 0) rateTutor();
  }, [rating]);

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
          <Typography
            component="p"
            textColor="inherit"
            fontFamily="Poppins"
            ml={1}
            mb={1}
          >
            Name: {name} | GPA: {hscGPA}
          </Typography>
          <Typography
            component="p"
            textColor="inherit"
            fontFamily="Poppins"
            ml={1}
            mb={1}
          >
            Regi. No: {hscRegiNo} | Year: {hscYear}
          </Typography>
          <img width={600} alt="Result Header" src="/result_header.png"></img>
          <br />
          <img width={600} alt="Result Footer" src="/result_footer.png"></img>
          <Typography
            component="h2"
            id="modal-title"
            level="h4"
            textColor="inherit"
            fontFamily="Poppins"
            fontWeight="lg"
            mt={1}
            mb={1}
          >
            Rate {name}
          </Typography>
          <Rating
            name="simple-controlled"
            value={rating}
            onChange={(event, newValue) => {
              setRating(newValue);
            }}
          />
        </Sheet>
      </Modal>
    </Fragment>
  );
}
