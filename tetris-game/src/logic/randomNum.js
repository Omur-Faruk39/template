import { block } from "./shape";

function randomNum(num) {
  return Math.floor(Math.random() * num);
}

function randomShape() {
  const randdomNumber = randomNum(block.length);
  const shape = block[randdomNumber];
  return shape;
}

export { randomNum, randomShape };
