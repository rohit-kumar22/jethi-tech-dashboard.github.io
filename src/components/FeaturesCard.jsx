import React from "react";
import { Grid, Typography, Button, Card, Stack, Box } from "@mui/material";
import OfferingCard1 from "../assets/images/offeringCard1.svg";
import OfferingCard2 from "../assets/images/offeringCard2.svg";
import OfferingCard3 from "../assets/images/offeringCard3.svg";

const styles = {
  heading: {
    fontSize: "32px",
    fontWeight: 700,
    color: "#1A1A1A",
    textAlign: "center",
    paddingBottom: "auto 10px",
    borderBottomStyle: "solid",
    borderBottomWidth: "5px",
    width: "225px",
  },
  actions: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#FFFFFF",
    textAlign: "center",
  },
  section: {
    backgroundColor: "#F2F4F6",
    py: 1,
    "&:hover": {
      backgroundColor: "#CCD3DC",
      borderBottom: "3px solid #002550",
    },
  },
};

const offeringCardJson = [
  {
    img: OfferingCard1,
    heading: "Background verification",
    body: "Assuring your capital is in safe hands, we provide detailed verification reports of the project and developer. These are customized and detailed...",
  },
  {
    img: OfferingCard2,
    heading: "Virtual site visit",
    body: "It becomes imperative to observe your apartment or plot very closely before paying the booking amount. We are here to assist with an AI-enabled UAV...",
  },
  {
    img: OfferingCard3,
    heading: "Title diligence",
    body: "Due diligence is necessary to prevent real estate malpractices which have contributed to more than 20% of the civil cases in India. We have a panel of...",
  },
];

export default function FeaturesCard() {
  return (
    <Box mx={16}>
      <Grid container>
        <Grid xs={12}>
          <Box
            sx={{
              display: "flex",
              textAlign: "center",
              justifyContent: "center",
            }}>
            <Typography sx={styles.heading}>Our Offerings</Typography>
            <br></br>
          </Box>
          <Box sx={{ textAlign: "center", mt: 2 }}>
            <Typography sx={{ fontWeight: "400", fontSize: "14px" }}>
              This whole purchase journey can be divided into three stages. For
              more details,
              <span style={{ fontWeight: 700, cursor: "pointer" }}>
                Click Here
              </span>
            </Typography>
          </Box>
          <Grid container mt={3}>
            <Grid item xs={3.7} sx={styles.section} px={15}>
              <Box sx={{ display: "flex", gap: "15px" }}>
                <Box sx={styles.actions}>
                  <Typography pt={1}>1</Typography>
                </Box>
                <Typography pt={1}>Pre-Booking</Typography>
              </Box>
            </Grid>
            <Grid item xs={3.7} sx={styles.section} px={5} mx={5}>
              <Box sx={{ display: "flex", gap: "15px" }}>
                <Box sx={styles.actions}>
                  <Typography pt={1}>2</Typography>
                </Box>
                <Typography pt={1}>Post-Booking & Pre-Registration</Typography>
              </Box>
            </Grid>
            <Grid item xs={3.7} sx={styles.section} px={12}>
              <Box sx={{ display: "flex", gap: "15px" }}>
                <Box sx={styles.actions}>
                  <Typography pt={1}>3</Typography>
                </Box>
                <Typography pt={1}>Post-Registration</Typography>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid xs={12} sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          {offeringCardJson.map((element, index) => (
            <Grid key={index} xs={4} sx={{}}>
              <Box
                sx={{
                  mx: 2,
                  p: 3,
                  boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.3)",
                  borderRadius: "10px",
                }}>
                <Box>
                  <img width={"100%"} src={element.img}></img>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "22px",
                      color: "#002550",
                      py: 1,
                    }}>
                    {element.heading}
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "14px",
                      color: "#1A1A1A",
                      opacity: 0.6,
                      py: 1,
                    }}>
                    {element.body}
                  </Typography>
                </Box>
                <Box sx={{ pt: 1 }}>
                  <Button size="small" variant="outlined">
                    Contact Now
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
}
