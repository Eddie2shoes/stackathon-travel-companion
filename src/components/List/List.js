import React, { useState } from "react";
import { CircularProgress, Grid, Typography, InputLabel, MenuItem, FormControl, Select, Box } from "@mui/material";

import { styled } from "@mui/material/styles";
import Places from "../Places/Places";

// const List = () => {
//   const [data, setData] = React.useState(null);

//   React.useEffect(() => {
//     fetch("/api/imageWorld")
//       .then((res) => res.json())
//       .then((data) => setData(data.message));
//   }, []);

//   return <div>{!data ? "Loading..." : data}</div>;
// };

const List = () => {
  const [type, setType] = useState("restaurants");
  const [rating, setRating] = useState("");

  const places = [{ name: "Cool Place" }, { name: "Best Beer" }, { name: "Best Food" }, { name: "Cool Place" }, { name: "Best Beer" }, { name: "Best Food" }, { name: "Cool Place" }, { name: "Best Beer" }, { name: "Best Food" }];

  return (
    <Box className="list-container">
      <Typography variant="h4">Restaurants, Hotels, and Attractions around you</Typography>
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
            <Places place={place} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default List;
