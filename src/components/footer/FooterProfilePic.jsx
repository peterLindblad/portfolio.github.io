import profile from "./profile.jpg";

const footerStyle = {
  maxWidth: "200px",
  width: "100%",
  height: "auto",
  borderRadius: "50%",
  margin: "5em 3em 2em 6em",
  border: "1px solid #050505",
};

const imgContainer = {
  textAlign: "center"
};

export default function FooterProfilePic() {
  return (
    <>
    <div className="imgContainer" style={imgContainer}>
      <img
        style={footerStyle}
        className="img-profilePicture"
        src={profile}
        alt="profilePicture"
      />
      </div>
    </>
  );
}
