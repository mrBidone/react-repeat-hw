import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";

{
  /*
  Маршрутизація: 
  1.Навчитися змінювати URL адресу браузера.
  Для цього можно використовувати компоненти <Link> | <NavLink>

  2. Підготувати для відображення компоненти (сторінки ) які будуть 
  рендеритись, коли їх шлях співпаде з URL-адресою. <Routes> & <Route path="/about" element={<AboutPage/>}>
*/
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
