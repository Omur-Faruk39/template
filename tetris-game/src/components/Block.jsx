import React from "react";

function Block({ color, position }) {
  return (
    <div
      className="block"
      style={{
        backgroundColor: color,
        gridRow: `${position[0]} / ${position[2]}`,
        gridColumn: `${position[1]} / ${position[3]}`,
      }}
    ></div>
  );
}

export default Block;
