import React from "react";
import { Grid, Typography, Button, Card, Stack, Box } from "@mui/material";
import Logo from "../assets/images/logo.svg";
import Banner from "../assets/images/banner.svg";
import HomeImg from "../assets/images/homeImg.svg";
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
  button: {
    backgroundColor: "#002550",
    textTransform: "none",
  },
  body: {
    padding: "0 130px",
  },
  contact: {
    textTransform: "none",
    color: "#1A1A1A",
    borderColor: "#1A1A1A",
  },
};

export default function Header() {
  const menus = ["Home", "Our Offering", "Our Team", "Contact Us", "Blogs"];
  return (
    <>
      <Grid container>
        <Grid xs={12}>
          <Card>
            <Grid container sx={{ py: 2 }}>
              <Grid item xs={4} sx={{ pl: 3 }}>
                <img style={{ width: "50px", height: "50px" }} src={Logo}></img>
              </Grid>
              <Grid item xs={6}>
                <Stack direction={"row"} spacing={3} sx={{ mt: 3 }}>
                  {menus.map((item) => (
                    <Typography sx={styles.menu}>{item}</Typography>
                  ))}
                </Stack>
              </Grid>
              <Grid item xs={2}>
                <Button variant="contained" sx={{ ...styles.button, mt: 2 }}>
                  Register Now
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid xs={12} sx={styles.body}>
          <Grid container>
            <Grid xs={12} sx={{ pt: 5, pb: 2 }}>
              <img width={"100%"} src={Banner}></img>
            </Grid>
            <Grid xs={12} sx={{ pt: 5, pb: 2 }}>
              <Grid container sx={{ background: "#E6EAEE", p: 1 }}>
                <Grid xs={6}>
                  <img width={"600px"} src={HomeImg}></img>
                </Grid>
                <Grid xs={6}>
                  <Box sx={{ pt: 1, pb: 1 }}>
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "36px",
                        color: "#1A1A1A",
                      }}>
                      Who We Are
                    </Typography>
                  </Box>
                  <Box>
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "16px",
                        color: "#1A1A1A",
                        opacity: "0.6",
                      }}>
                      The Indian real estate sector is resilient despite global
                      headwinds. Returns are impressive and the sector is
                      expected to reach US$ 1 trillion in market size by 2030
                      (Niti Aayog report, 2021). However, the whole real estate
                      purchase journey is very tedious and takes more than 2
                      years on average. Further, as the ticket size of this
                      investment is large, security and trust become quite
                      critical. Problems compound when you are currently away
                      from your purchase destination. If you are experiencing
                      difficulties in the real estate purchase journey, we are
                      here to make it fast and transparent.
                    </Typography>
                  </Box>

                  <Box sx={{ pt: 2.5 }}>
                    <Button size="large" variant="outlined" sx={styles.contact}>
                      Contact Now <ArrowForwardIcon />
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
