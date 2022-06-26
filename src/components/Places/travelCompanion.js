import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary";

const options = {
  params: {
    bl_latitude: "40.74672",
    tr_latitude: "40.76489",
    bl_longitude: "-73.89915",
    tr_longitude: "-73.86371",
    restaurant_tagcategory_standalone: "10591",
    restaurant_tagcategory: "10591",
    limit: "30",
    currency: "USD",
    open_now: "false",
    lunit: "km",
    lang: "en_US",
  },
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  },
};

export const getPlacesData = async () => {
  try {
    // const {
    //   data: { data },
    // } = await axios.get(URL, options);
    // return data;
    const data = "hello";
    return data;
  } catch (err) {
    console.error(err);
  }
};
