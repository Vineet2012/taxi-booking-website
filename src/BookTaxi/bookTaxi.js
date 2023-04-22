import React, { useState } from "react";
import "./bookTaxi.css";
import dayjs from "dayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import ModalCmp from "./modal";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BookTaxiCmp() {
  const [details, setDetails] = useState({
    name: "",
    number: "",
    additional: "",
    pickUp: "",
    drop: "",
    date: "",
    time: "",
    class: "",
  });

  const [date, setDate] = useState(dayjs("2022-04-17"));
  const [value, setValue] = useState(dayjs("2022-04-17T15:30"));

  function handleDetails(event) {
    setDetails((prevData) => {
      return {
        ...prevData,
        [event.target.name]: event.target.value,
      };
    });
  }

  return (
    <div className="book-taxi-wrapper">
      <span className="heading">BOOK A TAXI</span>
      <div className="all-input-wrapper">
        <div className="name-number-date-time-wrapper">
          <TextField
            onChange={handleDetails}
            name="name"
            value={details.name}
            className="name"
            label="Name"
            id="fullWidth"
          />
          <TextField
            onChange={handleDetails}
            name="number"
            value={details.number}
            className="name"
            label="Mobile Number"
            id="fullWidth"
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={[]}>
              <DemoItem>
                <div className="date-time-wrapper">
                  <div className="date">
                    <DatePicker
                      onChange={(date) => setDate(date)}
                      value={date}
                      views={["year", "month", "day"]}
                    />
                  </div>
                  <div className="date">
                    <TimePicker
                      value={value}
                      onChange={(newValue) => setValue(newValue)}
                      label="Time of pick up"
                    />
                  </div>
                </div>
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
        </div>
        <div className="pickup-drop-class-wrapper">
          <Box
            sx={{
              width: 400,
              maxWidth: "100%",
            }}
          >
            <TextField
              className="pickup"
              onChange={handleDetails}
              name="pickUp"
              value={details.pickUp}
              fullWidth
              label="Pick up point"
              id="fullWidth"
            />
          </Box>
          <Box
            sx={{
              width: 400,
              maxWidth: "100%",
            }}
          >
            <TextField
              className="drop"
              onChange={handleDetails}
              name="drop"
              value={details.drop}
              fullWidth
              label="Drop up point"
              id="fullWidth"
            />
          </Box>
          <Box
            sx={{
              width: 400,
              maxWidth: "100%",
            }}
          >
            <FormControl fullWidth className="vehicle">
              <InputLabel id="demo-multiple-name-label">
                Vehicle Class
              </InputLabel>
              <Select
                onChange={handleDetails}
                name="class"
                value={details.class}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Age"
              >
                <MenuItem value="Compact">Compact</MenuItem>
                <MenuItem value="Intermediate">Intermediate</MenuItem>
                <MenuItem value="Superior">Superior</MenuItem>
                <MenuItem value="Luxury">Luxury</MenuItem>
                <MenuItem value="Premium">Premium</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <TextareaAutosize
            onChange={handleDetails}
            name="additional"
            value={details.additional}
            maxRows={4}
            aria-label="maximum height"
            placeholder="Additional Requirments"
            className="textArea"
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <ModalCmp details={details} date={date} value={value} />
        </div>
      </div>
    </div>
  );
}
