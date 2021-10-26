const gridItemStyle = {
  position: "relative",
  color: "#FFF",
  padding: "0",
  boxSizing: "border-box",
  "text-align": "center",
};

export function GridItem({ children }) {
  return <li style={gridItemStyle}>{children}</li>;
}
