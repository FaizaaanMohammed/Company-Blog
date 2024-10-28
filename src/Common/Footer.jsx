import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./Footer.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <>
      <Box sx={{ padding: "60px 0px 30px 0px", background: "#1e1e1e" }}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid
              item
              sm={6}
              xs={12}
              md={3}
              sx={{
                color: "white",
                marginBottom: "30px",
              }}
            >
              <h3
                style={{
                  fontSize: "22px",
                  marginBottom: "10px",
                  letterSpacing: "1",
                  fontWeight: "500",
                  textTransform: "uppercase",
                  color: "#fff",
                  padding: "2px 0px",
                }}
              >
                Company
              </h3>
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: "24px",
                  color: "#ffffffb3",
                }}
              >
                A108 Adam Street <br />
                New York, NY 535022 <br />
                United States <br />
                <strong>
                  Phone: +1 5589 55488 55 <br />
                </strong>
                <strong>Email: info@example.com</strong>
              </p>
            </Grid>
            <Grid item sm={6} xs={12} md={3} sx={{ color: "white" }}>
              <h4>Useful Links</h4>
              <ul style={{ padding: "0px" }}>
                <li style={{ listStyle: "none", paddingBottom: "10px" }}>
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#ffffffb3" }}
                    className="footer-anchor"
                  >
                    <ArrowForwardIosIcon
                      sx={{ fontSize: "12px", color: "#31ed33c" }}
                    />{" "}
                    Home
                  </a>
                </li>
                <li
                  style={{
                    listStyle: "none",
                    padding: "10px 0px",
                    color: "#ffffffb3",
                  }}
                >
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#ffffffb3" }}
                    className="footer-anchor"
                  >
                    <ArrowForwardIosIcon
                      sx={{ fontSize: "12px", color: "#31ed33c" }}
                    />{" "}
                    About us
                  </a>
                </li>
                <li
                  style={{
                    listStyle: "none",
                    padding: "10px 0px",
                    color: "#ffffffb3",
                  }}
                >
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#ffffffb3" }}
                    className="footer-anchor"
                  >
                    <ArrowForwardIosIcon
                      sx={{ fontSize: "12px", color: "#31ed33c" }}
                    />{" "}
                    Services
                  </a>
                </li>
                <li
                  style={{
                    listStyle: "none",
                    padding: "10px 0px",
                    color: "#ffffffb3",
                  }}
                >
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#ffffffb3" }}
                    className="footer-anchor"
                  >
                    <ArrowForwardIosIcon
                      sx={{ fontSize: "12px", color: "#31ed33c" }}
                    />
                    Terms of Services
                  </a>
                </li>
                <li
                  style={{
                    listStyle: "none",
                    padding: "10px 0px",
                    color: "#ffffffb3",
                  }}
                >
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#ffffffb3" }}
                    className="footer-anchor"
                  >
                    <ArrowForwardIosIcon
                      sx={{ fontSize: "12px", color: "#31ed33c" }}
                    />{" "}
                    Privacy policy
                  </a>
                </li>
              </ul>
            </Grid>
            <Grid item sm={6} xs={12} md={3} sx={{ color: "white" }}>
              <h4>Our Services</h4>
              <ul style={{ padding: "0px" }}>
                <li style={{ listStyle: "none", paddingBottom: "10px" }}>
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#ffffffb3" }}
                    className="footer-anchor"
                  >
                    <ArrowForwardIosIcon
                      sx={{ fontSize: "12px", color: "#31ed33c" }}
                    />{" "}
                    Web Desgin
                  </a>
                </li>
                <li
                  style={{
                    listStyle: "none",
                    padding: "10px 0px",
                    color: "#ffffffb3",
                  }}
                >
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#ffffffb3" }}
                    className="footer-anchor"
                  >
                    <ArrowForwardIosIcon
                      sx={{ fontSize: "12px", color: "#31ed33c" }}
                    />{" "}
                    Web Development
                  </a>
                </li>
                <li
                  style={{
                    listStyle: "none",
                    padding: "10px 0px",
                    color: "#ffffffb3",
                  }}
                >
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#ffffffb3" }}
                    className="footer-anchor"
                  >
                    <ArrowForwardIosIcon
                      sx={{ fontSize: "12px", color: "#31ed33c" }}
                    />{" "}
                    Product Management
                  </a>
                </li>
                <li
                  style={{
                    listStyle: "none",
                    padding: "10px 0px",
                    color: "#ffffffb3",
                  }}
                >
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#ffffffb3" }}
                    className="footer-anchor"
                  >
                    <ArrowForwardIosIcon
                      sx={{ fontSize: "12px", color: "#31ed33c" }}
                    />{" "}
                    Graphic Design
                  </a>
                </li>
                <li
                  style={{
                    listStyle: "none",
                    padding: "10px 0px",
                    color: "#ffffffb3",
                  }}
                >
                  <a
                    href=""
                    style={{ textDecoration: "none", color: "#ffffffb3" }}
                    className="footer-anchor"
                  >
                    <ArrowForwardIosIcon
                      sx={{ fontSize: "12px", color: "#31ed33c" }}
                    />{" "}
                    Marketing
                  </a>
                </li>
              </ul>
            </Grid>
            <Grid item sm={6} xs={12} md={3} sx={{ color: "white" }}>
              <h4
                style={{
                  fontWeight: "bold",
                  fontSize: "16px",
                  paddingBottom: "12px",
                }}
              >
                Join Our Newsletter
              </h4>
              <p style={{ marginBottom: "1rem", color: "#ffffffb3" }}>
                Tamen quem nulla quae legam <br /> multos aute sint culpa legam{" "}
                <br /> noster magna
              </p>
              <Typography component="form" sx={{ position: "relative" }}>
                <TextField
                  id="outlined-basic"
                  label="subscribe"
                  variant="outlined"
                  sx={{
                    backgroundColor: "#fff",
                    outline: "none",
                    color: "#000",
                    position: "relative",
                    borderRadius: "8px",
                  }}
                />
                <Button
                  variant="contained"
                  sx={{
                    padding: "14px 16px !important",
                    position: "absolute",
                    left: "138px",
                    top: "1px",
                  }}
                >
                  Subscribe
                </Button>
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box sx={{ padding: "24px 15px", background: "#111" }}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item md={6} sm={6} xs={12} sx={{ textAlign:"center" }}>
             <p style={{color:"#fff",margin:"0px"}}>© Copyright <strong>Company</strong>. All Rights Reserved</p>
             <p style={{color:"#fff",margin:"0px",paddingTop:"5px"}}>Designed by <a href="#" style={{color:"#28a745",textDecoration:"none"}}>BootstrapMade</a> </p>
            </Grid>
            <Grid item md={6} sm={6} xs={12} sx={{  }}>
              <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",color
                :"#fff"
              }}>
              <InstagramIcon sx={{margin:"10px 5px"}}/>
              <FacebookIcon sx={{margin:"10px 5px"}}/>
              < TwitterIcon sx={{margin:"10px 5px"}}/>
              <LinkedInIcon sx={{margin:"10px 5px"}}/>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
