import { useState } from "react";
import { Link } from "react-router-dom";

export default function NavButton({ text, path = "/" }) {
  const [hover, setHover] = useState(false);
  const style = {
    background: hover ? "#dfaa6a" : "transparent",
    border: "none",
    padding: ".5em 1em",
    color: "white",
    fontSize: "1.5em",
  };

  return (
    <>
      <Link
        to={path}
        style={style}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {text}
      </Link>
    </>
  );
}
