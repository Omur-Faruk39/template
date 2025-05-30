import eachBlock from "./eachBlock.js";

function checker(blocks) {
  let isPossible = true;

  if (blocks.every((value) => value.xStart === 22)) {
    return false;
  }

  isPossible = blocks.every((value) => {
    return eachBlock[value.xStart][value.yStart - 1];
  });
  return true;
}

export default checker;
