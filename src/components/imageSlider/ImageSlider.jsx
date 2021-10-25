import React, { useState } from "react";
import SliderButton from "./SliderButton";
let images = require("../../images/images.json");

const style = {
  wrapper: {
    position: "relative",
    height: "50vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background:
      "linear-gradient(90deg, rgba(128,128,128,1) 0%, rgba(255,255,255,1) 20%, rgba(255,255,255,1) 80%, rgba(128,128,128,1) 100%)",
  },
  img: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "auto",
    height: "auto",
    userSelect: "none",
  },
};

export const ImageSlider = () => {
  const [image, setImage] = useState(images.find((e) => e !== undefined));

  const clickLeft = () => {
    if (images.length)
      setImage(images[image.id - 2 >= 0 ? image.id - 2 : images.length - 1]);
  };
  const clickRight = () => {
    if (images.length)
      setImage(images[images.length > image.id ? image.id : 0]);
  };

  console.log("current image id:", image.id);
  return (
    <div style={style.wrapper}>
      <img src={image.url} alt="selectedImg" style={style.img} />
      <SliderButton onClick={clickLeft} left />
      <SliderButton onClick={clickRight} />
    </div>
  );
};
