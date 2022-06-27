/* eslint-disable */
import React, { useRef, useCallback, useState } from "react";
// import GoogleMapReact from "google-map-react";
import Box from "@mui/material/Box";
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";
import { GoogleMap, useLoadScript, InfoBox } from "@react-google-maps/api";
import { useMediaQuery, Paper, Typography } from "@mui/material";
import { defaultImgUrl } from "../Places/Places";
import mapStyles from "./mapStyles";

const mapContainerStyle = {
  height: "90vh",
  width: "100vh",
};

const paperStyle = {
  padding: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  width: "100px",
};

const Maps = ({ coords, setCoords, setBoundary, places, setClicked }) => {
  const mapRef = useRef(null);
  const matches = useMediaQuery("(min-width:600px)");

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });

  const handleLoad = useCallback((map) => {
    mapRef.current = map;
  }, []);

  const handleCenterChanged = () => {
    if (!mapRef.current) return;
    const newPosition = mapRef.current.getCenter();
    setCoords({ lat: newPosition.lat(), lng: newPosition.lng() });
  };

  const handleBoundsChanged = useCallback(() => {
    if (!mapRef.current) return;
    const newBounds = mapRef.current.getBounds();
    setBoundary({ sw: { lat: newBounds.ub.lo, lng: newBounds.Ra.lo }, ne: { lat: newBounds.ub.hi, lng: newBounds.Ra.hi } });
    console.log("@@@@@@", newBounds.ub.lo, newBounds.ub.hi); //newBounds.ub.lo & newBounds.Ra.lo = sw boundary and .hi for nw boundary
  }, [setBoundary]);

  return (
    <Box>
      {!isLoaded ? (
        <div>Loading...</div>
      ) : (
        <GoogleMap onLoad={handleLoad} mapContainerClassName="map" zoom={15} center={coords} mapContainerStyle={mapContainerStyle} onDragEnd={handleCenterChanged} onBoundsChanged={handleBoundsChanged} options={{ zoomControl: true, styles: mapStyles }}>
          {places?.map((place, i) => (
            <InfoBox key={i} style={{ position: "absolute", transform: "translate(-50%, -50%)", zIndex: 1, "&:hover": { zIndex: 2 } }} position={{ lat: parseFloat(place.latitude), lng: parseFloat(place.longitude) }}>
              {!matches ? (
                <LocationOnOutlined color="primary" fontSize="large" />
              ) : (
                <Paper elevation={3} sx={paperStyle}>
                  <Typography gutterBottom variant="subtitle2">
                    {place.name}
                  </Typography>
                  <img style={{ cursor: "pointer" }} src={place.photo ? place.photo.images.large.url : defaultImgUrl} alt={place.name} onClick={() => setClicked(i)} />
                  <Rating name="read-only" size="small" value={place.rating} readOnly />
                </Paper>
              )}
            </InfoBox>
          ))}
        </GoogleMap>
      )}
    </Box>
  );
};

export default Maps;

//   <div className="map-container" style={{ height: "100vh", width: "100%" }}>
//   <GoogleMapReact bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }} defaultCenter={coords} center={coords} defaultZoom={10}>
//     <ReactComponent text="marker" lat={40.74913} lng={-73.89403} />
//   </GoogleMapReact>
// </div>

// lat={parseFloat(place.latitude)} lng={parseFloat(place.longitude)}
//Todo find out why this doesn't render map
