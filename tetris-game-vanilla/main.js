import shape from "./helper/shape.js";
import randomNum from "./helper/randomNum.js";
import creatingBlockShape from "./helper/creatingBlockShape.js";
import checker from "./helper/checker.js";
import eachBlock from "./helper/eachBlock.js";

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

creator();

function main() {
  renderBlock(creatingBlock);
  // console.log(checker(creatingBlock));

  interval = setInterval(() => {
    if (!checker(creatingBlock)) {
      // console.log("hello");

      horizontalPosition += 1;
      creatingBlock = creatingBlockShape({
        angle,
        shapeIndex,
        varticalPosition,
        horizontalPosition,
      });
      console.log(creatingBlock);
      renderBlock(creatingBlock);
    } else {
      clearInterval(interval);
      allBlock.concat(creatingBlock);

      creatingBlock.forEach((value) => {
        console.log(value.yStart, value.xStart);
        // console.log(eachBlock[value.yStart - 1][value.xStart - 1]);

        eachBlock[value.yStart - 2][value.xStart - 1] = false;
      });
      horizontalPosition = 0;
      creatingBlock = [];
      creator();
    }
  }, [500]);
}

function renderBlock(arr) {
  const blocks = [];
  // console.log(arr);

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
