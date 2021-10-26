export const ImageLabelType = {
  NoOverlay: false,
  Overlay: true,
};

export function ImageLabel({ children, isOverlay = false }) {
  // Label style
  const imageLabelStyle = {
    background: "rgba(255, 186, 122, 0.8)",
    color: "#FFF",
    margin: 0,
    fontFamily: "Playfair Display",
  };
  const imageLabelOverlayStyle = {
    position: "absolute",
    bottom: 0,
    width: "100%",
    padding: "0.5em 0",
  };
  const imageLabelNoneOverlayStyle = {
    padding: "0.5em 0",
  };

  // Label Container style
  const overlayContainerStyle = {
    display: "flex",
    position: "relative",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  };

  // Logic
  let label;
  if (isOverlay) {
    label = (
      <div style={overlayContainerStyle}>
        <h3 style={{ ...imageLabelStyle, ...imageLabelOverlayStyle }}>
          {children}
        </h3>
      </div>
    );
  } else {
    label = (
      <h3 style={{ ...imageLabelStyle, ...imageLabelNoneOverlayStyle }}>
        {children}
      </h3>
    );
  }

  // Render
  return <>{label}</>;
}
