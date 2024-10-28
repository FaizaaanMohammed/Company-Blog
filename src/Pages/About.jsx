import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import team1 from '../Assests/team-1.jpg'
import team2 from '../Assests/team-2.jpg'
import team3 from '../Assests/team-3.jpg'
import team4 from '../Assests/team-4.jpg'
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './About.css'
import client1 from '../Assests/client-1.png';
import client2 from '../Assests/client-2.png';
import client3 from '../Assests/client-3.png';
import client4 from '../Assests/client-4.png';
import client5 from '../Assests/client-5.png';
import client6 from '../Assests/client-6.png';
import client7 from '../Assests/client-7.png';
import client8 from '../Assests/client-8.png';

const About = () => {
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
                Home/About
              </h4>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* banner part end */}
      {/* start about part */}
      <Container maxWidth="lg" sx={{ padding: "60px 0px" }}>
        <Typography>
          <h2
            style={{
              textAlign: "center",
              textTransform: "uppercase",
              fontSize: "32px",
              fontWeight: "bold",
              marginBottom: "20px",
              paddingBottom: "20px",
              position: "relative",
            }}
            className="About"
          >
            About Us
          </h2>
        </Typography>
        <Box>
          <Grid container>
            <Grid item md={6} xs={12} sx={{ padding: "0px 15px" }}>
              <h2
                style={{
                  fontSize: "42px",
                  fontWeight: "700",
                  textTransform: "uppercase",
                  lineHeight: "60px",
                  marginBottom: "20px",
                  color: "#4d4643",
                }}
              >
                Eum ipsam laborum deleniti velitena
              </h2>
              <h3
                style={{
                  fontWeight: "600",
                  fontSize: "24px",
                  lineHeight: "32px",
                  color: "#4d4643",
                }}
              >
                Voluptatem dignissimos provident quasi corporis voluptates sit
                assum perenda sruen jonee trave
              </h3>
            </Grid>
            <Grid item md={6} xs={12} sx={{ padding: "0px 15px" }}>
              <p style={{ marginBottom: "1rem" }}>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum
              </p>
              <ul>
                <li
                  style={{
                    position: "relative",
                    listStyle: "none",
                    paddingTop: "10px",
                  }}
                >
                  <DoneAllIcon
                    sx={{
                      color: "#1bbd36",
                      position: "absolute",
                      left: "-38px",
                    }}
                  />
                  Ullamco laboris nisi ut aliquip ex ea commodo consequa
                </li>
                <li
                  style={{
                    position: "relative",
                    listStyle: "none",
                    paddingTop: "10px",
                  }}
                >
                  <DoneAllIcon
                    sx={{
                      color: "#1bbd36",
                      position: "absolute",
                      left: "-38px",
                    }}
                  />
                  Duis aute irure dolor in reprehenderit in voluptate velit
                </li>
                <li
                  style={{
                    position: "relative",
                    listStyle: "none",
                    paddingTop: "10px",
                  }}
                >
                  <DoneAllIcon
                    sx={{
                      color: "#1bbd36",
                      position: "absolute",
                      left: "-38px",
                    }}
                  />
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in
                </li>
              </ul>
              <p style={{ color: "#4d4643" }}>
                <i>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </i>
              </p>
            </Grid>
          </Grid>
        </Box>
      </Container>
      {/* end about part */}
      {/* our Team part start */}
      <Box sx={{ padding: "60px 0px", backgroundColor: "#f7f7f7" }}>
        <Container maxWidth="lg">
          <Typography sx={{padding:"10px 0px"}}>
            <h2
              style={{
                textAlign: "center",
                textTransform: "uppercase",
                fontSize: "32px",
                fontWeight: "bold",
                marginBottom: "20px",
                paddingBottom: "20px",
                position: "relative",
              }}
              className="About"
            >
              Our Team
            </h2>
            <p style={{ textAlign: "center", color: "#4d4643" }}>
              Magnam dolores commodi suscipit. Necessitatibus eius consequatur
              ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
              quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
              Quia fugiat sit in iste officiis commodi quidem hic quas.
            </p>
          </Typography>
          <Box>
            <Grid container>
              <Grid item md={3} sm={6} xs={12} sx={{display:"flex",justifyContent:"center"}}>
                <Card
                className="team-card"
                  sx={{
                    minWidth: 240,
                    borderRadius: "8px",
                    marginBottom: "20px",
                    position:"relative"
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      sx={{ height: 270,backgroundPosition:"top",backgroundSize:"cover"}}
                      image={team1}
                      title="green iguana"
                    />

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        sx={{
                          fontSize: "22px",
                          fontWeight: "600",
                          textAlign: "center",
                          margin: "10px 0xp 15px 0px",
                        }}
                      >
                        <h4 style={{margin:"0px"}}>Walter White</h4>
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          textAlign: "center",
                          fontSize: "14px",
                          lineHeight: "24px",
                          color: "#4d4643",
                        }}
                      >
                        Chief Executive Officer
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <Box className="about-icon" sx={{padding:"10px 0px",width:"100%",position:'absolute',top:"232px",left:"0px",display:"flex",justifyContent:"space-around",alignItems:"center",backgroundColor:"#f7f7f7"}}>
                  <TwitterIcon sx={{fontSize:"18px"}}/>
                  <InstagramIcon sx={{fontSize:"18px"}}/>
                  <FacebookIcon sx={{fontSize:"18px"}}/>
                  <LinkedInIcon sx={{fontSize:"18px"}}/>
                </Box>
                </Card>
              </Grid>
              <Grid item md={3} sm={6} xs={12} sx={{display:"flex",justifyContent:"center"}}>
                <Card
                 className="team-card"
                  sx={{
                    minWidth: 240,
                    borderRadius: "8px",
                    marginBottom: "20px",
                    position:"relative"
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      sx={{ height: 270,backgroundPosition:"top",backgroundSize:"cover"}}
                      image={team2}
                      title="green iguana"
                    />

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        sx={{
                          fontSize: "22px",
                          fontWeight: "600",
                          textAlign: "center",
                          margin: "10px 0xp 15px 0px",
                        }}
                      >
                        <h4 style={{margin:"0px"}}>Sarah Jhonson</h4>
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          textAlign: "center",
                          fontSize: "14px",
                          lineHeight: "24px",
                          color: "#4d4643",
                        }}
                      >
                       Product Manager
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <Box className="about-icon" sx={{padding:"10px 0px",width:"100%",position:'absolute',top:"232px",left:"0px",display:"flex",justifyContent:"space-around",alignItems:"center",backgroundColor:"#f7f7f7"}}>
                  <TwitterIcon sx={{fontSize:"18px"}}/>
                  <InstagramIcon sx={{fontSize:"18px"}}/>
                  <FacebookIcon sx={{fontSize:"18px"}}/>
                  <LinkedInIcon sx={{fontSize:"18px"}}/>
                </Box>
                </Card>
              </Grid>
              <Grid item md={3} sm={6} xs={12} sx={{display:"flex",justifyContent:"center"}}>
                <Card
                 className="team-card"
                  sx={{
                    minWidth: 240,
                    borderRadius: "8px",
                    marginBottom: "20px",
                    position:"relative"
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      sx={{ height: 270,backgroundPosition:"top",backgroundSize:"cover"}}
                      image={team3}
                      title="green iguana"
                    />

                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        sx={{
                          fontSize: "22px",
                          fontWeight: "600",
                          textAlign: "center",
                          margin: "10px 0xp 15px 0px",
                        }}
                      >
                        <h4 style={{margin:"0px"}}>William Anderson</h4>
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          textAlign: "center",
                          fontSize: "14px",
                          lineHeight: "24px",
                          color: "#4d4643",
                        }}
                      >
                       CTO
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <Box className="about-icon" sx={{padding:"10px 0px",width:"100%",position:'absolute',top:"232px",left:"0px",display:"flex",justifyContent:"space-around",alignItems:"center",backgroundColor:"#f7f7f7"}}>
                  <TwitterIcon sx={{fontSize:"18px"}}/>
                  <InstagramIcon sx={{fontSize:"18px"}}/>
                  <FacebookIcon sx={{fontSize:"18px"}}/>
                  <LinkedInIcon sx={{fontSize:"18px"}}/>
                </Box>
                </Card>
              </Grid>
              <Grid item md={3} sm={6} xs={12} sx={{display:"flex",justifyContent:"center"}}>
                <Card
                className="team-card"
                  sx={{
                    minWidth: 240,
                    borderRadius: "8px",
                    marginBottom: "20px",
                    position:"relative"
                  }}
                >
                  <CardActionArea>
                    <CardMedia
                      sx={{ height: 270,backgroundPosition:"top",backgroundSize:"cover"}}
                      image={team4}
                      title="green iguana"
                      
                    />
                    <CardContent>
                      <Typography
                        gutterBottom
                        variant="h4"
                        component="div"
                        sx={{
                          fontSize: "22px",
                          fontWeight: "600",
                          textAlign: "center",
                          margin: "10px 0xp 15px 0px",
                        }}
                      >
                        <h4 style={{margin:"0px"}}>Amanda Jepson</h4>
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                          textAlign: "center",
                          fontSize: "14px",
                          lineHeight: "24px",
                          color: "#4d4643",
                        }}
                      >
                      Accountant
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <Box className="about-icon" sx={{padding:"10px 0px",width:"100%",position:'absolute',top:"232px",left:"0px",display:"flex",justifyContent:"space-around",alignItems:"center",backgroundColor:"#f7f7f7"}}>
                  <TwitterIcon sx={{fontSize:"18px"}}/>
                  <InstagramIcon sx={{fontSize:"18px"}}/>
                  <FacebookIcon sx={{fontSize:"18px"}}/>
                  <LinkedInIcon sx={{fontSize:"18px"}}/>
                </Box>
                </Card>
                
              </Grid>
              
            </Grid>
          </Box>
        </Container>
      </Box>
      {/* our team part end */}
      {/* client part start */}
      <Box sx={{ padding: "60px 0px", backgroundColor: "#fff" }}>
     <Container maxWidth="lg">
     <Typography sx={{paddingBottom:"30px"}}>
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
            Clients
          </h2>
          
          </Typography>
          <Box>
            <Grid container>
             <Grid item md={3} sm={4} xs={6} sx={{borderTop:"1px solid #000",borderRight:"1px solid #000",borderLeft:"1px solid #000",padding:"20px",display:"flex",justifyContent:"center",alignItems:"center",padding:"20px"}} className="client-img">
              <img src={client1} alt="" style={{height:"36px",filter:"grayscale(100%)"}} className="client-img"/>
             </Grid>
             <Grid item md={3} sm={4} xs={6} sx={{borderTop:"1px solid #000",borderRight:"1px solid #000",padding:"20px",padding:"20px",height:"100px",display:"flex",justifyContent:"center",alignItems:"center"}} className="client-img">
             <img src={client2} alt="" style={{height:"36px",filter:"grayscale(100%)"}} className="client-img"/>
             </Grid>
             <Grid item md={3} sm={4} xs={6} sx={{borderTop:"1px solid #000",borderRight:"1px solid #000",padding:"20px",padding:"20px",height:"100px",display:"flex",justifyContent:"center",alignItems:"center"}} className="client-img">
             <img src={client3} alt="" style={{height:"36px",filter:"grayscale(100%)"}} className="client-img"/>
             </Grid>
             <Grid item md={3} sm={4} xs={6} sx={{borderTop:"1px solid #000",borderRight:"1px solid #000",padding:"20px",padding:"20px",height:"100px",display:"flex",justifyContent:"center",alignItems:"center"}} className="client-img">
             <img src={client4} alt="" style={{height:"36px",filter:"grayscale(100%)"}} className="client-img"/>
             </Grid>
             <Grid item md={3} sm={4} xs={6} sx={{borderTop:"1px solid #000",borderRight:"1px solid #000",borderLeft:"1px solid #000",borderBottom:"1px solid #000",padding:"20px",padding:"20px",height:"100px",display:"flex",justifyContent:"center",alignItems:"center"}} className="client-img">
             <img src={client5} alt="" style={{height:"36px",filter:"grayscale(100%)"}} className="client-img"/>
             </Grid>
             <Grid item md={3} sm={4} xs={6} sx={{borderTop:"1px solid #000",borderRight:"1px solid #000",padding:"20px",padding:"20px",height:"100px",display:"flex",justifyContent:"center",alignItems:"center",borderBottom:"1px solid #000",}} className="client-img">
             <img src={client6} alt="" style={{height:"36px",filter:"grayscale(100%)"}} className="client-img"/>
             </Grid>
             <Grid item md={3} sm={4} xs={6} sx={{borderTop:"1px solid #000",borderRight:"1px solid #000",padding:"20px",padding:"20px",height:"100px",display:"flex",justifyContent:"center",alignItems:"center",borderBottom:"1px solid #000",}} className="client-img">
             <img src={client7} alt="" style={{height:"36px",filter:"grayscale(100%)"}} className="client-img"/>
             </Grid>
             <Grid item md={3} sm={4} xs={6} sx={{borderTop:"1px solid #000",borderRight:"1px solid #000",padding:"20px",height:"100px",display:"flex",justifyContent:"center",alignItems:"center",borderBottom:"1px solid #000",}} className="client-img">
             <img src={client8} alt="" style={{height:"36px",filter:"grayscale(100%)"}} className="client-img"/>
             </Grid>
            </Grid>
          </Box>
     </Container>
     </Box>
     {/* client part end */}
    </>
  );
};

export default About;
