const mapStyles = [
  {
    featureType: "all",
    elementType: "labels",
    stylers: [
      {
        visibility: "on",
      },
    ],
  },
  {
    featureType: "administrative",
    elementType: "all",
    stylers: [
      {
        visibility: "off",
      },
    ],
  },
  {
    featureType: "landscape",
    elementType: "geometry",
    stylers: [
      {
        visibility: "on",
      },
      {
        color: "#ffffff",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels",
    stylers: [
      {
        visibility: "off",
      },
      {
        color: "#f2fae2",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        visibility: "simplified",
      },
      {
        color: "#f2fae2",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        visibility: "simplified",
      },
      {
        color: "#939598",
      },
    ],
  },
  {
    featureType: "road.arterial",
    elementType: "geometry",
    stylers: [
      {
        visibility: "simplified",
      },
      {
        color: "#aaaaaa",
      },
    ],
  },
  {
    featureType: "road.local",
    elementType: "geometry",
    stylers: [
      {
        visibility: "simplified",
      },
      {
        color: "#e6e6e6",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        visibility: "simplified",
      },
      {
        color: "#a7cdf2",
      },
    ],
  },
];

export default mapStyles;
