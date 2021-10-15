export const ContainerTypes = {
  Main: "Main",
  InnerWide: "InnerWide",
  InnerCentered: "InnerCentered",
};

const ContainerStyles = {
  Main: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  InnerWide: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  InnerCentered: {
    display: "flex",
    flexDirection: "column",
    width: "90%",
    maxWidth: "1200px",
  },
};

export function Container({ type, children }) {
  return <div style={ContainerStyles[type]}>{children}</div>;
}
