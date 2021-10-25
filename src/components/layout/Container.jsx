export const ContainerTypes = {
  Main: "Main",
  InnerWide: "InnerWide",
  InnerCentered: "InnerCentered",
};

const ContainerStyles = {
  Main: {
    display: "flex",
    width: "100vw",
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
    width: "90vw",
    maxWidth: "1200px",
  },
};

// wrapper component for content.
export function Container({ type, children }) {
  return (
    <>
      {type ? (
        <div style={ContainerStyles[type]}>{children}</div>
      ) : (
        <div style={ContainerStyles.Main}>
          <div style={ContainerStyles.InnerCentered}>{children}</div>
        </div>
      )}
    </>
  );
}
