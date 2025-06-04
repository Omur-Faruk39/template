import eachBlock from "./eachBlock.js";

function checker(blocks) {
  let isPossible = false;

  if (blocks.some((value) => value.yStart > 21)) {
    return true;
  }

  isPossible = blocks.some((value) => {
    // console.log(blocks.xStart);
    return eachBlock[value.yStart - 1][value.xStart - 1];
  });
  return isPossible;
}

export default checker;
