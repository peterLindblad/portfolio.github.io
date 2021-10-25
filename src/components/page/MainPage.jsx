import { ImageSlider } from "../imageSlider/ImageSlider";
import { Container } from "../layout/Container";

export default function MainPage() {
  return (
    <Container>
      <ImageSlider />
      <h2>Main Page</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dignissim
        tincidunt eros. Phasellus auctor lorem in vulputate luctus. Vestibulum
        rhoncus facilisis magna, at viverra magna feugiat vel. In sagittis
        libero id pretium egestas. Quisque mi metus, bibendum sed lorem ut,
        egestas porta orci. Sed interdum egestas enim varius pellentesque. Duis
        pellentesque ut ligula et suscipit. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Integer ac neque
        et augue pellentesque sagittis.
      </p>
    </Container>
  );
}
