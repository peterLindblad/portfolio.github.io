import { Link } from "react-router-dom";

export default function SocialMediaButton({ img, path = "/" }) {


  const style = {
    padding: "1em"
  };

  return (
    <div style={style}>
      <a href={path} rel="noreferrer" target="blank">
         <img src={img} alt="icon"/>
      </a>
    </div>
  );
}
