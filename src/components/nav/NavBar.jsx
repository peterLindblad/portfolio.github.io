import NavButton from "./NavButton";

const navStyle = {
  background: "#FFBA7A",
  display: "flex",
  justifyContent: "end",
};

export default function NavBar() {
  return (
    <nav style={navStyle}>
      <NavButton text="Hem" path="/" />
      <NavButton text="Arkiv" path="/archive" />
      <NavButton text="Om" path="about" />
      <NavButton text="Kontakt" path="about" />
    </nav>
  );
}
