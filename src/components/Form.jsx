import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Box,
  MenuItem,
  Select,
  InputLabel,
  Button,
  FormControl,
} from "@mui/material";
import form_pic from "../assets/images/form_pic.svg";

const styles = {
  heading: {
    fontSize: "24px",
    fontWeight: 600,
    color: "#1A1A1A",
  },
  sign: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#1A1A1A",
  },
  input_fields: {
    width: "300px",
  },
  button: {
    backgroundColor: "#002550",
    textTransform: "none",
    width: "300px",
  },
};

export default function Form() {
  const [country, setCountry] = useState(1);
  const [booking, setBooking] = useState(2);
  return (
    <>
      <Grid container>
        <Grid item xs={12} mt={5} px={15} mr={2}>
          <Grid
            container
            sx={{
              p: 3,
              boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.3)",
              borderRadius: "10px",
            }}>
            <Grid item xs={8}>
              <Typography sx={styles.heading}>
                Get in Touch With Us To Connect
              </Typography>
              <Typography sx={styles.sign}>Contact Us</Typography>
              <Box sx={{ display: "flex", gap: "50px", mt: 2 }}>
                <TextField
                  id="outlined-basic"
                  label="Full Name"
                  variant="outlined"
                  size="small"
                  sx={styles.input_fields}
                />
                <TextField
                  id="outlined-basic"
                  label="Email address"
                  variant="outlined"
                  size="small"
                  sx={styles.input_fields}
                />
              </Box>
              <Box sx={{ display: "flex", gap: "50px", mt: 2 }}>
                <FormControl fullWidth sx={styles.input_fields}>
                  <InputLabel size="small">Country</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={country}
                    label="Country"
                    size="small"
                    onChange={(event) => setCountry(event.target.value)}>
                    <MenuItem value={1}>India</MenuItem>
                    <MenuItem value={2}>China</MenuItem>
                    <MenuItem value={3}>Sri Lanka</MenuItem>
                  </Select>
                </FormControl>

                <TextField
                  id="outlined-basic"
                  label="Phone Number"
                  variant="outlined"
                  size="small"
                  sx={styles.input_fields}
                />
              </Box>
              <Box mt={2}>
                <FormControl fullWidth>
                  <InputLabel size="small">Stages</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={booking}
                    label="Stages"
                    size="small"
                    sx={styles.input_fields}
                    onChange={(event) => setBooking(event.target.value)}>
                    <MenuItem value={1}>Booked</MenuItem>
                    <MenuItem value={2}>
                      Booked but registration not done
                    </MenuItem>
                    <MenuItem value={3}>Registration is done</MenuItem>
                  </Select>
                </FormControl>
              </Box>
              <Box mt={2}>
                <Button variant="contained" sx={styles.button}>
                  Submit
                </Button>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Box pl={10}>
                <img
                  src={form_pic}
                  style={{
                    width: "300px",
                    height: "280px",
                    margin: "auto",
                    objectFit: "cover",
                  }}></img>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
