import React, { useEffect, useState } from "react";

const gridStyle = {
  display: "grid",
  gridGap: "1rem",
  padding: 0,
  margin: 0,
  boxSizing: "border-box",
  listStyleType: "none",
};

const gridColumnAmount = {
  1: {
    gridTemplateColumns: "100%",
  },
  2: {
    gridTemplateColumns: "repeat(2, 2fr)",
  },
  3: {
    gridTemplateColumns: "repeat(3, 3fr)",
  },
  4: {
    gridTemplateColumns: "repeat(4, 4fr)",
  },
  5: {
    gridTemplateColumns: "repeat(5, 5fr)",
  },
};

export function GridContainer({ children, maxHeight }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [columns, setColumns] = useState(4);

  useEffect(() => {
    const debouncedHandleResize = function handleResize() {
      setWidth(window.innerWidth);
    };

    window.addEventListener("resize", debouncedHandleResize);
    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, [width]);

  useEffect(() => {
    if (width < 600) setColumns(1);
    else if (width < 800) setColumns(2);
    else if (width < 1000) setColumns(3);
    else if (width > 1200) setColumns(4);
  }, [width]);

  return (
    <ul style={{ ...gridStyle, ...gridColumnAmount[columns] }}>{children}</ul>
  );
}
