import { GridContainer } from "../gridGallery/GridContainer";
import { GridItem } from "../gridGallery/GridItem";
import { ImageLabel, ImageLabelType } from "../gridGallery/ImageLabel";
import { Image } from "../layout/Image";
import { images } from "../imageSlider/images";

export function CollagePreview({ headline="Album", maxAlbums=8}) {
    
    let albums = [];// = Object.values(images).filter(image => image.album === 6);
    
    for (const [key, val] of Object.entries(images)) {
        let found = false;
        for (const image of albums) {
            if (image.album === val.album) {
                found = true;
            }
        }
        if (!found) {
            albums.push(val);
        }
    }

    return (
        <>
          <h2>{headline}</h2>
          <GridContainer>
            {albums.slice(0, maxAlbums).map((value) => (
              <GridItem>
                <Image src={value.url} alt="test" maxImageHeight="10em"/>
                <ImageLabel isOverlay={ImageLabelType.Overlay}>
                  {value.album}
                </ImageLabel>
              </GridItem>
            ))}
          </GridContainer>
        </>
    );
}