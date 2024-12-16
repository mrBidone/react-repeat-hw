import { Grid, PhotosGalleryItem } from "..";

export const PhotosGallery = ({ images }) => {
  return (
    <Grid>
      {images.map(({ id, avg_color, alt, src }) => (
        <PhotosGalleryItem
          key={id}
          backgroundColor={avg_color}
          description={alt}
          imgUrl={src}
        />
      ))}
    </Grid>
  );
};
