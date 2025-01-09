import { useEffect, useState } from "react";
import axios from "axios";
import ArticleList from "../components/ArticleList/ArticleList";
import { BeatLoader } from "react-spinners";

import { fetchArticlesWithTopic } from "../articles-api";
import SearchForm from "../components/SearchForm/SearchForm";

const HomePage = () => {
  const [articles, setArticles] = useState([]);

  const [isLoader, setIsLoader] = useState(true);

  const [error, setError] = useState(false);
  const [dataArticles, setDataArticles] = useState([]);
  const [searchArticles, setSearchArticles] = useState(null);

  useEffect(() => {
    async function fetchArticles() {
      try {
        setIsLoader(true);
        const response = await axios.get(
          "https://hn.algolia.com/api/v1/search?query=react"
        );
        setArticles(response.data.hits);
      } catch (error) {
        setError(true);
        console.log("error", error);
      } finally {
        setIsLoader(false);
      }
    }

    fetchArticles();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        setIsLoader(true);

        const data = await fetchArticlesWithTopic("css");
        setDataArticles(data);
      } catch (error) {
        setError(true);
        console.log("Error from file: ", error);
      } finally {
        setIsLoader(false);
      }
    }

    fetchData();
  }, []);

  // Функція запиту на сервер по введеному значенню
  const handleSearch = async (topic) => {
    try {
      setError(false);
      setIsLoader(true);
      const data = await fetchArticlesWithTopic(topic);
      setSearchArticles(data);
    } catch (error) {
      console.log(error);
      setError(true);
    } finally {
      setIsLoader(false);
    }
  };

  return (
    <div>
      <h1>Latest articles</h1>
      <div>
        <h2>Articles from APP</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 30,
          }}
        >
          {isLoader && <BeatLoader />}
        </div>
        {articles.length > 0 && (
          <div>
            <ArticleList items={articles} error={error} />
          </div>
        )}
      </div>
      <div>
        <h2>Articles from articles-api.js</h2>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 30,
          }}
        >
          {isLoader && <BeatLoader />}
        </div>
        {dataArticles.length > 0 && (
          <div>
            <ArticleList items={dataArticles} error={error} />
          </div>
        )}
      </div>
      <div>
        <h2>Search Articles</h2>
        <SearchForm onSearch={handleSearch} isLoader={isLoader}></SearchForm>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 30,
          }}
        >
          {isLoader && <BeatLoader />}
        </div>
        {Array.isArray(searchArticles) && searchArticles.length === 0 && (
          <p>Ничего не найдено 😭, измените свой запрос... </p>
        )}
        {Array.isArray(searchArticles) && (
          <div>
            <ArticleList items={searchArticles} error={error} />
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
