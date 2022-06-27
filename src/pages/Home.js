/* eslint-disable */
import React, { useState, useEffect, createRef } from "react";
import NavBar from "../components/NavBar/NavBar";
import List from "../components/List/List";
import Maps from "../components/Maps/Maps";
import { getPlacesData } from "../components/Places/travelCompanion";
import { CssBaseline, Grid, Box, Container } from "@mui/material";

const Home = () => {
  const [places, setPlaces] = useState([]);
  const [coords, setCoords] = useState({});
  const [boundary, setBoundary] = useState({});
  const [clicked, setClicked] = useState(null);
  const [loading, setLoading] = useState(false);
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");
  const [filteredPlaces, setFilteredPlaces] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
      setCoords({ lat: latitude, lng: longitude });
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    getPlacesData(type, boundary.sw, boundary.ne).then((data) => {
      setPlaces(data);
      setFilteredPlaces([]);
      setLoading(false);
    });
  }, [coords, boundary, type]);

  useEffect(() => {
    const filteredPlaces = places.filter((place) => place.rating > rating);
    setFilteredPlaces(filteredPlaces);
  }, [rating]);

  console.log("@@@@@@@@@@@", clicked);
  return (
    <>
      <CssBaseline />
      <Box className="Home">
        <NavBar setCoords={setCoords} />
      </Box>
      <Container maxWidth="xxl">
        <Box sx={{ paddingTop: 5, display: "flex" }}>
          <Grid container>
            <Grid>
              <List places={filteredPlaces.length ? filteredPlaces : places} clicked={clicked} loading={loading} type={type} setType={setType} rating={rating} setRating={setRating} />
            </Grid>
          </Grid>
          <Grid sx={{ paddingLeft: 5 }}>
            <Maps setCoords={setCoords} setBoundary={setBoundary} coords={coords} places={filteredPlaces.length ? filteredPlaces : places} setClicked={setClicked} />
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Home;
