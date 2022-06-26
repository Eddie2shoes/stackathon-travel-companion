import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import SearchFunction from "./SearchFunction";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: { marginLeft: theme.spacing(1), width: "auto" },
}));

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: "linear-gradient(to right, lightBlue, lightGreen, aliceBlue)" }}>
        <Toolbar sx={{ flexGrow: 3, justifyContent: "space-between" }}>
          {/* <Typography variant="h5" component="h5" sx={{ fontWeight: "bold", fontSize: 30, color: "black" }}> */}
          <Box sx={{ fontWeight: "bold", fontSize: 30, color: "black", fontFamily: "Roboto" }}>
            Travel Companion
            {/* </Typography> */}
          </Box>
          <Box>
            <Typography variant="h6" component="h6" color="textSecondary">
              Explore new places
            </Typography>
          </Box>
          {/* <Autocomplete> */}
          <Box sx={{ display: "flex" }}>
            <Box>
              <SearchIcon sx={{ paddingTop: 1, fontSize: 30, color: "blue" }} />
            </Box>
            <Search>
              {/* <SearchIconWrapper> */}
              {/* </SearchIconWrapper> */}
              <SearchFunction />
            </Search>
            {/* </Autocomplete> */}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
