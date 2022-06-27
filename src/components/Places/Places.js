import React from "react";
import { Box, Typography, Button, Card, CardMedia, CardContent, CardActions, Chip } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import LocationOn from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import Rating from "@mui/material/Rating";

export const defaultImgUrl = "https://media.cntraveler.com/photos/5a8f3b070e2cf839e9dbfa1d/2:1/w_2560%2Cc_limit/NYC_GettyImages-640006562.jpg";

const spacing = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
}));

const Places = ({ place, selected, refProp }) => {
  if (selected) refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Card elevation={6}>
      <CardMedia style={{ height: 350 }} image={place.photo ? place.photo.images.large.url : defaultImgUrl} title={place.name} />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating name="read-only" value={place.rating} readOnly />
          <Typography gutterBottom variant="subtitle1">
            out of {place.num_reviews}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Price</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle1">Ranking</Typography>
          <Typography gutterBottom variant="subtitle1">
            {place.ranking}
          </Typography>
        </Box>
        {/* {place?.awards?.map((award) => (
          <Box my={1} display="flex" justifyContent="space-between" alignItems="center">
            <img src={award.images.small} alt={award.display_name} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))} */}
        {/* {place?.hours?.week_ranges?.map((day, i) => (
          <Box my={1} display="flex" justifyContent="space-between" alignItems="center" key={i}>
            <Typography variant="subtitle2" color="textSecondary">
              {day[i].length ? (
                <div>
                  {day[i].open_time}-{day[i].close_time}
                </div>
              ) : null}
            </Typography>
          </Box>
        ))} */}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} sx={{ margin: "5px 5px 5px 0" }} />
        ))}
        {place?.phone && (
          <Typography gutterBottom variant="body2" color="textSecondary" sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        {place?.address && (
          <Typography gutterBottom variant="body2" color="textSecondary" sx={{ display: "flex", justifyContent: "space-between", marginTop: "10px", alignItems: "center" }}>
            <LocationOn /> {place.address}
          </Typography>
        )}
        <CardActions>
          <Button size="small" color="primary" onClick={() => window.open(place.website, "_blank")}>
            website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default Places;
