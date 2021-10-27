import { ImageSlider } from "../imageSlider/ImageSlider";
import { Container } from "../layout/Container";
import { AlbumPreview } from "../gridGallery/AlbumPreview";
import { CollagePreview } from "../gridGallery/CollagePreview";

export default function MainPage() {
  return (
    <Container>
      <ImageSlider />
      <AlbumPreview
        headline="Senaste Bilderna"
        albumName="Bandy"
        maxImages={4}
      />
      <CollagePreview headline="Nya Album" />
    </Container>
  );
}
