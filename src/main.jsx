import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

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
      <App />
    </BrowserRouter>
  </StrictMode>
);
