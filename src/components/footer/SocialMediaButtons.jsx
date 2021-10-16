import { Link } from "react-router-dom";

export default function SocialMediaButton({ img, path = "/" }) {


  const style = {
    padding: "1em"
  };

  return (
    <div style={style}>
        <Link to={path}>
            <img src={img} alt="icon"/>
        </Link>

    </div>
  );
}
