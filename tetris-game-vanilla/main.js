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
      // console.log(creatingBlock);
      renderBlock(creatingBlock);
    } else {
      clearInterval(interval);
      creatingBlock.forEach((item) => {
        allBlock.push(item);
      });

      creatingBlock.forEach((value) => {
        // console.log(value.yStart, value.xStart);
        // console.log(eachBlock[value.yStart - 1][value.xStart - 1]);

        eachBlock[value.yStart - 2][value.xStart - 1] = true;
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

  if (allBlock.length > 0) {
    allBlock.forEach((item) => {
      const block = document.createElement("div");
      block.classList.add("block");
      block.style.backgroundColor = item.color;
      block.style.gridColumn = `${item.xStart}/${item.xEnd}`;
      block.style.gridRow = `${item.yStart}/${item.yEnd}`;

      blocks.push(block);
    });
  }

  bord.innerHTML = "";

  blocks.map((block) => bord.appendChild(block));
}

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    if (varticalPosition === 0) {
      console.log("not able");
    } else {
      varticalPosition -= 1;
    }
  } else if (e.key === "ArrowRight") {
    if (varticalPosition + shape[shapeIndex].shape[0].length === 12) {
      console.log("not able");
    } else {
      varticalPosition += 1;
    }
  } else if (e.key === "ArrowUp") {
    angle = angle === 4 ? 1 : angle + 1;
    console.log(angle);
  }

  renderBlock(creatingBlock);
  // console.log(e.key);
});
