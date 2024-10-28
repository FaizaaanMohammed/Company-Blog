import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import LocalPostOfficeRoundedIcon from "@mui/icons-material/LocalPostOfficeRounded";
import CallRoundedIcon from "@mui/icons-material/CallRounded";

const Contact = () => {
  return (
    <>
      <Box>
        <Grid container>
          <Grid
            item
            xs={12}
            sm={12}
            lg={12}
            md={12}
            sx={{ height: "350px", marginBottom: "30px" }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.656934312288!2d88.34719067475659!3d22.55452053363379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a02774f36b48771%3A0xda68529106d3a126!2sPark%20Street%20Metro%20Station!5e0!3m2!1sen!2sin!4v1722139388794!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Grid>
        </Grid>
        {/* iframe end part */}
        {/* contact part start */}
        <Box sx={{ padding: "60px 0px" }}>
          <Container maxWidth="lg">
            <Grid
              item
              xs={12}
              sm={12}
              lg={12}
              md={12}
              sx={{
                padding: "30px",
                boxShadow: " 0px 2px 15px rgba(0, 0,0, 0.1)",
              }}
            >
              <Grid container>
                <Grid
                  item
                  md={4}
                  sm={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "15px",
                  }}
                >
                  <Box
                    sx={{
                      height: "50px",
                      width: "50px",
                      border: "1px solid #1bbd36",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "10px",
                    }}
                  >
                    <LocationOnRoundedIcon
                      sx={{ color: "#1bbd36", fontSize: "20px" }}
                    />
                  </Box>
                  <Box>
                    <h4
                      style={{
                        margin: "0",
                        fontSize: "22px",
                        fontWeight: "600",
                        marginBottom: "5px",
                        color: "#111",
                      }}
                    >
                      Location:
                    </h4>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "14px",
                        color: "#444444",
                      }}
                    >
                      A108 Adam Street <br />
                      New York, NY 535022
                    </p>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={4}
                  sm={12}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "15px",
                  }}
                >
                  <Box
                    sx={{
                      height: "50px",
                      width: "50px",
                      border: "1px solid #1bbd36",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "10px",
                    }}
                  >
                    <LocalPostOfficeRoundedIcon
                      sx={{ color: "#1bbd36", fontSize: "20px" }}
                    />
                  </Box>
                  <Box>
                    <h4
                      style={{
                        margin: "0",
                        fontSize: "22px",
                        fontWeight: "600",
                        marginBottom: "5px",
                        color: "#111",
                      }}
                    >
                      Email:
                    </h4>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "14px",
                        color: "#444444",
                      }}
                    >
                      faizanmohammed746@gmail.com <br />
                      faizanmohammed746@gmail.com
                    </p>
                  </Box>
                </Grid>
                <Grid
                  item
                  md={4}
                  sm={12}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Box
                    sx={{
                      height: "50px",
                      width: "50px",
                      border: "1px solid #1bbd36",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: "10px",
                    }}
                  >
                    <CallRoundedIcon
                      sx={{ color: "#1bbd36", fontSize: "20px" }}
                    />
                  </Box>
                  <Box>
                    <h4
                      style={{
                        margin: "0",
                        fontSize: "22px",
                        fontWeight: "600",
                        marginBottom: "5px",
                        color: "#111",
                      }}
                    >
                      Call:
                    </h4>
                    <p
                      style={{
                        margin: "0",
                        fontSize: "14px",
                        color: "#444444",
                      }}
                    >
                      +91 6203477309 <br />
                      +91 6203477309
                    </p>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </Box>
        {/* contact part end */}
        {/* form part start */}
        <Box sx={{ padding: "60px 0px" }}>
          <Container maxWidth="lg">
            <Grid container>
              <Grid
                item
                md={12}
                sx={{
                  padding: "30px",
                  boxShadow: "0 0 24px 0 rgba(0, 0, 0, 0.12)",
                  width: "100%",
                }}
              >
                <Typography variant="form">
                  <Grid container>
                    <Grid item md={12} sm={12} sx={{width:"100%"}}>
                      <TextField
                        id="outlined-basic"
                        label="your Name"
                        variant="outlined"
                        sx={{
                          width: "100%",
                          marginBottom: "10px",
                        }}
                      />
                    </Grid>
                    <Grid item md={12} sm={12} sx={{width:"100%"}}>
                      <TextField
                        id="outlined-basic"
                        label="Your Email"
                        variant="outlined"
                        sx={{ width: "100%",marginBottom: "10px" }}
                      />
                    </Grid>
                    <Grid item md={12} sm={12} sx={{width:"100%"}}>
                      <TextField
                        id="outlined-basic"
                        label="Subject"
                        variant="outlined"
                        sx={{ width: "100%",marginBottom: "10px" }}
                      />
                    </Grid>
                    <Grid item md={12} sm={12} sx={{width:"100%"}}>
                      <TextField
                        id="outlined-multiline-static"
                        label="Message"
                        multiline
                        rows={4}
                        defaultValue="Write Your Message Here..."
                        sx={{  width: "100%",marginBottom: "10px" }}
                      />
                    </Grid>
                    <Box sx={{display:"flex",justifyContent:"center",width:"100%"}}>
                    <Button variant="contained">Send Message</Button>
                    </Box>
                  </Grid>
                </Typography>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
};

export default Contact;
