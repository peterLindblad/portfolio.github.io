import FooterProfilePic from "./FooterProfilePic"
import FooterText from "./FooterText";
import "../../App.css";

const footerStyle = {
    backgroundColor: '#b8b8b6',
    position: "absolute",
    // // left:"0",
    // // bottom:"0",
    // // right:"0",
    // boxShadow: "0 0 5px 10px #b8b8b6",
    // display: "inline-table",
    // // flexBasis: "auto",
    // // flexGrow: "0",
    // // padding: "20px",
    width: "100%",
    height: "22em"
    // position: "absolute",
    // bottom: "0",
    // left: "0",
    // right:"0",
};

const wrapper = {
};


export default function Footer() {
  return (
    <div style={wrapper}>
    <footer className="footer" style={footerStyle}>
      <FooterProfilePic/>
      <FooterText/>
    </footer>
    </div>
  );
}
