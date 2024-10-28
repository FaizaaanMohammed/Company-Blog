import React from 'react'
import { BrowserRouter as Router,Routes,Route, Navigate } from 'react-router-dom'
import Nabvar from '../Common/Navbar'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Service from '../Pages/Service'
import Portfolio from '../Pages/Portfolio'
import Pricing from '../Pages/Pricing'
import Blog from '../Pages/Blog'
import Contact from '../Pages/Contact'
import Footer from '../Common/Footer'
import Register from '../Pages/Register'
import Login from '../Pages/Login'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const Routerr = () => {

  const PrivateRoute = ({children})=>{
    const token = localStorage.getItem('auth') || sessionStorage.getItem("auth");
    return token !== null && token !== undefined?(
      children
    ):(
      <>
      
      <Navigate to='/login'/>
      {toast.warning('login-first')}
      </>
    )
  }

  // public Router

  const publicRouter = [
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/service',
      element:<Service/>
    },
    {
      path:'/pricing',
      element:<Pricing/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
    {
      path:'/register',
      element:<Register/>
    },
    {
      path:'/login',
      element:<Login/>
    }
  ]
  
  //
const privateRouter = [
  {
    path:"/blog",
    element:<Blog/>
  }
]


  return (
    <>
    <ToastContainer/>
    <Router>
        <Nabvar/>
        <Routes>
            // public Route
            {
             publicRouter?.map((item)=>{
               return(
               <>
               <Route
               path={item.path}
               element={item.element}
               />
               </>
               )
             }) 
            }

            // private Route
            {
              privateRouter?.map((item)=>{
                return(
                  <>
                  <Route
                  path={item.path}
                  element={<PrivateRoute>{item.element}</PrivateRoute>}
                  />
                  </>
                )
              })
            }
        </Routes>
        <Footer/>
    </Router>
    </>
  )
}

export default Routerr
