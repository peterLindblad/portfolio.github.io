import { GridContainer } from "../gridGallery/GridContainer";
import { GridItem } from "../gridGallery/GridItem";
import { ImageLabel, ImageLabelType } from "../gridGallery/ImageLabel";
import { Image } from "../layout/Image";
import { images } from "../imageSlider/images";

export function CollagePreview({ headline = "Album", maxAlbums = 8 }) {
  let albums = [];
  images.forEach((img) => {
    if (!albums.find((item) => img.album === item.album)) albums.push(img);
  });

  return (
    <>
      <h2>{headline}</h2>
      <GridContainer>
        {albums.slice(0, maxAlbums).map((value, index) => (
          <GridItem key={index}>
            <Image src={value.url} alt="test" maxImageHeight="10em" />
            <ImageLabel isOverlay={ImageLabelType.Overlay}>
              {value.album}
            </ImageLabel>
          </GridItem>
        ))}
      </GridContainer>
    </>
  );
}
