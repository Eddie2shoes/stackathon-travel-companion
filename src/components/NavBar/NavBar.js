import React, { useState } from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, Box, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
// import SearchFunction from "./SearchFunction";

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

const NavBar = ({ setCoords }) => {
  const [autocomplete, setAutocomplete] = useState(null);
  const onLoad = (auto) => setAutocomplete(auto);

  const onPlaceChanged = () => {
    const lat = autocomplete.getPlace().geometry.location.lat();
    const lng = autocomplete.getPlace().geometry.location.lng();
    setCoords({ lat, lng });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="relative" sx={{ background: "linear-gradient(to right, lightBlue, lightGreen, aliceBlue)" }}>
        <Toolbar sx={{ flexGrow: 3, justifyContent: "space-between" }}>
          {/* <Typography variant="h5" component="h5" sx={{ fontWeight: "bold", fontSize: 30, color: "black" }}> */}
          <Box sx={{ fontWeight: "bold", fontSize: 30, color: "blue", fontFamily: "Roboto" }}>
            Stackathon Travel Companion
            {/* </Typography> */}
          </Box>
          <Box>
            <Typography variant="h6" component="h6" color="textSecondary">
              Explore The World!
            </Typography>
          </Box>
          <Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
            <Box sx={{ display: "flex" }}>
              <Box>
                <SearchIcon sx={{ paddingTop: 1, fontSize: 30, color: "blue" }} />
              </Box>
              <Search>
                {/* <SearchIconWrapper> */}
                {/* </SearchIconWrapper> */}
                {/* <SearchFunction /> */}
                <InputBase placeholder="Search here" sx={{ position: "relative", height: "auto" }} />
              </Search>
            </Box>
          </Autocomplete>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
