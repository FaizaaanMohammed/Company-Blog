import { Email } from '@mui/icons-material'
import { Box, Button, Container, Grid, TextField } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Auth/Context'
import { toast } from 'react-toastify'
import { ThreeDots } from 'react-loader-spinner'

const Login = () => {
  const initialValue = {
    email:"",
    password:""
  }
  const [login,setLogin] = useState(initialValue)
  const navigate = useNavigate()
  const [auth,setAuth] = useAuth()
  const [loading,setLoading] = useState(false)
  const onhandleClick = ()=>{
    navigate('/register')
  }

  const onHandleChange  = (event)=>{
    const {name,value} = event.target;
    setLogin({...login,[name]:value})
  }

  const onHandleSubmit = async(data)=>{
    data.preventDefault();
    const api = `https://webskitters-student.onrender.com/login`
    setLoading(true)
    try{
     const res = await axios.post(`${api}`,login)
     localStorage.setItem('auth',JSON.stringify(res?.data))
     if(res){
       setAuth(
        {
          ...auth,
          user:res?.data?.user,
          token:res?.data?.token
        }
       )
       toast.success('login Successfully')
       navigate('/blog')
       setLoading(false)
     }
    }
    catch(err){
      setLoading(false)
      toast.error('login Unseccfully')
      console.log(err);
    }
  }

  return (
    <>
      <Box sx={{padding:"100px 0px",backgroundColor:"#1c2932",minHeight:"80vh"}}>
      <Container maxWidth="lg">
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid item xs={12} sm={8} md={4}>
              <Box
                component="form"
                onSubmit={onHandleSubmit}
                sx={{
                  padding: "10px",
                  border: "1px solid black",
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                }}
                display="flex"
                justifyContent="center"
                flexDirection="column"
              >
                <h1
                  style={{ textAlign: "center", margin: "0px", color: "#000",marginBottom:"10px" }}
                >
                  Login Here!
                </h1>
              
            <TextField
            label="Email"
            type='email'
            name='email'
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
            name='password'
            onChange={onHandleChange}
             sx={{
              marginBottom: "8px",
              width: "90%",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          />
            
          <Button  variant='contained'  disableElevation sx={{width:'90%', marginLeft: "auto",
              marginRight: "auto",backgroundColor:'#11bf9a',color:"#fff"}}  type='submit' >
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
                    Log-In
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
            <h5 style={{top:"590px",margin:"auto"}} className='Login'>Or Register Here</h5>
            <h1 style={{borderTop:'1px solid black',width:'30%',marginLeft:'auto'}}></h1>
         </Box>
         <Button  variant='contained'  disableElevation sx={{width:'90%', marginLeft: "auto",
              marginRight: "auto",backgroundColor:'#1b2731',color:"#fff"}}  type='submit' onClick={onhandleClick}>
            Register
          </Button >
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Login
