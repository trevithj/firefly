import React from "react";

const compactStyle = { margin: 0, padding: 0 };

export const Col = ({ children, width = 6 }) => (
  <div style={compactStyle} className={`col-sm-${width}`}>
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
