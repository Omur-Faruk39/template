import randomNum from "./randomNum.js";

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

let shape;

const size = () => {
  const size = randomNum(block.length);
  shape = block[size];
};

function shapeArr() {
  size();
  const arr = [];

  for (let i1 = 1; i1 <= shape.block.length; i1++) {
    for (let i2 = 1; i2 <= shape.block[i1 - 1].length; i2++) {
      if (shape.block[i1 - 1][i2 - 1] > 0) {
        arr.push(`${i1}/ ${i2}/ ${i1 + 1}/ ${i2 + 1}`);
      }
    }
  }

  return { arr, shape };
}

export default shapeArr;
