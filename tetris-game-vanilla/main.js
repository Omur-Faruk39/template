import shape from "./helper/shape.js";
import randomNum from "./helper/randomNum.js";
import creatingBlockShape from "./helper/creatingBlockShape.js";

const bord = document.querySelector(".bord");

let horizontalPosition = 0;
let creatingBlock = [];
let angle = 1;
let varticalPosition;
let interval;
let shapeIndex;

if (creatingBlock.length === 0) {
  shapeIndex = randomNum(7);
  varticalPosition = randomNum(12 - shape[shapeIndex].shape[0].length);
  creatingBlock = creatingBlockShape({
    angle,
    shapeIndex,
    varticalPosition,
    horizontalPosition,
  });
  main();
}

function main() {
  interval = setInterval(() => {
    horizontalPosition += 1;
    creatingBlock = creatingBlockShape({
      angle,
      shapeIndex,
      varticalPosition,
      horizontalPosition,
    });
    renderBlock(creatingBlock);
  }, [500]);
}

function renderBlock(arr) {
  const blocks = [];

  arr.forEach((item) => {
    const block = document.createElement("div");
    block.classList.add("block");
    block.style.backgroundColor = item.color;
    block.style.gridColumn = `${item.xStart}/${item.xEnd}`;
    block.style.gridRow = `${item.yStart}/${item.yEnd}`;

    blocks.push(block);
  });
  bord.innerHTML = "";

  blocks.map((block) => bord.appendChild(block));
}
