import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import ArticleList from "./components/ArticleList/ArticleList";
import { BeatLoader } from "react-spinners";
//Виконання запиту з окремого файлу
// 2.1. Імпортуємо HTTP-функцію
import { fetchArticlesWithTopic } from "./articles-api";
import SearchForm from "./components/SearchForm/SearchForm";

//Виконати HTTP-запит, будь-то в ефекті чи при події
//У засобах розробки на вкладці Network переконатися, що запит успішний, і у відповідь ми отримуємо дані
//Оголосити у компоненті стан для зберігання результату запиту
//Зберегти результат HTTP-запиту у стані
//Використовувати стан для відображення JSX-розмітки

const App = () => {
  // 3. Оголошуємо стан
  const [articles, setArticles] = useState([]);
  //5. Оголошуємо стан для Лоадеру
  const [isLoader, setIsLoader] = useState(true);
  // 8. Оголошуємо стан для зберігання помилки
  const [error, setError] = useState(false);
  // 2.3 Окремий стан для другого запиту
  const [dataArticles, setDataArticles] = useState([]);
  // 3.1 СТАН ЗАПИТУ ЗА ВВЕДЕНИМ ЗНАЧЕННЯМ
  const [searchArticles, setSearchArticles] = useState(null);

  // НИЖЧЕ ЗАПИТ БЕЗПОСЕРЕДНЬО В APP !!!!!!! (НЕ НАЙКРАЩИЙ ВАРІАНТ! )
  useEffect(() => {
    // ЗАПИТ БЕЗПОСЕРЕДНЬО В APP !!!!!!! (НЕ НАЙКРАЩИЙ ВАРІАНТ! )
    // 1. Оголошуємо асинхронну функцію
    async function fetchArticles() {
      try {
        // 6. Встановлюємо індикатор в true перед запитом
        setIsLoader(true);
        // Тут будемо виконувати HTTP-запит
        const response = await axios.get(
          "https://hn.algolia.com/api/v1/search?query=react"
        );
        // 4. Записуємо дані в стан
        setArticles(response.data.hits);
      } catch (error) {
        // 9. Встановлюємо стан Error в TRUE
        setError(true);
        console.log("error", error);
      } finally {
        // 7. Відключаємо Лоадер після запиту
        setIsLoader(false);
      }
    }

    // 2. Викликаємо її одразу після оголошення
    fetchArticles();
  }, []);

  //НИЖЧЕ ЗАПИТ ІЗ ОКРЕМОГО ФАЙЛА (articles-api.js) !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  useEffect(() => {
    // 2.2 СТВОРЮЄМО АСИНХРОННУ ФУНКЦІЮ В середині якої робимо запит на сервер!
    async function fetchData() {
      try {
        setIsLoader(true);
        // 2.3. Використовуємо HTTP-функцію
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
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
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

export default App;
