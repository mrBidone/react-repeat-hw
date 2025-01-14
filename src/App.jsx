import { lazy, Suspense } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader/Loader";
// import HomePage from "./pages/HomePage";
// import SearchPostsPage from "./pages/SearchPostsPage";
// import ProductDetailsPage from "./pages/ProductDetailsPage";
// import ProductReviews from "./components/ProductReviews/ProductReviews";

const HomePage = lazy(() => import("./pages/HomePage"));
const SearchPostsPage = lazy(() => import("./pages/SearchPostsPage"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage"));
const ProductReviews = lazy(() =>
  import("./components/ProductReviews/ProductReviews")
);

const App = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
      <header
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px 0",
        }}
      >
        <nav style={{ display: "flex", gap: 10 }}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/search-posts">Search posts</NavLink>
        </nav>
      </header>
      <main>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/search-posts" element={<SearchPostsPage />} />
            <Route path="/products/:productId" element={<ProductDetailsPage />}>
              <Route path="reviews" element={<ProductReviews />} />
            </Route>
          </Routes>
        </Suspense>
      </main>
      <footer>
        <p>Footer Contant</p>
      </footer>
    </div>
  );
};

export default App;
