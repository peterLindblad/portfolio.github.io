import FooterProfilePic from "./FooterProfilePic";
import FooterText from "./FooterText";
import "../../App.css";

const footerStyle = {
  backgroundColor: "#b8b8b6",
  position: "absolute",
  width: "100%",
  height: "22em",
  marginTop: "2em",
};

const wrapper = {};

export default function Footer() {
  return (
    <div style={wrapper}>
      <footer className="footer" style={footerStyle}>
        <FooterProfilePic />
        <FooterText />
      </footer>
    </div>
  );
}
