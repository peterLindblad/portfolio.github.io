const gridItemStyle = {
  position: "relative",
  color: "#FFF",
  padding: "0",
  boxSizing: "border-box",
  textAlign: "center",
};

export function GridItem({ children }) {
  return <li style={gridItemStyle}>{children}</li>;
}
