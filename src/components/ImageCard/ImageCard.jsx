import css from "./ImageCard.module.css";

const ImageCard = ({ backgColor, descr, imgUrl, openModal }) => {
  return (
    <div
      className={css.imageGalleryThumb}
      style={{ backgroundColor: backgColor }}
    >
      <img
        onClick={() => openModal(imgUrl.large, descr)}
        className={css.imageGalleryItem}
        src={imgUrl.large}
        alt={descr}
        width="200"
        height="200"
      />
    </div>
  );
};

export default ImageCard;
