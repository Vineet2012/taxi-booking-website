import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "./modal.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "90%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function ModalCmp({ details, date, value }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        style={{
          padding: "8px 20px 8px 20px",
          backgroundColor: "#fdb827",
          border: "none",
          borderRadius: "8px",
          color: "black",
          fontWeight: "600",
          fontSize: "18px",
        }}
        onClick={handleOpen}
      >
        SUBMIT
      </Button>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box className="box-wrapper">
          <Typography
            className="heading-modal"
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
          >
            DETAILS YOU ENTERED
          </Typography>
          <div style={{ margin: "20px" }}>
            <div className="input-wrapper">
              <Typography
                className="title"
                id="keep-mounted-modal-description"
                sx={{ mt: 2, fontWeight: 600 }}
              >
                NAME:
              </Typography>
              <Typography
                className="input"
                id="keep-mounted-modal-description"
                sx={{ mt: 2 }}
              >
                {details.name}
              </Typography>
            </div>
            <div className="input-wrapper">
              <Typography
                className="title"
                id="keep-mounted-modal-description"
                sx={{ mt: 2, fontWeight: 600 }}
              >
                MOBILE NUMBER:
              </Typography>
              <Typography
                className="input"
                id="keep-mounted-modal-description"
                sx={{ mt: 2 }}
              >
                {details.number}
              </Typography>
            </div>
            <div className="input-wrapper">
              <Typography
                className="title"
                id="keep-mounted-modal-description"
                sx={{ mt: 2, fontWeight: 600 }}
              >
                PICK UP DATE:
              </Typography>
              <Typography
                className="input"
                id="keep-mounted-modal-description"
                sx={{ mt: 2 }}
              >
                {date.toString()}
              </Typography>
            </div>
            <div className="input-wrapper">
              <Typography
                className="title"
                id="keep-mounted-modal-description"
                sx={{ mt: 2, fontWeight: 600 }}
              >
                PICK UP TIME:
              </Typography>
              <Typography
                className="input"
                id="keep-mounted-modal-description"
                sx={{ mt: 2 }}
              >
                {value.toString()}
              </Typography>
            </div>
            <div className="input-wrapper">
              <Typography
                className="title"
                id="keep-mounted-modal-description"
                sx={{ mt: 2, fontWeight: 600 }}
              >
                PICK UP POINT:
              </Typography>
              <Typography
                className="input"
                id="keep-mounted-modal-description"
                sx={{ mt: 2 }}
              >
                {details.pickUp}
              </Typography>
            </div>
            <div className="input-wrapper">
              <Typography
                className="title"
                id="keep-mounted-modal-description"
                sx={{ mt: 2, fontWeight: 600 }}
              >
                DROP POINT:
              </Typography>
              <Typography
                className="input"
                id="keep-mounted-modal-description"
                sx={{ mt: 2 }}
              >
                {details.drop}
              </Typography>
            </div>
            <div className="input-wrapper">
              <Typography
                className="title"
                id="keep-mounted-modal-description"
                sx={{ mt: 2, fontWeight: 600 }}
              >
                VEHICLE CLASS:
              </Typography>
              <Typography
                className="input"
                id="keep-mounted-modal-description"
                sx={{ mt: 2 }}
              >
                {details.class}
              </Typography>
            </div>
            {details.additional ? (
              <div className="input-wrapper">
                <Typography
                  className="title"
                  id="keep-mounted-modal-description"
                  sx={{ mt: 2, fontWeight: 600 }}
                >
                  ADDITIONAL REQUIRMENTS:
                </Typography>
                <Typography
                  className="input"
                  id="keep-mounted-modal-description"
                  sx={{ mt: 2 }}
                >
                  {details.additional}
                </Typography>
              </div>
            ) : (
              ""
            )}
          </div>
          <button onClick={handleClose} className="button-modal">
            Confirm
          </button>
        </Box>
      </Modal>
    </div>
  );
}
