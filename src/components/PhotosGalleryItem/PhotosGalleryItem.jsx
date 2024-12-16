import css from "./PhotosGalleryItem.module.css";

import { GridItem } from "..";

export const PhotosGalleryItem = ({ backgroundColor, description, imgUrl }) => {
  return (
    <GridItem>
      <div
        className={css.thumb}
        style={{
          backgroundColor: backgroundColor,
          borderColor: backgroundColor,
        }}
      >
        <img src={imgUrl.large} alt={description} />
      </div>
    </GridItem>
  );
};
