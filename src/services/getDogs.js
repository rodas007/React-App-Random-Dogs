import axios from "axios";
let config = { Authorization: process.env.REACT_APP_AUTH_TOKEN };
const getDogs = async (breedId) => {
  const url =
    !breedId || breedId === 0
      ? "https://api.TheDogAPI.com/v1/images/search"
      : "https://api.TheDogAPI.com/v1/images/search?breed_ids=" + breedId;

  const res = await axios.get(url, config);

  const [data] = res.data;

  let {
    url: image,
    breeds: [breed],
  } = data;

  if (!breed) {
    breed = {
      id: 0,
      name: "random",
    };
  }

  const dog = {
    image,
    breed,
  };

  return dog;
};

export default getDogs;
