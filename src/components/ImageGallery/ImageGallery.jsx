import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul className={css.imageGalleryFlexWrapper}>
      {images.map(({ id, avg_color, alt, src }) => (
        <li key={id} className={css.imageGalleryItem}>
          <ImageCard
            backgColor={avg_color}
            descr={alt}
            imgUrl={src}
            openModal={openModal}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
