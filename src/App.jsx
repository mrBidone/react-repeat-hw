import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { getImages } from "./services/photos";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { Button } from "@nextui-org/button";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    const fetchImages = async () => {
      setLoading(true);
      setError(null);
      try {
        const { per_page, photos, total_results } = await getImages(
          searchQuery,
          page
        );
        setImages((prevImages) => [...prevImages, ...photos]);
        setIsVisible(page < Math.ceil(total_results / per_page));
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [searchQuery, page]);

  const handleSubmit = (searchValue) => {
    setSearchQuery(searchValue);
    setImages([]);
    setError(null);
    setPage(1);
    setIsVisible(false);
  };

  const onLoadMoreBtn = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      <ImageGallery images={images}></ImageGallery>
      {isVisible && (
        <Button onPress={onLoadMoreBtn} color="primary" variant="light">
          Load More
        </Button>
      )}
      {error && <ErrorMessage error={error} />}
    </div>
  );
};

export default App;
