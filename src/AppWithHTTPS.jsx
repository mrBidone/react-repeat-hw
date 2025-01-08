import { useEffect, useRef, useState } from "react";
import Loader from "./components/Loader/Loader";
import {
  requestAllProducts,
  requestProductsBySearchValue,
} from "./services/api";
import SearchProductsForm from "./components/SearchProductsForm/SearchProductsForm";

const AppWithHTTPS = () => {
  const [products, setProducts] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);
  const [searchValue, setSearchValue] = useState(null);

  const btnRef = useRef();
  const handleRefClick = () => {
    console.log("REF:", btnRef.current);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const data = await requestAllProducts();
        setProducts(data.products);
      } catch (error) {
        console.log(error);
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (searchValue === null) return;

    const fetchProductsByValue = async () => {
      try {
        setIsLoading(true);
        const data = await requestProductsBySearchValue(searchValue);
        setProducts(data.products);
      } catch (error) {
        console.log(error);
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProductsByValue();
  }, [searchValue]);

  const onSearch = (searchTerm) => {
    setSearchValue(searchTerm);
  };

  return (
    <div>
      <h2>APP-2</h2>
      <SearchProductsForm onSearch={onSearch} />
      {searchValue && <p>{searchValue}</p>}
      {Array.isArray(products) && products.length === 0 && (
        <p>Ничего не найдено 😭, измените свой запрос... </p>
      )}
      {isLoading && <Loader />}
      {isError != null && (
        <p style={{ color: "red" }}>{isError}. Please try again later</p>
      )}
      <ul style={{ listStyle: "none" }}>
        {Array.isArray(products) &&
          products.map(({ id, title, description, price }) => {
            return (
              <li key={id}>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{price}$</p>
              </li>
            );
          })}
      </ul>
      <button ref={btnRef} onClick={handleRefClick}>
        Button with Ref
      </button>
    </div>
  );
};

export default AppWithHTTPS;
