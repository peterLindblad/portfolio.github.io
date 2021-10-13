export default function NavButton({ text, linkTo = "/" }) {
  const handleClick = () => {};
  const style = {
    background: "transparent",
    border: "none",
    padding: ".5em 1em",
    color: "white",
    fontSize: "1.5em",
  };

  return (
    <>
      <button onClick={handleClick} style={style}>
        {text}
      </button>
    </>
  );
}
