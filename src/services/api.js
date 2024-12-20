import axios from "axios";

export const requestAllProducts = async () => {
  const { data } = await axios.get("https://dummyjson.com/products");
  return data;
};

export const requestProductsBySearchValue = async (searchValue) => {
  const { data } = await axios.get(
    `https://dummyjson.com/products/search?q=${searchValue}`
  );
  return data;
};
