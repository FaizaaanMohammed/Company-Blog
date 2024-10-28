import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Container } from '@mui/material';
import logo from '../Assests/logo.png'
import { useAuth } from '../Auth/Context';
// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Contact'];




export default function Nabvar(props) {
  const [isActive,setIsActive] = React.useState(false)
  const [isActivee,setIsActivee] = React.useState(false)
  const [auth,setAuth] = useAuth()
  const onHandleLoOut = ()=>{
    setAuth(
      {
        ...auth,
        user:null,
        token:""
      }
    )
    localStorage.removeItem('auth')
  }
  const onHandleColor = ()=>{
     setIsActive(true)
    
  }
  const onHandleColorr = ()=>{
    setIsActive(false)
    setIsActivee(true)
 }


  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box  onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
      <img src={logo} alt="" style={{maxHeight:"65px"}}/>
      </Typography>
      <Divider />
      <List>
      <Link to='/'>
           <Button  sx={{ color: '#000' }}>
                Home
              </Button>
           </Link>
           <Link to='/about'>
           <Button  sx={{ color: '#000' }}>
                About
              </Button>
           </Link>
           <Link to='/service'>
           <Button  sx={{ color: '#000' }}>
                Services
              </Button>
           </Link>
           <Link to='/pricing'>
           <Button  sx={{ color: '#000' }}>
                Pricing
              </Button>
           </Link>
           <Link to='/blog'>
           <Button  sx={{ color: '#000' }}>
                Blog
              </Button>
           </Link>
           <Link to='/contact'>
           <Button  sx={{ color: '#000' }}>
                Contact
              </Button>
           </Link>
           {
            !auth.user?(<>
             <Link to='/register'>
           <Button variant='contained'  sx={{ color: '#fff',fontWeight:'600!important',fontSize:"13px!important",padding:"4px",backgroundColor:"#6693F5",marginRight:"5px" }}>
                Sign-Up
              </Button>
           </Link>
           <Link to='/login'>
           <Button variant='contained'  sx={{ color: '#fff',fontWeight:'600!important',fontSize:"13px!important",padding:"4px",backgroundColor:"#1bbd36" }}>
                Sign-In
              </Button>
           </Link>
            </>):(
              <>
               <Link to=''>
           <Button variant='contained'  sx={{ color: '#fff',fontWeight:'600!important',fontSize:"13px!important",padding:"4px",backgroundColor:"#6693F5",marginRight:"5px" }}>
                {auth.user.name}
              </Button>
           </Link>
           <Link to='/login'>
           <Button variant='contained'  sx={{ color: '#fff',fontWeight:'600!important',fontSize:"13px!important",padding:"4px",backgroundColor:"#DC143C" }} onClick={onHandleLoOut}>
                Sign-Out
              </Button>
           </Link>
              </>
            )
          }
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

 

  return (

     <Box sx={{ display: 'flex',marginBottom:"-30px" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{backgroundColor:"#fff",boxShadow:"none"}}>
        <Toolbar>
          <IconButton
            color=""
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block',color: '#000',maxWidth:"150px"  } }}
          >
            <img src={logo} alt="" style={{maxHeight:"65px"}}/>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block',maxWidth:"650px",display:"flex",marginLeft:"auto" } }}>
           <Link to='/'>
           <Button  sx={{ color: '#000',fontWeight:'600!important',fontSize:"13px!important",padding:"0" }}onClick={onHandleColor}>
                {
                  isActive?(<div style={{color:"red"}}>Home</div>):(<div>Home</div>)
                }
              </Button>
           </Link>
           <Link to='/about'>
           <Button  sx={{ color: '#000',fontWeight:'600!important',fontSize:"13px!important",padding:"0" }}onClick={onHandleColorr}>
           {
                  isActivee?(<div style={{color:"red"}}>About</div>):(<div>About</div>)
                }
              </Button>
           </Link>
           <Link to='/service'>
           <Button  sx={{ color: '#000',fontWeight:'600!important',fontSize:"13px!important",padding:"10px" }}>
                Services
              </Button>
           </Link>
           
           <Link to='/pricing'>
           <Button  sx={{ color: '#000',fontWeight:'600!important',fontSize:"13px!important",padding:"0px" }}>
                Pricing
              </Button>
           </Link>
           <Link to='/blog'>
           <Button  sx={{ color: '#000',fontWeight:'600!important',fontSize:"13px!important",padding:"0px" }}>
                Blog
              </Button>
           </Link>
           <Link to='/contact'>
           <Button  sx={{ color: '#000',fontWeight:'600!important',fontSize:"13px!important",padding:"10px" }}>
                Contact
              </Button>
           </Link>
          {
            !auth.user?(<>
             <Link to='/register'>
           <Button variant='contained'  sx={{ color: '#fff',fontWeight:'600!important',fontSize:"13px!important",padding:"4px",backgroundColor:"#6693F5",marginRight:"5px" }}>
                Sign-Up
              </Button>
           </Link>
           <Link to='/login'>
           <Button variant='contained'  sx={{ color: '#fff',fontWeight:'600!important',fontSize:"13px!important",padding:"4px",backgroundColor:"#1bbd36" }}>
                Sign-In
              </Button>
           </Link>
            </>):(
              <>
               <Link to=''>
           <Button variant='contained'  sx={{ color: '#fff',fontWeight:'600!important',fontSize:"13px!important",padding:"4px",backgroundColor:"#6693F5",marginRight:"5px" }}>
                {auth.user.name}
              </Button>
           </Link>
           <Link to='/login'>
           <Button variant='contained'  sx={{ color: '#fff',fontWeight:'600!important',fontSize:"13px!important",padding:"4px",backgroundColor:"#DC143C" }} onClick={onHandleLoOut}>
                Sign-Out
              </Button>
           </Link>
              </>
            )
          }
          </Box>
         
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
       
      </Box>
    </Box>
  
  );
}
