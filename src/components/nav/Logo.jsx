import { Link } from "react-router-dom";

const logoStyle = {
  background: "#FFBA7A",
  flex: "1",
  marginLeft: "2m",
};

const logoStyleText = {
  fontFamily: "Playfair Display",
  fontSize: "1.6em",
  fontWeight: "900",
  color: "white",
};

export default function Logo() {
  return (
    <div style={logoStyle}>
      <Link to="/">
        <p style={logoStyleText}>Peter LindBlad Foto</p>
      </Link>
    </div>
  );
}
