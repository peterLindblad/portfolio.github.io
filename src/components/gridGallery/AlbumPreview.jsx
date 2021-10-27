import { GridContainer } from "../gridGallery/GridContainer";
import { GridItem } from "../gridGallery/GridItem";
import { ImageLabel } from "../gridGallery/ImageLabel";
import { Image } from "../layout/Image";
import { images } from "../imageSlider/images";

export function AlbumPreview({ headline, albumName, maxImages = 8 }) {
  let album = images.filter((image) => image.album === albumName);

  return (
    <>
      <h2>{headline ? headline : albumName}</h2>
      <GridContainer>
        {album.slice(0, maxImages).map((value, index) => (
          <GridItem key={index}>
            <Image src={value.url} alt="test" />
            <ImageLabel>{value.name}</ImageLabel>
          </GridItem>
        ))}
      </GridContainer>
    </>
  );
}
