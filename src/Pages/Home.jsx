import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from "../Assests/slide-1.jpg";
import slider2 from "../Assests/slide-2.jpg";
import slider3 from "../Assests/slide-3.jpg";
import client1 from '../Assests/client-1.png';
import client2 from '../Assests/client-2.png';
import client3 from '../Assests/client-3.png';
import client4 from '../Assests/client-4.png';
import client5 from '../Assests/client-5.png';
import client6 from '../Assests/client-6.png';
import client7 from '../Assests/client-7.png';
import client8 from '../Assests/client-8.png';

import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import "./Home.css";
import DoneAllIcon from "@mui/icons-material/DoneAll";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SportsVolleyballOutlinedIcon from '@mui/icons-material/SportsVolleyballOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
const Home = () => {
  return (
    <>
      <Carousel>
        <div style={{ position: "relative", width: "100%" }}>
          <img src={slider1} style={{}} />
          <Box
            sx={{
              position: "absolute",
              top: "70%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              borderTop: "5px solid #1bbd36",
              minHeight: "300px",
              maxHeight: "500px",
              minWidth: "60%",
              background: "rgba(4, 4, 4, 0.7)",
              padding: "20px",
              color: "#fff",
            }}
          >
            <h2 style={{ fontWeight: "700", fontSize: "28px" }}>
              Welcome to Company
            </h2>
            <p style={{ textAlign: "left", marginBottom: "3rem" }}>
              Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
              est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
              mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
              repellendus deleniti vel. Minus et tempore modi architecto.
            </p>

            <Button
              variant="outlined"
              sx={{ color: "#fff", border: "2px solid #1bbd36" }}
            >
              Outlined
            </Button>
          </Box>
        </div>
        <div style={{ position: "relative", width: "100%" }}>
          <img src={slider2} style={{}} />
          <Box
            sx={{
              position: "absolute",
              top: "70%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              borderTop: "5px solid #1bbd36",
              minHeight: "300px",
              maxHeight: "500px",
              minWidth: "60%",
              background: "rgba(4, 4, 4, 0.7)",
              padding: "20px",
              color: "#fff",
            }}
          >
            <h2 style={{ fontWeight: "700", fontSize: "28px" }}>
              Welcome to Company
            </h2>
            <p style={{ textAlign: "left", marginBottom: "3rem" }}>
              Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
              est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
              mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
              repellendus deleniti vel. Minus et tempore modi architecto.
            </p>

            <Button
              variant="outlined"
              sx={{ color: "#fff", border: "2px solid #1bbd36" }}
            >
              Outlined
            </Button>
          </Box>
        </div>
        <div style={{ position: "relative", width: "100%" }}>
          <img src={slider3} style={{}} />
          <Box
            sx={{
              position: "absolute",
              top: "70%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              borderTop: "5px solid #1bbd36",
              minWidth: "60%",
              background: "rgba(4, 4, 4, 0.7)",
              padding: "20px",
              color: "#fff",
              maxHeight: "500px",
            }}
          >
            <h2 style={{ fontWeight: "700", fontSize: "28px" }}>
              Welcome to Company
            </h2>
            <p style={{ textAlign: "left", marginBottom: "3rem" }}>
              Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
              est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
              mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
              repellendus deleniti vel. Minus et tempore modi architecto.
            </p>

            <Button
              variant="outlined"
              sx={{ color: "#fff", border: "2px solid #1bbd36" }}
            >
              Outlined
            </Button>
          </Box>
        </div>
      </Carousel>
      {/* end part of carasoul */}

      {/* start of About us Part */}
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
      {/* end about us part */}
      {/* start Services part */}
     <Box  sx={{ padding: "60px 0px", backgroundColor: "#f7f7f7" }}>
     <Container
        maxWidth="lg"
       
      >
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
            Services
          </h2>
          <p style={{ textAlign: "center", color: "#4d4643" }}>
            Laborum repudiandae omnis voluptatum consequatur mollitia ea est
            voluptas ut
          </p>
          </Typography>
          <Box sx={{display:"flex",justifyContent:"center"}}>
            <Grid container sx={{}}>
              <Grid item md={4} sm={6} xs={12} sx={{display:"flex",justifyContent:"center"}}>
                <Card sx={{ maxWidth: 300,borderRadius:"0px",padding:"70px 20px 80px 20px",marginBottom:"20px" }}>
                  <CardActionArea>
                 <CardMedia sx={{display:"flex",justifyContent:"center"}}>
                 <SportsVolleyballOutlinedIcon sx={{height:"75px",fontSize:"2.5rem",color:"#47aeff"}}/>
                 </CardMedia>
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div" sx={{fontSize:"22px",fontWeight:"600",textAlign:"center",margin:"10px 0xp 15px 0px"}}>
                      Lorem Ipsum
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{textAlign:"center",fontSize:"14px",lineHeight:'24px',color:"#4d4643"}}>
                        Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item md={4} sm={6} xs={12} sx={{display:"flex",justifyContent:"center"}}>
              <Card sx={{ maxWidth: 300,borderRadius:"0px",padding:"70px 20px 80px 20px",marginBottom:"20px" }}>
                  <CardActionArea>
                 <CardMedia sx={{display:"flex",justifyContent:"center"}}>
                 <DescriptionOutlinedIcon sx={{height:"75px",fontSize:"2.5rem",color
                  :"#ffa76e;"
                 }}/>
                 </CardMedia>
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div" sx={{fontSize:"22px",fontWeight:"600",textAlign:"center",margin:"10px 0xp 15px 0px"}}>
                      Lorem Ipsum
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{textAlign:"center",fontSize:"14px",lineHeight:'24px',color:"#4d4643"}}>
                        Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item md={4} sm={6} xs={12} sx={{display:"flex",justifyContent:"center"}}>
              <Card sx={{ maxWidth: 300,borderRadius:"0px",padding:"70px 20px 80px 20px",marginBottom:"20px" }}>
                  <CardActionArea>
                 <CardMedia sx={{display:"flex",justifyContent:"center"}}>
                 <SpeedOutlinedIcon sx={{height:"75px",fontSize:"2.5rem",color:"#e80368"}}/>
                 </CardMedia>
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div" sx={{fontSize:"22px",fontWeight:"600",textAlign:"center",margin:"10px 0xp 15px 0px"}}>
                      Lorem Ipsum
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{textAlign:"center",fontSize:"14px",lineHeight:'24px',color:"#4d4643"}}>
                        Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item md={4} sm={6} xs={12} sx={{display:"flex",justifyContent:"center"}}>
              <Card sx={{ maxWidth: 300,borderRadius:"0px",padding:"70px 20px 80px 20px",marginBottom:"20px" }}>
                  <CardActionArea>
                 <CardMedia sx={{display:"flex",justifyContent:"center"}}>
                 <LayersOutlinedIcon sx={{height:"75px",fontSize:"2.5rem",color:"#ffbb2c"}}/>
                 </CardMedia>
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div" sx={{fontSize:"22px",fontWeight:"600",textAlign:"center",margin:"10px 0xp 15px 0px"}}>
                      Lorem Ipsum
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{textAlign:"center",fontSize:"14px",lineHeight:'24px',color:"#4d4643"}}>
                        Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item md={4} sm={6} xs={12} sx={{display:"flex",justifyContent:"center"}}>
              <Card sx={{ maxWidth: 300,borderRadius:"0px",padding:"70px 20px 80px 20px",marginBottom:"20px" }}>
                  <CardActionArea>
                 <CardMedia sx={{display:"flex",justifyContent:"center"}}>
                 <OndemandVideoOutlinedIcon sx={{height:"75px",fontSize:"2.5rem",color:"#ff5828"}}/>
                 </CardMedia>
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div" sx={{fontSize:"22px",fontWeight:"600",textAlign:"center",margin:"10px 0xp 15px 0px"}}>
                      Lorem Ipsum
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{textAlign:"center",fontSize:"14px",lineHeight:'24px',color:"#4d4643"}}>
                        Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
              <Grid item md={4} sm={6} xs={12} sx={{display:"flex",justifyContent:"center"}}>
              <Card sx={{ maxWidth: 300,borderRadius:"0px",padding:"70px 20px 80px 20px",marginBottom:"20px" }}>
                  <CardActionArea>
                 <CardMedia sx={{display:"flex",justifyContent:"center"}}>
                 <HolidayVillageOutlinedIcon sx={{height:"75px",fontSize:"2.5rem",color:"#11dbcf"}}/>
                 </CardMedia>
                    <CardContent>
                      <Typography gutterBottom variant="h4" component="div" sx={{fontSize:"22px",fontWeight:"600",textAlign:"center",margin:"10px 0xp 15px 0px"}}>
                      Lorem Ipsum
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{textAlign:"center",fontSize:"14px",lineHeight:'24px',color:"#4d4643"}}>
                        Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </Card>
              </Grid>
            </Grid>
          </Box>
       
      </Container>
     </Box>
     {/* end services part */}
     {/* start portfolio part */}
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
            Portfolio
          </h2>
          <Box sx={{display:"flex",justifyContent:"center"}}>
          <button className="portfolio-button">ALL</button>
          <button className="portfolio-button">APP</button>
          <button className="portfolio-button">CARD</button>
          <button className="portfolio-button">WEB</button>
          </Box>
          </Typography>

     </Container>
     </Box>
     {/* end portfolio part */}
     {/* start Clients Part */}
     <Box sx={{ padding: "60px 0px", backgroundColor: "#f7f7f7" }}>
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
    </>
  );
};

export default Home;
