import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { requestSingleProductData } from "../../services/api";

const ProductReviews = () => {
  const { productId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchSingleProductReviews = async () => {
      try {
        const response = await requestSingleProductData(productId);
        setReviews(response.reviews);
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleProductReviews();
  }, [productId]);

  return (
    <div>
      <ul>
        {reviews.map(({ comment, id }, index) => {
          return (
            <li key={id || index}>
              <p>{comment}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductReviews;
