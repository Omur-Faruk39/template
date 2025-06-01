import eachBlock from "./eachBlock.js";

function checker(blocks) {
  let isPossible = false;

  if (blocks.some((value) => value.yStart > 21)) {
    return true;
  }

  isPossible = blocks.some((value) => {
    // console.log(eachBlock[value.yStart][value.xStart]);
    return eachBlock[value.yStart - 1][value.xStart];
  });
  return isPossible;
}

export default checker;
