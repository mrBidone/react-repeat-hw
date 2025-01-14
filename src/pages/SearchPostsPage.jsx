import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import Loader from "../components/Loader/Loader";
import {
  requestAllProducts,
  requestProductsBySearchValue,
} from "../services/api";
import SearchProductsForm from "../components/SearchProductsForm/SearchProductsForm";

const SearchPostsPage = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  // Отримання обʼєкту місцезнаходження!!!! =========================
  const location = useLocation();
  console.log("location: ", location);

  // 1. Зчитуємо пошуковий параметр з URL-строки
  const queryValue = searchParams.get("query");

  useEffect(() => {
    // 3. підписуємо UseEffect на запит queryValue
    // if (!queryValue) return;
    const fetchProductsByValue = async () => {
      try {
        setIsLoading(true);
        if (queryValue) {
          // 4. Тут так само, робимо запит по queryValue
          const data = await requestProductsBySearchValue(queryValue);
          setProducts(data.products);
        } else {
          const data = await requestAllProducts();
          setProducts(data.products);
        }
      } catch (error) {
        console.log(error);
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductsByValue();
    // 5. У масив залежностей додаємо queryValue для спостерігання.
  }, [queryValue]);

  const onSearch = (searchTerm) => {
    // 2. Встановлюємо пошукові параметри по ключу "query"
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
