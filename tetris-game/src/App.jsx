import React from "react";
import Block from "./components/Block";
import randomNum from "./logic/randomNum";

const block = [
  {
    block: [
      [1, 1],
      [1, 1],
    ],
    color: "red",
  },
  {
    block: [
      [0, 2, 0],
      [2, 2, 2],
    ],
    color: "green",
  },
];

const size = randomNum(block.length);
const shape = block[size];

function App() {
  const arr = [];

  for (let i1 = 1; i1 <= shape.block.length; i1++) {
    for (let i2 = 1; i2 <= shape.block[i1].length; i2++) {
      if (shape.block[i1][i2] > 0) {
        arr.push([`${i2}/ ${i1}/ ${i2 + 1}/ ${i1 + 1}`]);
      }
    }
  }

  console.log(arr);

  return (
    <div className="bord">
      <div
        className="shape"
        style={{
          height: `${shape.block.length * 25}px`,
          width: `${shape.block[0].length * 25}px`,
        }}
      ></div>
    </div>
  );
}

export default App;
