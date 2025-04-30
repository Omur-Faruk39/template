import React from "react";
import Block from "./Block";

// {
//   shape: [
//     [0, 1, 0],
//     [1, 1, 1],
//   ],
//   color: "#ffd800",
// },
//{ ...randomShape(), angle: 0, aria: [1, 1, 1, 1] }

function CreatingBlock({ block }) {
  const arr = [];

  if (block?.angle === 0) {
    block?.shape?.forEach((i1, in1) => {
      i1.forEach((i2, in2) => {
        if (i2) {
          arr.push([
            in1 + block?.aria[1],
            in2 + block?.aria[0],
            in1 + block?.aria[3],
            in2 + block?.aria[2],
          ]);
        }
      });
    });
  }

  // console.log(arr);

  return (
    <>
      {arr.map((item, index) => (
        <Block
          key={index + item[3]}
          color={block.color}
          position={`${item[0]}/${item[1]}/${item[2]}/${item[3]}`}
        />
      ))}
    </>
  );
}

export default CreatingBlock;
