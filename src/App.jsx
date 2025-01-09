import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { getImages } from "./services/photos";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalUrl, setModalUrl] = useState("");
  const [modalAlt, setModalAlt] = useState("");

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

  const openModal = (url, alt) => {
    setModalIsOpen(true);
    setModalUrl(url);
    setModalAlt(alt);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalUrl("");
    setModalAlt("");
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      <ImageGallery images={images} openModal={openModal}></ImageGallery>
      {modalIsOpen && (
        <ImageModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          url={modalUrl}
          alt={modalAlt}
        />
      )}
      {isVisible && (
        <LoadMoreBtn loading={loading} onLoadMoreBtn={onLoadMoreBtn} />
      )}
      {error && <ErrorMessage error={error} />}
    </div>
  );
};

export default App;
