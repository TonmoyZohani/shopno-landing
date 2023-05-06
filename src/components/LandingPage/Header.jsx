
import logo from "../../assets/img/logo.png"
import MenuIcon from "@mui/icons-material/Menu";
import {
    AppBar,
    Badge,
    Box,
    Button,
    Grid,
    IconButton,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
    Menu,
    ClickAwayListener,
  } from "@mui/material";
  import React, { useState } from "react";
  import HouseboatIcon from "@mui/icons-material/Houseboat";
  import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
  import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
  import AssessmentIcon from "@mui/icons-material/Assessment";
  import LogoutIcon from "@mui/icons-material/Logout";
  import NotificationsIcon from "@mui/icons-material/Notifications";
  import ManageSearchIcon from "@mui/icons-material/ManageSearch";
  import AddIcon from "@mui/icons-material/Add";
  // import { NavLink, useLocation, useNavigate } from "react-router-dom";
  import { NavLink,useLocation  } from "react-router-dom";
  // import commaNumber from "comma-number";
  import { Container } from "@mui/system";
  import { styled } from "@mui/material/styles";


const Header = () => {
  return (
    <Box
          style={{
            borderRadius: "0px 0px 5px 5px",
            height: "70px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* //todo:Logo  */}
          <Box
            sx={{
              width: { lg: "20%", md: "20%", sm: "80%", xs: "80%" },

              display: "flex",
              justifyContent: {
                md: "start",
                sm: "start",
                xs: "start",
              },
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <Box>
              <img style={{marginTop:"50px",width:"143px",height:'104px'}} src={logo} alt="" />
            </Box>
          </Box>
          <Box
            sx={{
              width: "80%",
              height: "70px",
              display: { md: "flex", sm: "none", xs: "none" },
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            
            <Box
              sx={{
                width: "100%",
                height: "70px",
                display: { md: "flex", sm: "none", xs: "none" },
                alignItems: "center",
                justifyContent: "flex-end",
                gap: "10px",
              }}
            >
              <a
                to="/signup"
                style={{
                  textDecoration: "none",
                  width: "fit-content",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    width:"84px",
                    height:"92px",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "var(--secondary-color)",
                    color: "#fff",
                    padding: "3px 20px",
                    fontSize: "15px",
                    fontWeight: "500",
                    borderRadius: "3px",
                    backgroundColor:"#003E6B"
                  }}
                >
                  Home
                </Box>
              </a>

              <a
                to="/signup"
                style={{
                  textDecoration: "none",
                  width: "fit-content",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    height:"92px",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "var(--secondary-color)",
                    color: "#003E6B",
                    padding: "3px 20px",
                    fontSize: "15px",
                    fontWeight: "500",
                    borderRadius: "3px",
                    backgroundColor:"#fff"
                  }}
                >
                  About Us
                </Box>
              </a>

              <a
                to="/signup"
                style={{
                  textDecoration: "none",
                  width: "fit-content",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    height:"92px",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "var(--secondary-color)",
                    color: "#003E6B",
                    padding: "3px 20px",
                    fontSize: "15px",
                    fontWeight: "500",
                    borderRadius: "3px",
                    backgroundColor:"#fff"
                  }}
                >
                  Contact Us
                </Box>
              </a>
              <a
                to="/signup"
                style={{
                  textDecoration: "none",
                  width: "fit-content",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "16px",
                  fontWeight: 400,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    height:"40px",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "var(--secondary-color)",
                    color: "#fff",
                    padding: "3px 20px",
                    fontSize: "15px",
                    fontWeight: "500",
                    borderRadius: "3px",
                    backgroundColor:"#003E6B"
                  }}
                >
                  Login or Sign Up
                </Box>
              </a>
            </Box>
          </Box>
          {/* //todo:for mobile device */}
          <Box
            sx={{
              width: { lg: "80%", md: "80%", sm: "20%", xs: "20%" },
              background: "var(--white)",
              height: "70px",
              display: { lg: "none", md: "none", sm: "flex", xs: "flex" },
              alignItems: "center",
              justifyContent: "end",
              gap: "10px",
            }}
          >
            <IconButton size="large">
              <MenuIcon style={{ color: "var(--primary-color)" }} />
            </IconButton>
            <Menu
            //   anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
             

              
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem
               
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "start",
                  flexDirection: "column",
                }}
              >
                <a
                  to="/"
                  style={{
                    textDecoration: "none",
                    width: "fit-content",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "var(--primary-color)",
                    padding: "10px 5px",
                  }}
                >
                  Home
                </a>
                <a
                  to="/about"
                  style={{
                    textDecoration: "none",
                    width: "fit-content",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "var(--primary-color)",
                    padding: "10px 5px",
                  }}
                >
                  About Us
                </a>
                <a
                  to="/contact"
                  style={{
                    textDecoration: "none",
                    width: "fit-content",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "var(--primary-color)",
                    padding: "10px 5px",
                  }}
                >
                  Contact Us
                </a>
                <a
                  to="/signin"
                  style={{
                    textDecoration: "none",
                    width: "fit-content",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "16px",
                    fontWeight: 400,
                    color: "var(--primary-color)",
                    padding: "10px 5px",
                  }}
                >
                  Agent Login
                </a>
                <a
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    width: "fit-content",
                    height: "100%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "16px",
                    fontWeight: 400,
                    padding: "10px 5px",
                    background: "var(--primary-color)",
                    color: "var(--white)",
                    borderRadius: "5px",
                  }}
                >
                  Register as Agent
                </a>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
  )
};

export default Header;
