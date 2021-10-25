import React from "react";

const style = {
  wrapper: {
    position: "absolute",
    top: 0,
    height: "100%",
  },
  button: {
    border: "none",
    height: "100%",
    width: "2em",
    background: "none",
    fontSize: "2em",
    fontWeight: "900",
    cursor: "pointer",
    userSelect: "none",
  },
  left: {
    left: 0,
  },
  right: {
    right: 0,
  },
};

export default function SliderButton({ onClick, left }) {
  // if direction is left use left otherwise default to right
  const isLeft = left ? true : false;
  return (
    <div style={{ ...style.wrapper, ...(isLeft ? style.left : style.right) }}>
      <button style={style.button} onClick={onClick}>
        {isLeft ? "<" : ">"}
      </button>
    </div>
  );
}
