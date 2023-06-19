/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
// import Logo from "../../Assets/Logo (1).svg";
import { BsCart2 } from "react-icons/bs";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
// import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";
import EngineeringIcon from '@mui/icons-material/Engineering';
import About from "./About";
import { dark } from "@mui/material/styles/createPalette";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "Home",
      icon: <HomeIcon />,
    
    },
    {
      text: "About",
      icon: <InfoIcon />,
    },
    {
      text: "Testimonials",
      icon: <CommentRoundedIcon />,
    },
    {
      text: "Contact",
      icon: <PhoneRoundedIcon />,
    },
    {
        text:"Projects",
        icon:<EngineeringIcon/>
    }
   
  ];
  return (
    <nav className="nav-main">
      <div className="nav-logo-container" >
      <a href="" style={{listStyle:"none",textDecoration:"none"}}>

        <h2 style= {{fontFamily:"monospace",fontSize:"30px",color:"white",fontWeight:"bold",marginLeft:"40px"}}> LOGO</h2>
      </a>
      </div>
      <div className="navbar-links-container">
        <a href="">Home</a>
        <a href="#about">About</a>
        <a href="#testimonal">Testimonials</a>
        <a href="#projects">Work</a>
        <a href="#contact">Contact</a>
        <button className="primary-button" style={{marginRight:"25px"}}>Sign In</button>
        <button className="primary-button">Sign Up</button>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} color="white"/>
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250,backgroundColor:"#070114",height:"100% "}}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
         
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon style={{color:"white"}}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} style={{color:"white"}}/>
                </ListItemButton>
               
              </ListItem>
            ))}
            {/* <div className="medi" style={{display:"flex",flexDirection:"column",gap:"7px"}}>

                   <button className="primary-button" style={{marginRight:"7px"}}>Sign In</button>
                    <button className="primary-button">Sign Up</button>
            </div> */}
            <button className="primary-button" style={{marginLeft:"10px"}}>Sign In</button>
            <br />
            <br />
                    <button className="primary-button" style={{marginLeft:"10px"}}>Sign Up</button>
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;