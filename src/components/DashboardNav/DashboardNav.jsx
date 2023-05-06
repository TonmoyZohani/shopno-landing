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
  Stack,
} from "@mui/material";
import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { Container } from "@mui/system";
import { styled } from "@mui/material/styles";
import logo from "../../assets/img/logo.png";
import PersonIcon from "@mui/icons-material/Person";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import SearchIcon from "@mui/icons-material/Search";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: 5,
    top: 10,
    padding: "0 4px",
    backgroundColor: "var(--black)",
    color: "var(--white)",
  },
}));

const DashboardNav = () => {
  // const location = useLocation();
  // const navigate = useNavigate();
  const [balance, setBalance] = useState(250000);
  const [service, setService] = useState(false);
  const [manage, setManage] = useState(false);
  const [account, setAccount] = useState(false);
  // const user = secureLocalStorage.getItem("user-info");

  // todo: for mobile device
  const [anchorElNav, setAnchorElNav] = useState(null);
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  // todo: end mobile device functionality

  const handleClickAway = () => {
    setService(false);
    setManage(false);
    setAccount(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Box
        style={{
          borderRadius: "0px 0px 5px 5px",
          width: "1450px",
          height: "70px",
          display: "flex",
          alignItems: "center",
          marginTop: "0px",
        }}
      >
        {/* //todo:Logo  */}
        <Box
          sx={{
            width: { lg: "20%", md: "20%", sm: "80%", xs: "80%" },
            display: "flex",
            justifyContent: {
              md: "start", // Add space between the two child components
              sm: "start",
              xs: "start",
            },
            alignItems: "center",
            cursor: "pointer",
            
          }}
          onClick={() => navigate("/")}
        >
          <Box>
          <a style={{textDecoration:'none'}} to="/">
            <img
              style={{
                width: "130px",
                cursor: "pointer",
              }}
              alt="logo-not-found"
              src={logo}
            />
            {/* <Typography sx={{ color:'green' , fontWeight:600 , fontSize:'35px'}}>Shopno Tours & Travels Admin</Typography> */}
          </a>
        </Box>
          <Box s>
            <Stack direction={"row"} alignItems="center">
              <input
                type="text"
                placeholder="Search....."
                style={{
                  padding: "4px 24px 4px 14px",
                  marginRight: "5px",
                }}
                required
                // onChange={(e) => handelSearchItems(e.target.value)}
              />

              <SearchIcon sx={{ ml: "-30px" }} />
            </Stack>
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
                  width: "36px",
                  height: "36px",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "var(--secondary-color)",
                  color: "#fff",
                  padding: "3px 20px",
                  fontSize: "15px",
                  fontWeight: "500",
                  borderRadius: "3px",
                  backgroundColor: "#2C74B3",
                }}
              >
                <PersonIcon />
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
                  width: "36px",
                  height: "36px",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "var(--secondary-color)",
                  color: "#fff",
                  padding: "3px 20px",
                  fontSize: "15px",
                  fontWeight: "500",
                  borderRadius: "3px",
                  backgroundColor: "#2C74B3",
                }}
              >
                <NotificationAddIcon />
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
            ></a>
          </Box>
        </Box>
      </Box>
    </ClickAwayListener>
  );
};

export default DashboardNav;
