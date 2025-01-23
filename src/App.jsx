import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { lazy, useEffect } from "react";
import { getUserInfo } from "service/opencagedataApi";
import { useDispatch } from "react-redux";
import { setBaseCurrency } from "./reduxState/currency/currencySlice";
import { fetchBaseCurrencyThunk } from "./reduxState/currency/operations";

const Home = lazy(() => import("pages/Home"));
const Rates = lazy(() => import("pages/Rates"));

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const success = ({ coords }) => {
      dispatch(fetchBaseCurrencyThunk(coords));
    };
    const error = () => {
      dispatch(setBaseCurrency("USD"));
    };
    navigator.geolocation.getCurrentPosition(success, error);
  }, [dispatch]);
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="/rates" element={<Rates />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>
  );
};
