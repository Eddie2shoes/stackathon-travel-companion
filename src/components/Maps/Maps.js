import React, { useMemo, useEffect } from "react";
// import axios from "axios";
import GoogleMapReact from "google-map-react";
import { Paper, Typography, useMediaQuery, Box } from "@mui/material";
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "80vh",
  width: "100vh",
};
const Map = () => {
  const center = useMemo(() => ({ lat: 40.75682, lng: -73.88095 }), []);

  return <GoogleMap zoom={13} center={center} mapContainerStyle={mapContainerStyle}></GoogleMap>;
};

// const ReactComponent = ({ text }) => <div>{text}</div>;

const Maps = () => {
  // const isMobile = useMediaQuery("(min-width:600px)");

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    locations: ["places"],
  });
  //   <div className="map-container" style={{ height: "100vh", width: "100%" }}>
  //   <GoogleMapReact bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }} defaultCenter={coords} center={coords} defaultZoom={10}>
  //     <ReactComponent text="marker" lat={40.74913} lng={-73.89403} />
  //   </GoogleMapReact>
  // </div>

  return <Box>{!isLoaded ? <div>Loading...</div> : <Map />}</Box>;
};

export default Maps;
