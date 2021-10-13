import NavButton from "./NavButton";

const navStyle = {
  background: "#FFBA7A",
  display: "flex",
  justifyContent: "end",
};

export default function NavBar() {
  return (
    <nav style={navStyle}>
      <NavButton text="Hem" />
      <NavButton text="Arkiv" />
      <NavButton text="Om" />
      <NavButton text="Kontakt" />
    </nav>
  );
}
