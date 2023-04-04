import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import logoWhite from "../assets/images/logoWhite.svg";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const styles = {
  heading: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#FFFFFF",
  },
  items: {
    fontSize: "14px",
    fontWeight: 300,
    color: "#FFFFFF",
    cursor: "pointer",
  },
  icons: {
    fontSize: "20px",
    fontWeight: 300,
    color: "#FFFFFF",
    marginTop: "1px",
  },
  icons2: {
    fontSize: "35px",
    fontWeight: 300,
    color: "#FFFFFF",
    marginTop: "10px",
  },
};

export default function Footer() {
  return (
    <>
      <Grid container sx={{ backgroundColor: "#002550" }} px={5} pb={2}>
        <Grid item xs={12}>
          <Grid container mt={5}>
            <Grid itme xs={3}>
              <img
                src={logoWhite}
                style={{ width: "80px", height: "80px" }}></img>
            </Grid>
            <Grid itme xs={3}>
              <Typography sx={styles.heading}>Company</Typography>
              <Typography sx={styles.items} mt={1}>
                Home
              </Typography>
              <Typography sx={styles.items} mt={1}>
                Our offering
              </Typography>
              <Typography sx={styles.items} mt={1}>
                Our Team
              </Typography>
              <Typography sx={styles.items} mt={1}>
                Contact Us
              </Typography>
            </Grid>
            <Grid itme xs={3}>
              <Typography sx={styles.heading}>Useful Link</Typography>
              <Typography sx={styles.items} mt={1}>
                Blogs
              </Typography>
              <Typography sx={styles.items} mt={1}>
                FAQ's
              </Typography>
            </Grid>
            <Grid itme xs={3}>
              <Box sx={{ display: "flex", gap: "10px" }}>
                <MailOutlineIcon sx={styles.icons2} />
                <Box>
                  <Typography sx={styles.heading}>Company</Typography>
                  <Typography sx={styles.items}>
                    support@inreglobal.com
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: "10px" }}>
                <LocalPhoneIcon
                  sx={styles.icons2}
                  style={{ marginTop: "25px" }}
                />
                <Box>
                  <Typography sx={styles.heading} mt={2}>
                    Phone:
                  </Typography>
                  <Typography sx={styles.items}>+91 | 7019305889</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} mt={2}>
          <Grid container>
            <Grid item xs={8}>
              <Typography sx={styles.items}>
                Copyright 2023. Designed by INRE Global
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Box sx={{ display: "flex", gap: "40px" }}>
                <Box sx={{ display: "flex" }}>
                  <LinkedInIcon sx={styles.icons} />
                  <Typography sx={styles.items}>&nbsp;Linkedln</Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <FacebookIcon sx={styles.icons} />
                  <Typography sx={styles.items}>&nbsp;Facebook</Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <TwitterIcon sx={styles.icons} />
                  <Typography sx={styles.items}>&nbsp;Twitter</Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                  <InstagramIcon sx={styles.icons} />
                  <Typography sx={styles.items}>&nbsp;Instagram</Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
