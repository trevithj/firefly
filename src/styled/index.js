import React from "react";

const compactStyle = { margin: 0, padding: 0 };

export const Col = ({ style = {}, children, width = 6 }) => (
  <div style={{ ...compactStyle, ...style }} className={`col-md-${width}`}>
    {children}
  </div>
);

export const Row = ({ style = {}, justify = "start", children }) => (
  <div
    style={{ ...compactStyle, ...style }}
    className={`row justify-content-${justify}`}
  >
    {children}
  </div>
);
