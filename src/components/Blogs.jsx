import React, { useState } from "react";
import { Grid, Box, Typography, Button } from "@mui/material";
import home1 from "../assets/images/home1.png";
import home2 from "../assets/images/home2.png";
import home3 from "../assets/images/home3.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const styles = {
  heading: {
    fontSize: "32px",
    fontWeight: 700,
    color: "#1A1A1A",
    textAlign: "center",
    paddingBottom: "auto 10px",
    borderBottomStyle: "solid",
    borderBottomWidth: "5px",
    width: "90px",
  },
  button: {
    textTransform: "none",
    borderColor: "#002550",
    color: "#002550",
  },
  analysis: {
    fontSize: "14px",
    fontWeight: 300,
    color: "#002550",
    marginTop: "15px",
  },
  date: {
    display: "flex",
    gap: "160px",
    mt: 2,
    fontSize: "14px",
    color: "#1A1A1A",
    fontWeight: 700,
  },
  actions: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#E6EAEE",
    textAlign: "center",
    marginTop: "400px",
    cursor: "pointer",
  },
};

const blogsJson = [
  {
    id: 1,
    img: home1,
    date: "09 jun 2022",
    source: "By admin",
    heading: "Guide for personal property Buying",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
  },
  {
    id: 2,
    img: home2,
    date: "09 jun 2022",
    source: "By admin",
    heading: "Guide for personal property Buying",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
  },
  {
    id: 3,
    img: home3,
    date: "09 jun 2022",
    source: "By admin",
    heading: "Guide for personal property Buying",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
  },
  {
    id: 4,
    img: home1,
    date: "09 jun 2022",
    source: "By admin",
    heading: "Guide for personal property Buying",
    body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.",
  },
];

export default function Blogs() {
  const [cardsLength, setCardsLength] = useState(1);

  const handleCardsLength = (value) => {
    if (value === "plus") {
      setCardsLength((prev) => prev + 1);
    } else if (value === "minus") {
      setCardsLength((prev) => prev - 1);
    }
  };
  return (
    <>
      <Box mt={5} mx={8.5}>
        <Box
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "center",
          }}>
          <Typography sx={styles.heading}>Blogs</Typography>
        </Box>

        <Box sx={{ display: "flex", gap: "20px" }}>
          <Box sx={styles.actions} onClick={() => handleCardsLength("minus")}>
            <Typography pt={1}>
              <ArrowLeftIcon />
            </Typography>
          </Box>
          <Grid container spacing={2} mt={5}>
            {blogsJson
              .filter(
                (item) => item.id >= cardsLength && item.id < cardsLength + 3
              )
              .map((element, index) => (
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
                      <Typography sx={styles.analysis}>
                        Real State, Analysis
                      </Typography>
                      <Box sx={styles.date}>
                        <Box sx={{ display: "flex" }}>
                          <CalendarMonthIcon />
                          <Typography>{element.date}</Typography>
                        </Box>
                        <Typography>{element.source}</Typography>
                      </Box>
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
                      <Button
                        size="large"
                        variant="outlined"
                        sx={styles.button}>
                        View More <ArrowForwardIcon />
                      </Button>
                    </Box>
                  </Box>
                </Grid>
              ))}
          </Grid>
          <Box sx={styles.actions} onClick={() => handleCardsLength("plus")}>
            <Typography pt={1}>
              <ArrowRightIcon />
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
}
