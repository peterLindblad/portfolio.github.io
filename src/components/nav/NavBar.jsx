import NavButton from "./NavButton";
import Logo from "./Logo";

const navStyle = {
  background: "#FFBA7A",
  display: "flex",
  justifyContent: "end",
  padding: "0em 0.3em 0em 2em",
  fontFamily: "Playfair Display",
};

export default function NavBar() {

  const scrollToBottom = ()=>
  {
    window.scrollTo({ 
      top: document.documentElement.scrollHeight, 
      behavior: "smooth"
    });
  }

  return (
    <nav style={navStyle}>
      <Logo />
      <NavButton text="Hem" path="/" />
      <NavButton text="Arkiv" path="/archive" />
      <NavButton text="Om" onClick={scrollToBottom} path="#" />
    </nav>
  );
}
