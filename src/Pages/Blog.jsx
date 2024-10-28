import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import picture from "../Assests/blog-1.jpg";
import picture2 from "../Assests/blog-2.jpg";
import picture3 from "../Assests/blog-3.jpg";
import picture4 from "../Assests/blog-4.jpg";
import team2 from '../Assests/team-2.jpg'
import PersonIcon from "@mui/icons-material/Person";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import { useAuth } from "../Auth/Context";

const Blog = () => {
  const [auth,setAuth] = useAuth()
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
                Blog
              </h2>
              <h4
                style={{
                  textAlign: "right",
                  color: "#fff",
                  padding: "10px",
                  margin: "0",
                }}
              >
                Home/Blog
              </h4>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* banner part end */}
      {/* blog part start  */}
      <Box sx={{ padding: "40px 0px", backgroundColor: "#fff" }}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item sm={12} xs={12} md={8} sx={{}}>
              <Card sx={{ maxWidth: "100%" ,marginBottom:"15px"}}>
                <CardMedia
                  sx={{ height: "400px", minWidth: "100%" }}
                  image={picture}
                  title="green iguana"
                />
                <CardContent sx={{ padding: "16px 16px 0px 16px" }}>
                  <Typography
                    gutterBottom
                    variant="h2"
                    component="div"
                    sx={{
                      fontSize: "28px",
                      fontWeight: "bold",
                      lineHeight: "1.2",
                      color: "#111",
                    }}
                  >
                    Dolorum optio tempore voluptas dignissimos cumque fuga qui
                    quibusdam quia reiciendis
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      width: "80%",
                      minHeight: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <PersonIcon />
                      <a
                        href=""
                        style={{
                          textDecoration: "none",
                          color: "#5e5e5e",
                          paddingLeft: "5px",
                        }}
                      >
                        Jhon Doe
                      </a>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: "20px",
                      }}
                    >
                      <AccessTimeOutlinedIcon />
                      <a
                        href=""
                        style={{
                          textDecoration: "none",
                          color: "#5e5e5e",
                          paddingLeft: "5px",
                        }}
                      >
                        Jan 1, 2020
                      </a>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: "20px",
                      }}
                    >
                      <CommentOutlinedIcon />
                      <a
                        href=""
                        style={{
                          textDecoration: "none",
                          color: "#5e5e5e",
                          paddingLeft: "5px",
                        }}
                      >
                        12 Comments
                      </a>
                    </Box>
                  </Box>
                  <p>
                    Similique neque nam consequuntur ad non maxime aliquam quas.
                    Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                    nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est
                    ea dolorem doloremque deleniti aperiam unde soluta. Est cum
                    et quod quos aut ut et sit sunt. Voluptate porro consequatur
                    assumenda perferendis dolore.
                  </p>
                </CardContent>
                <CardActions sx={{ marginLeft: "43%" }}>
                  <Button  variant="contained" sx={{minWidth:"130px"}}>
                    Read More
                  </Button>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: "100%" ,marginBottom:"15px"}}>
                <CardMedia
                  sx={{ height: "400px", minWidth: "100%" }}
                  image={picture2}
                  title="green iguana"
                />
                <CardContent sx={{ padding: "16px 16px 0px 16px" }}>
                  <Typography
                    gutterBottom
                    variant="h2"
                    component="div"
                    sx={{
                      fontSize: "28px",
                      fontWeight: "bold",
                      lineHeight: "1.2",
                      color: "#111",
                    }}
                  >
                    Dolorum optio tempore voluptas dignissimos cumque fuga qui
                    quibusdam quia reiciendis
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      width: "80%",
                      minHeight: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <PersonIcon />
                      <a
                        href=""
                        style={{
                          textDecoration: "none",
                          color: "#5e5e5e",
                          paddingLeft: "5px",
                        }}
                      >
                        Jhon Doe
                      </a>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: "20px",
                      }}
                    >
                      <AccessTimeOutlinedIcon />
                      <a
                        href=""
                        style={{
                          textDecoration: "none",
                          color: "#5e5e5e",
                          paddingLeft: "5px",
                        }}
                      >
                        Jan 1, 2020
                      </a>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: "20px",
                      }}
                    >
                      <CommentOutlinedIcon />
                      <a
                        href=""
                        style={{
                          textDecoration: "none",
                          color: "#5e5e5e",
                          paddingLeft: "5px",
                        }}
                      >
                        12 Comments
                      </a>
                    </Box>
                  </Box>
                  <p>
                    Similique neque nam consequuntur ad non maxime aliquam quas.
                    Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                    nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est
                    ea dolorem doloremque deleniti aperiam unde soluta. Est cum
                    et quod quos aut ut et sit sunt. Voluptate porro consequatur
                    assumenda perferendis dolore.
                  </p>
                </CardContent>
                <CardActions sx={{ marginLeft: "43%" }}>
                  <Button  variant="contained" sx={{minWidth:"130px"}}>
                    Read More
                  </Button>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: "100%" ,marginBottom:"15px"}}>
                <CardMedia
                  sx={{ height: "400px", minWidth: "100%" }}
                  image={picture3}
                  title="green iguana"
                />
                <CardContent sx={{ padding: "16px 16px 0px 16px" }}>
                  <Typography
                    gutterBottom
                    variant="h2"
                    component="div"
                    sx={{
                      fontSize: "28px",
                      fontWeight: "bold",
                      lineHeight: "1.2",
                      color: "#111",
                    }}
                  >
                    Dolorum optio tempore voluptas dignissimos cumque fuga qui
                    quibusdam quia reiciendis
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      width: "80%",
                      minHeight: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <PersonIcon />
                      <a
                        href=""
                        style={{
                          textDecoration: "none",
                          color: "#5e5e5e",
                          paddingLeft: "5px",
                        }}
                      >
                        Jhon Doe
                      </a>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: "20px",
                      }}
                    >
                      <AccessTimeOutlinedIcon />
                      <a
                        href=""
                        style={{
                          textDecoration: "none",
                          color: "#5e5e5e",
                          paddingLeft: "5px",
                        }}
                      >
                        Jan 1, 2020
                      </a>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: "20px",
                      }}
                    >
                      <CommentOutlinedIcon />
                      <a
                        href=""
                        style={{
                          textDecoration: "none",
                          color: "#5e5e5e",
                          paddingLeft: "5px",
                        }}
                      >
                        12 Comments
                      </a>
                    </Box>
                  </Box>
                  <p>
                    Similique neque nam consequuntur ad non maxime aliquam quas.
                    Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                    nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est
                    ea dolorem doloremque deleniti aperiam unde soluta. Est cum
                    et quod quos aut ut et sit sunt. Voluptate porro consequatur
                    assumenda perferendis dolore.
                  </p>
                </CardContent>
                <CardActions sx={{ marginLeft: "43%" }}>
                  <Button  variant="contained" sx={{minWidth:"130px"}}>
                    Read More
                  </Button>
                </CardActions>
              </Card>
              <Card sx={{ maxWidth: "100%" ,marginBottom:"15px"}}>
                <CardMedia
                  sx={{ height: "400px", minWidth: "100%" }}
                  image={picture4}
                  title="green iguana"
                />
                <CardContent sx={{ padding: "16px 16px 0px 16px" }}>
                  <Typography
                    gutterBottom
                    variant="h2"
                    component="div"
                    sx={{
                      fontSize: "28px",
                      fontWeight: "bold",
                      lineHeight: "1.2",
                      color: "#111",
                    }}
                  >
                    Dolorum optio tempore voluptas dignissimos cumque fuga qui
                    quibusdam quia reiciendis
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-start",
                      alignItems: "center",
                      width: "80%",
                      minHeight: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <PersonIcon />
                      <a
                        href=""
                        style={{
                          textDecoration: "none",
                          color: "#5e5e5e",
                          paddingLeft: "5px",
                        }}
                      >
                        Jhon Doe
                      </a>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: "20px",
                      }}
                    >
                      <AccessTimeOutlinedIcon />
                      <a
                        href=""
                        style={{
                          textDecoration: "none",
                          color: "#5e5e5e",
                          paddingLeft: "5px",
                        }}
                      >
                        Jan 1, 2020
                      </a>
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        paddingLeft: "20px",
                      }}
                    >
                      <CommentOutlinedIcon />
                      <a
                        href=""
                        style={{
                          textDecoration: "none",
                          color: "#5e5e5e",
                          paddingLeft: "5px",
                        }}
                      >
                        12 Comments
                      </a>
                    </Box>
                  </Box>
                  <p>
                    Similique neque nam consequuntur ad non maxime aliquam quas.
                    Quibusdam animi praesentium. Aliquam et laboriosam eius aut
                    nostrum quidem aliquid dicta. Et eveniet enim. Qui velit est
                    ea dolorem doloremque deleniti aperiam unde soluta. Est cum
                    et quod quos aut ut et sit sunt. Voluptate porro consequatur
                    assumenda perferendis dolore.
                  </p>
                </CardContent>
                <CardActions sx={{ marginLeft: "43%" }}>
                  <Button  variant="contained" sx={{minWidth:"130px"}}>
                    Read More
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              sm={12}
              xs={12}
              md={4}
              sx={{  padding: "30px" }}
            >
            <Card sx={{ maxWidth: "100%",padding:"20px 20px 0px 20px" }}>
                <CardMedia
                  sx={{ height: "120px", width:"120px",borderRadius:"50%",margin:"auto"}}
                  image={team2}
                  title="green iguana"
                />
                <CardContent sx={{ padding: "16px 16px 0px 16px" }}>
                  <Typography
                    gutterBottom
                    variant="h2"
                    component="div"
                    sx={{
                      fontSize: "28px",
                      fontWeight: "bold",
                      lineHeight: "1.2",
                      color: "#111",
                      textAlign:"center"
                    }}
                  >
                    {auth?.user?.name}
                  </Typography>
                  <Box
                    sx={{
                      textAlign:"center",
                      
                    }}
                  >
                   <h2 style={{margin:"0px",}}>Web Developer</h2>
                  </Box>
                  <p>
                   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam atque ullam quas aspernatur placeat enim natus perspiciatis similique obcaecati hic?
                  </p>
                </CardContent>
                
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Blog;
