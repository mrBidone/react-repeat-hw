import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <ul>
      {images.map(({ id, avg_color, alt, src }) => (
        <li key={id}>
          <ImageCard backgColor={avg_color} descr={alt} imgUrl={src} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
