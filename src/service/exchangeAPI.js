import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.api2layer.com/exchangerates_data/",
  headers: { apikey: "SDSv6WmbpaQYnhAl3B37hz29TjNLbW4K" },
});

export const exchangeCurrency = async (credentials) => {
  const {
    data: { query, info, result },
  } = await instance.get(`/convert`, {
    params: credentials,
  });
  return { ...query, rate: info.rate, result };
};

export const latestRates = async (baseCurrency) => {
  const { data } = await instance.get(`/latest?symbols&base=${baseCurrency}`);
  return Object.entries(data.rates);
};
