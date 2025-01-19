import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import {
  requestAllProducts,
  requestProductsBySearchValue,
} from "../services/api";
import SearchProductsForm from "../components/SearchProductsForm/SearchProductsForm";
import { useDispatch, useSelector } from "react-redux";
import {
  selectProducts,
  selectProductsError,
  selectProductsIsLoading,
} from "../redux/products/products.selectors";
import {
  apiGetAllProducts,
  apiGetProductsByQuery,
} from "../redux/products/products.operation";

const SearchPostsPage = () => {
  const dispatch = useDispatch();

  const products = useSelector(selectProducts);
  const isLoading = useSelector(selectProductsIsLoading);
  const isError = useSelector(selectProductsError);

  const [searchParams, setSearchParams] = useSearchParams();
  // Отримання обʼєкту місцезнаходження!!!! =========================
  const location = useLocation();
  console.log("location: ", location);

  const queryValue = searchParams.get("query");

  useEffect(() => {
    if (queryValue) {
      dispatch(apiGetProductsByQuery(queryValue));
    } else {
      dispatch(apiGetAllProducts());
    }
  }, [queryValue, dispatch]);

  const onSearch = (searchTerm) => {
    setSearchParams({ query: searchTerm });
  };

  return (
    <div>
      <h2>APP-2</h2>
      <SearchProductsForm defaultSearchValue={queryValue} onSearch={onSearch} />
      {queryValue && <p>{queryValue}</p>}
      {Array.isArray(products) && products.length === 0 && (
        <p>Ничего не найдено 😭, измените свой запрос... </p>
      )}
      {isLoading && <Loader />}
      {isError != null && (
        <p style={{ color: "red" }}>{isError}. Please try again later</p>
      )}
      <ul style={{ listStyle: "none" }}>
        {Array.isArray(products) &&
          products.map(({ id, title, description, price, thumbnail }) => {
            return (
              <li key={id}>
                <Link state={{ from: location }} to={`/products/${id}`}>
                  <img src={thumbnail} alt="" width="150" height="150" />
                  <h3>{title}</h3>
                  <p>{description}</p>
                  <p>{price}$</p>
                </Link>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default SearchPostsPage;
