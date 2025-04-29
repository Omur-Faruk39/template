import React from "react";

function Block({ color, position }) {
  return (
    <div
      className="block"
      style={{ backgroundColor: color, gridArea: position }}
    ></div>
  );
}

export default Block;
