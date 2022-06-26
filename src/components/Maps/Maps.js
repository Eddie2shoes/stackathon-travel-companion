import React, { useMemo, useEffect, useRef, useState, useCallback } from "react";
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

// const ReactComponent = ({ text }) => <div>{text}</div>;

const Maps = ({ coords, setCoords, setBoundary }) => {
  // const center = useMemo(() => ({ lat: 40.75682, lng: -73.88095 }), []);
  // const [position, setPosition] = useState({ lat: 40.75682, lng: -73.88095 });
  const mapRef = useRef(null);
  // const mapBounds = useRef(null);
  // const isMobile = useMediaQuery("(min-width:600px)");

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    // libraries: ["places"],
  });

  const handleLoad = useCallback((map) => {
    mapRef.current = map;
    // mapBounds.current = map;
  }, []);

  const handleCenterChanged = useCallback(() => {
    if (!mapRef.current) return;
    const newPosition = mapRef.current.getCenter();
    setCoords(newPosition);
  });

  const handleBoundsChanged = useCallback(() => {
    if (!mapRef.current) return;
    const newBounds = mapRef.current.getBounds();
    setBoundary(newBounds);
  });

  return <Box>{!isLoaded ? <div>Loading...</div> : <GoogleMap onLoad={handleLoad} mapContainerClassName="map" zoom={13} center={coords} mapContainerStyle={mapContainerStyle} onDragEnd={handleCenterChanged} onBoundsChanged={handleBoundsChanged}></GoogleMap>}</Box>;
};

export default Maps;

//   <div className="map-container" style={{ height: "100vh", width: "100%" }}>
//   <GoogleMapReact bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }} defaultCenter={coords} center={coords} defaultZoom={10}>
//     <ReactComponent text="marker" lat={40.74913} lng={-73.89403} />
//   </GoogleMapReact>
// </div>
