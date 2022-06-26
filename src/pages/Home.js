import React, { useState, useEffect } from "react";
import axios from "axios";
import NavBar from "../components/NavBar/NavBar";
import List from "../components/List/List";
import Maps from "../components/Maps/Maps";
import Places from "../components/Places/Places";
import { getPlacesData } from "../components/Places/travelCompanion";
import { CssBaseline, Grid, Box, Container } from "@mui/material";

const Home = () => {
  const [places, setPlaces] = useState([]);
  const [coords, setCoords] = useState({});
  const [boundary, setBoundary] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    getPlacesData(boundary.sw, boundary.ne).then((data) => {
      setPlaces(data);
    });
  }, [boundary]);

  return (
    <>
      <CssBaseline />
      <Box className="Home">
        <NavBar />
      </Box>
      <Container maxWidth="xxl">
        <Box sx={{ paddingTop: 10, display: "flex" }}>
          <Grid container>
            <Grid>
              <List places={places} />
            </Grid>
            {/* <Grid item xs={12} md={8} lg={1}>
            <Maps />
          </Grid> */}
          </Grid>
          <Box sx={{ paddingLeft: 5 }}>
            <Maps setCoords={setCoords} setBoundary={setBoundary} coords={coords} places={places} />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Home;
