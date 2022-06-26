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
    getPlacesData().then((data) => {
      console.log(data);
      setPlaces(data);
    });
  }, []);

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
              <List />
              {/* HELLLLLO This is a message from Ed */}
            </Grid>
            {/* <Grid item xs={12} md={8} lg={1}>
            <Maps />
          </Grid> */}
          </Grid>
          <Box sx={{ paddingLeft: 5 }}>
            <Maps />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Home;
