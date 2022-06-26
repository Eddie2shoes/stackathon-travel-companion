import React, { useRef, useCallback } from "react";
import GoogleMapReact from "google-map-react";
import Box from "@mui/material/Box";
import LocationOnOutlined from "@mui/icons-material/LocationOnOutlined";
import Rating from "@mui/material/Rating";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const mapContainerStyle = {
  height: "80vh",
  width: "100vh",
};

const Maps = ({ coords, setCoords, setBoundary }) => {
  const mapRef = useRef(null);
  // const isMobile = useMediaQuery("(min-width:600px)");

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
        <GoogleMap onLoad={handleLoad} mapContainerClassName="map" zoom={13} center={coords} mapContainerStyle={mapContainerStyle} onDragEnd={handleCenterChanged} onBoundsChanged={handleBoundsChanged}>
          <Marker position={coords} />
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
//Todo find out why this doesn't render map
