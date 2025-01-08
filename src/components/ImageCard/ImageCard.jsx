const ImageCard = ({ backgColor, descr, imgUrl }) => {
  return (
    <div style={{ backgroundColor: backgColor }}>
      <img src={imgUrl.large} alt={descr} width="200" height="200" />
    </div>
  );
};

export default ImageCard;
