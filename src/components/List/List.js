/* eslint-disable */
import React, { useState, useEffect, createRef } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Box } from "@mui/material";

import Places from "../Places/Places";

const List = ({ places, clicked, loading, type, setType, rating, setRating }) => {
  const [eleRefs, setEleRefs] = useState([]);

  useEffect(() => {
    const refs = Array(places?.length)
      .fill()
      .map((_, i) => eleRefs[i] || createRef());
    setEleRefs(refs);
  }, [places]);

  return (
    <Box className="list-container">
      <Typography variant="h4">Restaurants, Hotels, and Attractions around you</Typography>
      {loading ? (
        <div style={{ height: "600px", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <CircularProgress size="5rem" />
        </div>
      ) : (
        <>
          <FormControl className="list-formControl">
            <InputLabel>Type</InputLabel>
            <Select id="type" sx={{ width: "20vh" }} value={type} onChange={(evt) => setType(evt.target.value)}>
              <MenuItem value="restaurants">Restaurants</MenuItem>
              <MenuItem value="hotels">Hotels</MenuItem>
              <MenuItem value="attractions">Attractions</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="list-formControl">
            <InputLabel>Rating</InputLabel>
            <Select sx={{ width: "10vh" }} value={rating} onChange={(evt) => setRating(evt.target.value)}>
              <MenuItem value={0}>All</MenuItem>
              <MenuItem value={3}>Above 3.0</MenuItem>
              <MenuItem value={4}>Above 4.0</MenuItem>
            </Select>
          </FormControl>
          <Grid container spacing={3} sx={{ height: "70vh", overflow: "auto", marginTop: 1 }}>
            {places?.map((place, i) => (
              <Grid item key={i} xs={12}>
                <Places place={place} selected={Number(clicked === i)} refProp={eleRefs[i]} />
              </Grid>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default List;
