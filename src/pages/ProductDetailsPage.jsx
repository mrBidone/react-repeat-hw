import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { requestSingleProductData } from "../services/api";

const ProductDetailsPage = () => {
  const { productId } = useParams();
  const [productDetails, setProductDetails] = useState(null);

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

  return (
    <div>
      <h2>Post Details id: {productId}</h2>
      {productDetails !== null && (
        <div>
          <h2>title: {productDetails.title}</h2>
          <p>brand: {productDetails.brand}</p>
          <p>category: {productDetails.category}</p>
          <p>{productDetails.description}</p>
          <ul>
            {productDetails.images.map((image, index) => {
              return (
                <li key={index}>
                  <img src={image} alt="" width="200" height="200" />
                </li>
              );
            })}
          </ul>
          <p>Price: {productDetails.price}$</p>
          <Link to="reviews">Reviews</Link>
          <div>
            <Outlet />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
