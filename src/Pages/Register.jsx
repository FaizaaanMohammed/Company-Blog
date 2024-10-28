import { Box, Button, Container, Grid, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import {  toast } from 'react-toastify';


const Register = () => {
  const initialValue = {
    name:"",
    email:"",
    mobile:"",
    password:"",
    first_school:"",
    image:""
  }
  const [register,setRegister] = useState(initialValue)
  const [image,setImage] = useState()
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const onHandleClick = ()=>{
    navigate('/login')
  }

  const onHandleChange = (event)=>{
    const {name,value} = event.target;
    setRegister({...register,[name]:value})
  }
  const onPhotoHandleChange = (event)=>{
    setImage(event.target.files[0])
  }

  const onHandleSubmit = async(data)=>{
    data.preventDefault();
    const api = `https://webskitters-student.onrender.com/register`
    const formdata = new FormData();
     formdata.append('name',register.name)
     formdata.append('email',register.email)
     formdata.append('mobile',register.mobile)
     formdata.append('password',register.password)
     formdata.append('first_school',register.first_school)
     formdata.append('image',image)
     setLoading(true)
     try{
      const res = await axios.post(`${api}`,formdata)
      if(res){
        toast.success("registeration successfully")
       navigate('/login')
       setLoading(false)
      }
     }
     catch(err){
      setLoading(false)
      toast.error("unssecessfully")
      console.log(err);
     }
  }
  return (
    <>
   
      <Box sx={{ padding: "100px 0px", backgroundColor: "#1c2932" }}>
        <Container maxWidth="lg">
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} sm={8} md={6}>
              <Box
                component="form"
                sx={{
                  padding: "10px",
                  border: "1px solid black",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                }}
                display="flex"
                justifyContent="center"
                flexDirection="column"
                onSubmit={onHandleSubmit}
              >
                <h1
                  style={{ textAlign: "center", margin: "0px", color: "#000",marginBottom:"10px" }}
                >
                  Register Here!
                </h1>
                <TextField
            label="Name"
            type='text'
            name="name"
            onChange={onHandleChange}
             sx={{
              marginBottom: "8px",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
         
            <TextField
            label="Email"
            type='email'
            name="email"
            onChange={onHandleChange}
             sx={{
              marginBottom: "8px",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
         
            <TextField
            label="Mobile"
            type='number'
            name="mobile"
            onChange={onHandleChange}
             sx={{
              marginBottom: "8px",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
            <TextField
            label="Password"
            type='password'
            name="password"
            onChange={onHandleChange}
             sx={{
              marginBottom: "8px",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
           
            <TextField
            label="First_School"
            type='text'
            name="first_school"
            onChange={onHandleChange}
             sx={{
              marginBottom: "8px",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
            <TextField
            label="Photo"
            type='file'
            name="image"
            onChange={onPhotoHandleChange}
             sx={{
              marginBottom: "8px",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
          <Button  variant='contained'  disableElevation sx={{width:'90%', marginLeft: "auto",
              marginRight: "auto",backgroundColor:'#11bf9a',color:"#fff"}}  type='submit'>
            {
                  loading?(<><ThreeDots
                    visible={true}
                    height="30px"
                    width="30px"
                    color="#4fa94d"
                    radius="9"
                    ariaLabel="three-dots-loading"
                    wrapperStyle={{}}
                    wrapperClass=""
                    /></>):(
                    <div>
                    Register
                    </div>
                  )
                }
          </Button >
          <Box  display="flex"
          justifyContent="center"
          flexDirection="row"
          sx={{width:'90%',marginLeft: "auto",
            marginRight: "auto",marginBottom:'20px',position:"relative"}}>
           <h1 style={{borderTop:'1px solid black',width:'30%',marginRight:'auto'}}></h1>
            <h5 style={{top:"590px",margin:"auto"}} className='Login'>Or Login Here</h5>
            <h1 style={{borderTop:'1px solid black',width:'30%',marginLeft:'auto'}}></h1>
         </Box>
         <Button  variant='contained'  disableElevation sx={{width:'90%', marginLeft: "auto",
              marginRight: "auto",backgroundColor:'#1b2731',color:"#fff"}}  type='submit' onClick={onHandleClick}>
            Login
          </Button >
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Register;
