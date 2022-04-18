import axios from "axios";
let config = { Authorization: process.env.REACT_APP_AUTH_TOKEN };
const getBreeds = async () => {
  const url = "https://api.TheDogAPI.com/v1/breeds";

  const res = await axios.get(url, config);

  const breeds = res.data;

  return breeds;
};

export default getBreeds;
