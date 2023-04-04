import React from "react";
import { Grid, Typography, Button, Card, Stack, Box } from "@mui/material";
import Person1 from "../assets/images/person1.svg";
import Person2 from "../assets/images/person2.svg";
import Person3 from "../assets/images/person3.svg";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const styles = {
  menu: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#002550",
    cursor: "pointer",
    "&:hover": {
      paddingBottom: "15px",
      borderBottomStyle: "solid",
      borderBottomWidth: "5px",
      width: "fitContent",
    },
  },
  heading: {
    fontSize: "32px",
    fontWeight: 700,
    color: "#1A1A1A",
    paddingBottom: "auto 10px",
    borderBottomStyle: "solid",
    borderBottomWidth: "5px",
    width: "310px",
  },
  button: {
    backgroundColor: "#002550",
    textTransform: "none",
  },
  body: {
    padding: "0 130px",
  },
  contact: {
    textTransform: "none",
    color: "#002550",
    borderColor: "#1A1A1A",
  },
  card: {
    mx: 2,
    p: 3,
    boxShadow: "0px 4px 61px rgba(0, 0, 0, 0.16)",
    borderRadius: "10px",
  },
  content: {
    fontWeight: "400",
    fontSize: "14px",
    color: "#1A1A1A",
    opacity: 0.6,
    py: 1,
    height: "80px",
    overflow: "hidden",
    "&:hover": {
      height: "90%",
    },
  },
};

const teamMemebersJson = [
  {
    img: Person1,
    heading: "Brajesh Pathak",
    body: "A Chartered Accountant & Company Secretary, has over a decade of experience in managing realty focused venture capital funds, and was heading Azure Capital Advisors Private Limited. He has also been...",
  },
  {
    img: Person2,
    heading: "Deepak Shukla",
    body: "Deepak Shukla has completed his B.Tech (hons.) from the Indian Institute of Technology (IIT) Kharagpur and obtained an MBA from the Indian Institute of Management (IIM) Ahmedabad, India. He has an overall experience of 11 years in firms like Credit Suisse, FICO, Alvarez and Marsal and The World Bank across geographies. In the past few years, his focus is in solving real world challenges using AI. He has engaged in development of voicebots for contact centres, automated training and validation for Autonomous vehicles applications.",
  },
  {
    img: Person3,
    heading: "Alok Kumar Singh",
    body: "Entrepreneur with pedigree from IIT-BHU and IIML, and more than 25 years of experience in management responsibilities in top tier companies including Infosys, Infosys BPO and Azure Capital. Co-Founded Azure Capital, a Real Estate Private Equity Fund and Azven Realty, a full service Real Estate Development firm in Bangalore. Set-up and managed a SEBI registered VC fund under Azure Capital. Actively involved in mentoring and advising seed and growth stage startups  at C-Level in Visioning, Governance, Strategy Development & Implementation, Growth Planning, Goal Setting and Investment Structuring & Management.",
  },
];

export default function TeamCards() {
  return (
    <Box mx={16}>
      <Grid container mt={5}>
        <Grid xs={12}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}>
            <Typography sx={styles.heading}>Our Team Members</Typography>
          </Box>
        </Grid>
      </Grid>

      <Grid xs={12} sx={{ mt: 4 }}>
        <Grid container spacing={2}>
          {teamMemebersJson.map((element, index) => (
            <Grid key={index} xs={4} sx={{}}>
              <Box sx={styles.card}>
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
                  <Typography sx={styles.content}>{element.body}</Typography>
                </Box>
                <Box sx={{ pt: 1, textAlign: "right" }}>
                  <Button size="small" variant="text" sx={styles.contact}>
                    View more
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
