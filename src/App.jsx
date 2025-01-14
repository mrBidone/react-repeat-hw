import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components";
import { lazy, Suspense } from "react";
import Loader from "components/Loader/Loader";

const Home = lazy(() => import("pages/Home"));
const Country = lazy(() => import("pages/Country"));
const SearchCountry = lazy(() => import("pages/SearchCountry"));

export const App = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryId" element={<Country />} />
          <Route path="/country" element={<SearchCountry />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
