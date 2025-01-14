import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { requestSingleProductData } from "../services/api";
import ModalImage from "../components/ModalImage/ModalImage";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImage, setIsModalImage] = useState("");
  const [modalImageAlt, setIsModalImageAlt] = useState("");

  const location = useLocation();
  console.log("location from DetailsPage", location);

  const backLinkRef = useRef(location.state?.from ?? "/posts");

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const data = await requestSingleProductData(productId);
        setProductDetails(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleProduct();
  }, [productId]);

  const openModal = (image, title) => {
    setModalIsOpen(true);
    setIsModalImage(image);
    setIsModalImageAlt(title);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setIsModalImage("");
    setIsModalImageAlt("");
  };

  return (
    <div>
      <Link to={backLinkRef.current}> 👈🏽 Go Back </Link>
      <h2>Post Details id: {productId}</h2>
      {productDetails !== null && (
        <div>
          <h2>title: {productDetails.title}</h2>
          <p>brand: {productDetails.brand}</p>
          <p>category: {productDetails.category}</p>
          <p>{productDetails.description}</p>
          <ul style={{ listStyle: "none" }}>
            {productDetails.images.map((image, index) => {
              return (
                <li
                  onClick={() => openModal(image, productDetails.title)}
                  key={index}
                  style={{ cursor: "pointer" }}
                >
                  <img src={image} alt="" width="200" height="200" />
                </li>
              );
            })}
          </ul>
          <p>Price: {productDetails.price}$</p>
          <Link to="reviews">Reviews</Link>
          <Outlet />
        </div>
      )}
      <ModalImage
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        image={modalImage}
        title={modalImageAlt}
      />
    </div>
  );
};

export default ProductDetailsPage;
