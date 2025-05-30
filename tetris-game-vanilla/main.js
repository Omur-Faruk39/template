import shape from "./helper/shape.js";
import randomNum from "./helper/randomNum.js";
import creatingBlockShape from "./helper/creatingBlockShape.js";
import checker from "./helper/checker.js";

const bord = document.querySelector(".bord");

let horizontalPosition = 0;
const allBlock = [];
let creatingBlock = [];
let angle = 1;
let varticalPosition;
let interval;
let shapeIndex;

function creator() {
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
}

function main() {
  interval = setInterval(() => {
    if (checker()) {
      horizontalPosition += 1;
      creatingBlock = creatingBlockShape({
        angle,
        shapeIndex,
        varticalPosition,
        horizontalPosition,
      });
      renderBlock(creatingBlock);
    }
    {
      allBlock.concat(creatingBlock);
      creatingBlock = [];
      creator();
    }
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

creator();
