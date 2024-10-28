import {
  Accordion,
  AccordionActions,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";

const Pricing = () => {
  return (
    <>
      {/* banner part start */}
      <Box sx={{ backgroundColor: "#1bbd36" }}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid
              item
              md={12}
              sm={12}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2 style={{ color: "#fff", padding: "10px", margin: "0" }}>
                About
              </h2>
              <h4
                style={{
                  textAlign: "right",
                  color: "#fff",
                  padding: "10px",
                  margin: "0",
                }}
              >
                Home/Pricing
              </h4>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* banner part end */}
      {/* start pricing part  */}
      <Box sx={{ padding: "60px 0px", backgroundColor: "#fff" }}>
        <Container maxWidth="lg">
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Grid container>
              <Grid
                item
                md={3}
                sm={6}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card sx={{ minWidth: "250px", marginBottom: "10px" }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <h3
                        style={{
                          margin: "0px",
                          textAlign: "center",
                          padding: "20px 15px",
                          background: "#f8f8f8",
                          margin: "-20px -20px 20px -20px",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        Free
                      </h3>
                    </Typography>
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{
                        textAlign: "center",
                        fontSize: "36px",
                        fontWeight: "600",
                        color: "#1bbd36",
                        marginBottom: "20px",
                      }}
                    >
                      <sup style={{ fontSize: "20px" }}>$</sup> 0{" "}
                      <span
                        style={{
                          fontSize: "16px",
                          color: "#bababa",
                          fontWeight: "300",
                        }}
                      >
                        / month
                      </span>
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <ul
                        style={{
                          textAlign: "center",
                          margin: "0px",
                          padding: "0px",
                        }}
                      >
                        <li
                          style={{ listStyle: "none", paddingBottom: "16px" }}
                        >
                          Aida dere
                        </li>
                        <li
                          style={{ listStyle: "none", paddingBottom: "16px" }}
                        >
                          Nec feugiat nisl
                        </li>
                        <li
                          style={{ listStyle: "none", paddingBottom: "16px" }}
                        >
                          Nulla at volutpat dola
                        </li>
                        <li
                          style={{
                            listStyle: "none",
                            paddingBottom: "16px",
                            textDecoration: "line-through",
                            color: "#ccc",
                          }}
                        >
                          Pharetra massa
                        </li>
                        <li
                          style={{
                            listStyle: "none",
                            paddingBottom: "16px",
                            textDecoration: "line-through",
                            color: "#ccc",
                          }}
                        >
                          Massa ultricies mi
                        </li>
                      </ul>
                    </Typography>
                  </CardContent>

                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h3
                      style={{
                        margin: "0px",
                        textAlign: "center",
                        padding: "20px 15px",
                        background: "#f8f8f8",
                        margin: "-20px -20px -10px -20px",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      <button
                        style={{
                          padding: "8px 35px 10px 35px",
                          color: "#fff",
                          backgroundColor: "#1bbd36",
                          borderRadius: "4px",
                          border: "0px",
                          cursor: "pointer",
                          fontWeight: "600",
                        }}
                      >
                        Buy Now
                      </button>
                    </h3>
                  </Typography>
                </Card>
              </Grid>
              <Grid
                item
                md={3}
                sm={6}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card sx={{ minWidth: "250px", marginBottom: "10px" }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <h3
                        style={{
                          margin: "0px",
                          textAlign: "center",
                          padding: "20px 15px",
                          background: "#1bbd36",
                          margin: "-20px -20px 20px -20px",
                          fontSize: "16px",
                          fontWeight: "600",
                          color: "#fff",
                        }}
                      >
                        Buisness
                      </h3>
                    </Typography>
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{
                        textAlign: "center",
                        fontSize: "36px",
                        fontWeight: "600",
                        color: "#1bbd36",
                        marginBottom: "20px",
                      }}
                    >
                      <sup style={{ fontSize: "20px" }}>$</sup> 19{" "}
                      <span
                        style={{
                          fontSize: "16px",
                          color: "#bababa",
                          fontWeight: "300",
                        }}
                      >
                        / month
                      </span>
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <ul
                        style={{
                          textAlign: "center",
                          margin: "0px",
                          padding: "0px",
                        }}
                      >
                        <li
                          style={{ listStyle: "none", paddingBottom: "16px" }}
                        >
                          Aida dere
                        </li>
                        <li
                          style={{ listStyle: "none", paddingBottom: "16px" }}
                        >
                          Nec feugiat nisl
                        </li>
                        <li
                          style={{ listStyle: "none", paddingBottom: "16px" }}
                        >
                          Nulla at volutpat dola
                        </li>
                        <li
                          style={{
                            listStyle: "none",
                            paddingBottom: "16px",
                            textDecoration: "line-through",
                            color: "#ccc",
                          }}
                        >
                          Pharetra massa
                        </li>
                        <li
                          style={{
                            listStyle: "none",
                            paddingBottom: "16px",
                            textDecoration: "line-through",
                            color: "#ccc",
                          }}
                        >
                          Massa ultricies mi
                        </li>
                      </ul>
                    </Typography>
                  </CardContent>

                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h3
                      style={{
                        margin: "0px",
                        textAlign: "center",
                        padding: "20px 15px",
                        background: "#f8f8f8",
                        margin: "-20px -20px -10px -20px",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      <button
                        style={{
                          padding: "8px 35px 10px 35px",
                          color: "#fff",
                          backgroundColor: "#1bbd36",
                          borderRadius: "4px",
                          border: "0px",
                          cursor: "pointer",
                          fontWeight: "600",
                        }}
                      >
                        Buy Now
                      </button>
                    </h3>
                  </Typography>
                </Card>
              </Grid>
              <Grid
                item
                md={3}
                sm={6}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card sx={{ minWidth: "250px", marginBottom: "10px" }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <h3
                        style={{
                          margin: "0px",
                          textAlign: "center",
                          padding: "20px 15px",
                          background: "#f8f8f8",
                          margin: "-20px -20px 20px -20px",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        Developer
                      </h3>
                    </Typography>
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{
                        textAlign: "center",
                        fontSize: "36px",
                        fontWeight: "600",
                        color: "#1bbd36",
                        marginBottom: "20px",
                      }}
                    >
                      <sup style={{ fontSize: "20px" }}>$</sup> 29{" "}
                      <span
                        style={{
                          fontSize: "16px",
                          color: "#bababa",
                          fontWeight: "300",
                        }}
                      >
                        / month
                      </span>
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <ul
                        style={{
                          textAlign: "center",
                          margin: "0px",
                          padding: "0px",
                        }}
                      >
                        <li
                          style={{ listStyle: "none", paddingBottom: "16px" }}
                        >
                          Aida dere
                        </li>
                        <li
                          style={{ listStyle: "none", paddingBottom: "16px" }}
                        >
                          Nec feugiat nisl
                        </li>
                        <li
                          style={{ listStyle: "none", paddingBottom: "16px" }}
                        >
                          Nulla at volutpat dola
                        </li>
                        <li
                          style={{
                            listStyle: "none",
                            paddingBottom: "16px",
                            textDecoration: "line-through",
                            color: "#ccc",
                          }}
                        >
                          Pharetra massa
                        </li>
                        <li
                          style={{
                            listStyle: "none",
                            paddingBottom: "16px",
                            textDecoration: "line-through",
                            color: "#ccc",
                          }}
                        >
                          Massa ultricies mi
                        </li>
                      </ul>
                    </Typography>
                  </CardContent>

                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h3
                      style={{
                        margin: "0px",
                        textAlign: "center",
                        padding: "20px 15px",
                        background: "#f8f8f8",
                        margin: "-20px -20px -10px -20px",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      <button
                        style={{
                          padding: "8px 35px 10px 35px",
                          color: "#fff",
                          backgroundColor: "#1bbd36",
                          borderRadius: "4px",
                          border: "0px",
                          cursor: "pointer",
                          fontWeight: "600",
                        }}
                      >
                        Buy Now
                      </button>
                    </h3>
                  </Typography>
                </Card>
              </Grid>
              <Grid
                item
                md={3}
                sm={6}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Card sx={{ minWidth: "250px", marginBottom: "10px" }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      <h3
                        style={{
                          margin: "0px",
                          textAlign: "center",
                          padding: "20px 15px",
                          background: "#f8f8f8",
                          margin: "-20px -20px 20px -20px",
                          fontSize: "16px",
                          fontWeight: "600",
                        }}
                      >
                        Ultimate
                      </h3>
                    </Typography>
                    <Typography
                      variant="h4"
                      component="div"
                      sx={{
                        textAlign: "center",
                        fontSize: "36px",
                        fontWeight: "600",
                        color: "#1bbd36",
                        marginBottom: "20px",
                      }}
                    >
                      <sup style={{ fontSize: "20px" }}>$</sup> 49{" "}
                      <span
                        style={{
                          fontSize: "16px",
                          color: "#bababa",
                          fontWeight: "300",
                        }}
                      >
                        / month
                      </span>
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      <ul
                        style={{
                          textAlign: "center",
                          margin: "0px",
                          padding: "0px",
                        }}
                      >
                        <li
                          style={{ listStyle: "none", paddingBottom: "16px" }}
                        >
                          Aida dere
                        </li>
                        <li
                          style={{ listStyle: "none", paddingBottom: "16px" }}
                        >
                          Nec feugiat nisl
                        </li>
                        <li
                          style={{ listStyle: "none", paddingBottom: "16px" }}
                        >
                          Nulla at volutpat dola
                        </li>
                        <li
                          style={{
                            listStyle: "none",
                            paddingBottom: "16px",
                            textDecoration: "line-through",
                            color: "#ccc",
                          }}
                        >
                          Pharetra massa
                        </li>
                        <li
                          style={{
                            listStyle: "none",
                            paddingBottom: "16px",
                            textDecoration: "line-through",
                            color: "#ccc",
                          }}
                        >
                          Massa ultricies mi
                        </li>
                      </ul>
                    </Typography>
                  </CardContent>

                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    <h3
                      style={{
                        margin: "0px",
                        textAlign: "center",
                        padding: "20px 15px",
                        background: "#f8f8f8",
                        margin: "-20px -20px -10px -20px",
                        fontSize: "16px",
                        fontWeight: "600",
                      }}
                    >
                      <button
                        style={{
                          padding: "8px 35px 10px 35px",
                          color: "#fff",
                          backgroundColor: "#1bbd36",
                          borderRadius: "4px",
                          border: "0px",
                          cursor: "pointer",
                          fontWeight: "600",
                        }}
                      >
                        Buy Now
                      </button>
                    </h3>
                  </Typography>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* end pricing part */}

      {/* start Accordion part */}
      <Box sx={{ padding: "60px", backgroundColor: "#f7f7f7" }}>
        <Container maxWidth="lg">
          <Typography sx={{ paddingBottom: "30px" }}>
            <h2
              style={{
                textAlign: "center",
                textTransform: "uppercase",
                fontSize: "32px",
                fontWeight: "bold",
                marginBottom: "20px",
                paddingBottom: "20px",
                position: "relative",
                color: "#4d4643",
              }}
              className="About"
            >
              Frequently Asked Questions
            </h2>
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid container>
              <Grid item sx={12} md={12} sm={12}>
                <Accordion sx={{ marginBottom: "10px",padding:"10px" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                    sx={{color:"#343a40",fontWeight:"600"}}
                  >
                   Non consectetur a erat nam at lectus urna duis? 
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ marginBottom: "10px",padding:"10px" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                    sx={{color:"#343a40",fontWeight:"600"}}
                  >
                   Feugiat scelerisque varius morbi enim nunc? 
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                </Accordion>
                <Accordion sx={{ marginBottom: "10px",padding:"10px" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    sx={{color:"#343a40",fontWeight:"600"}}
                  >
                   Dolor sit amet consectetur adipiscing elit? 
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                  <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                  </AccordionActions>
                </Accordion>
                <Accordion sx={{ marginBottom: "10px" ,padding:"10px"}}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    sx={{color:"#343a40",fontWeight:"600"}}
                  >
                    Tempus quam pellentesque nec nam aliquam sem et tortor consequat? 
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                  <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                  </AccordionActions>
                </Accordion>
                <Accordion sx={{ marginBottom: "10px",padding:"10px" }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel3-content"
                    id="panel3-header"
                    sx={{color:"#343a40",fontWeight:"600"}}
                  >
                  Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? 
                  </AccordionSummary>
                  <AccordionDetails>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </AccordionDetails>
                  <AccordionActions>
                    <Button>Cancel</Button>
                    <Button>Agree</Button>
                  </AccordionActions>
                </Accordion>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* end accordion part */}
    </>
  );
};

export default Pricing;
