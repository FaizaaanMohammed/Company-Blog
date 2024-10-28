import { Box, Card, CardActionArea, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import DoneAllIcon from "@mui/icons-material/DoneAll";
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import SportsVolleyballOutlinedIcon from '@mui/icons-material/SportsVolleyballOutlined';
import SpeedOutlinedIcon from '@mui/icons-material/SpeedOutlined';
import LayersOutlinedIcon from '@mui/icons-material/LayersOutlined';
import OndemandVideoOutlinedIcon from '@mui/icons-material/OndemandVideoOutlined';
import HolidayVillageOutlinedIcon from '@mui/icons-material/HolidayVillageOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import EventNoteOutlinedIcon from '@mui/icons-material/EventNoteOutlined';
import FormatPaintOutlinedIcon from '@mui/icons-material/FormatPaintOutlined';
import StorageOutlinedIcon from '@mui/icons-material/StorageOutlined';
import GradientOutlinedIcon from '@mui/icons-material/GradientOutlined';
import FilePresentOutlinedIcon from '@mui/icons-material/FilePresentOutlined';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import AnchorOutlinedIcon from '@mui/icons-material/AnchorOutlined';
import DiscFullOutlinedIcon from '@mui/icons-material/DiscFullOutlined';
import SettingsInputAntennaOutlinedIcon from '@mui/icons-material/SettingsInputAntennaOutlined';
import FingerprintOutlinedIcon from '@mui/icons-material/FingerprintOutlined';

const Service = () => {
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
                Home/Service
              </h4>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* banner part end */}
      {/* start Services part */}
     <Box  sx={{ padding: "60px 0px", backgroundColor: "#f7f7f7" }}>
     <Container
        maxWidth="lg"
       
      >
        
          <Box sx={{display:"flex",justifyContent:"center"}}>
            <Grid container sx={{}}>
              <Grid item md={4} sm={6} xs={12} sx={{display:"flex",justifyContent:"center"}}>
                <Card sx={{ maxWidth: 320,borderRadius:"0px",padding:"70px 20px 80px 20px",marginBottom:"20px" }}>
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
              <Card sx={{ maxWidth: 320,borderRadius:"0px",padding:"70px 20px 80px 20px",marginBottom:"20px" }}>
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
              <Card sx={{ maxWidth: 320,borderRadius:"0px",padding:"70px 20px 80px 20px",marginBottom:"20px" }}>
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
              <Card sx={{ maxWidth: 320,borderRadius:"0px",padding:"70px 20px 80px 20px",marginBottom:"20px" }}>
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
              <Card sx={{ maxWidth: 320,borderRadius:"0px",padding:"70px 20px 80px 20px",marginBottom:"20px" }}>
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
              <Card sx={{ maxWidth: 320,borderRadius:"0px",padding:"70px 20px 80px 20px",marginBottom:"20px" }}>
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
     {/* features part start */}
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
            Features
          </h2>
          <p style={{ textAlign: "center", color: "#4d4643" }}>
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.
          </p>
          </Typography>
          <Grid container >
           <Grid item md={3} sm={4} xs={12} sx={{marginBottom:"10px"}}>
             <Card sx={{maxHeight:"72px",margin:"5px",padding:"20px 0px",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
           <StorefrontOutlinedIcon sx={{fontSize:"32px",color:"#ffbb2c"}}/>
           <h3 style={{margin:"0",paddingLeft:"10px"}}>
           Lorem Ipsum</h3>
             </Card>
           </Grid>
           <Grid item md={3} sm={4} xs={12} sx={{marginBottom:"10px"}}>
             <Card sx={{maxHeight:"72px",margin:"5px",padding:"20px",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
           <InsertChartOutlinedSharpIcon sx={{fontSize:"32px",color:"#5578ff"}}/>
           <h3 style={{margin:"0",paddingLeft:"10px"}}>
           Dolor Sitema</h3>
             </Card>
           </Grid>
           <Grid item md={3} sm={4} xs={12} sx={{marginBottom:"10px"}}>
             <Card sx={{maxHeight:"72px",margin:"5px",padding:"20px",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
           <EventNoteOutlinedIcon sx={{fontSize:"32px",color:"#e80368"}}/>
           <h3 style={{margin:"0",paddingLeft:"10px"}}>
           Lorem Ipsum</h3>
             </Card>
           </Grid>
           <Grid item md={3} sm={4} xs={12} sx={{marginBottom:"10px"}}>
             <Card sx={{maxHeight:"72px",margin:"5px",padding:"20px",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
           <FormatPaintOutlinedIcon sx={{fontSize:"32px",color:"#e361ff"}}/>
           <h3 style={{margin:"0",paddingLeft:"10px"}}>
           Magni Dolores</h3>
             </Card>
           </Grid>
           <Grid item md={3} sm={4} xs={12} sx={{marginBottom:"10px"}}>
             <Card sx={{maxHeight:"72px",margin:"5px",padding:"20px",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
           <StorageOutlinedIcon sx={{fontSize:"32px",color:"#47aeff"}}/>
           <h3 style={{margin:"0",paddingLeft:"10px"}}>
          
Nemo Enim</h3>
             </Card>
           </Grid>
           <Grid item md={3} sm={4} xs={12} sx={{marginBottom:"10px"}}>
             <Card sx={{maxHeight:"72px",margin:"5px",padding:"20px",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
           <GradientOutlinedIcon sx={{fontSize:"32px",color:"#ffa76e"}}/>
           <h3 style={{margin:"0",paddingLeft:"10px"}}>
           
Eiusmod Tempor</h3>
             </Card>
           </Grid>
           <Grid item md={3} sm={4} xs={12} sx={{marginBottom:"10px"}}>
             <Card sx={{maxHeight:"72px",margin:"5px",padding:"20px",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
           <FilePresentOutlinedIcon sx={{fontSize:"32px",color:"#11dbcf"}}/>
           <h3 style={{margin:"0",paddingLeft:"10px"}}>
           
Midela Teren</h3>
             </Card>
           </Grid>
           <Grid item md={3} sm={4} xs={12} sx={{marginBottom:"10px"}}>
             <Card sx={{maxHeight:"72px",margin:"5px",padding:"20px",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
           <LocalOfferOutlinedIcon sx={{fontSize:"32px",color:"#4233ff"}}/>
           <h3 style={{margin:"0",paddingLeft:"10px"}}>
           Pira Neve</h3>
             </Card>
           </Grid>
           <Grid item md={3} sm={4} xs={12} sx={{marginBottom:"10px"}}>
             <Card sx={{maxHeight:"72px",margin:"5px",padding:"20px",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
           <AnchorOutlinedIcon sx={{fontSize:"32px",color:"#b2904f"}}/>
           <h3 style={{margin:"0",paddingLeft:"10px"}}>
           
Dirada Pack</h3>
             </Card>
           </Grid>
           <Grid item md={3} sm={4} xs={12} sx={{marginBottom:"10px"}}>
             <Card sx={{maxHeight:"72px",margin:"5px",padding:"20px",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
           <DiscFullOutlinedIcon sx={{fontSize:"32px",color:"#b20969"}}/>
           <h3 style={{margin:"0",paddingLeft:"10px"}}>
          
Moton Ideal</h3>
             </Card>
           </Grid>
           <Grid item md={3} sm={4} xs={12} sx={{marginBottom:"10px"}}>
             <Card sx={{maxHeight:"72px",margin:"5px",padding:"20px",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
           <SettingsInputAntennaOutlinedIcon sx={{fontSize:"32px",color:"#ff5828"}}/>
           <h3 style={{margin:"0",paddingLeft:"10px"}}>
           Verdo Park</h3>
             </Card>
           </Grid>
           <Grid item md={3} sm={4} xs={12} sx={{marginBottom:"10px"}}>
             <Card sx={{maxHeight:"72px",margin:"5px",padding:"20px",display:"flex",justifyContent:"flex-start",alignItems:"center"}}>
           <FingerprintOutlinedIcon sx={{fontSize:"32px",color:"#29cc61"}}/>
           <h3 style={{margin:"0",paddingLeft:"10px"}}>
          
Flavor Nivelanda</h3>
             </Card>
           </Grid>
          </Grid>
     </Container>
     </Box>
     {/* end features part  */}
    </>
  )
}

export default Service
