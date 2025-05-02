import { eachBlock } from "./shape";

function isFree(block) {
  let boolian = false;

  const arr = blockArr(block);

  boolian = arr.every((item) => {
    console.log(item);
    if (item[0] >= 22) {
      return true;
    }

    if (!eachBlock[item[0] - 1]) {
      return true;
    }

    return eachBlock[item[0] - 1][item[1] - 1];
  });

  if (boolian) {
    arr.forEach((item) => {
      // console.log(eachBlock[item[0] - 3]);
      if (item[0] > 22) {
        eachBlock[item[0] - 2][item[1] - 1] = true;
      } else {
        eachBlock[item[0] - 1][item[1] - 1] = true;
      }
    });
    // console.log(eachBlock);
  }

  return boolian;
}

function blockArr(block) {
  const arr = [];

  if (block?.angle === 0) {
    block?.shape?.forEach((i1, in1) => {
      i1.forEach((i2, in2) => {
        if (i2) {
          arr.push([
            in1 + block?.aria[1],
            in2 + block?.aria[0],
            in1 + block?.aria[3],
            in2 + block?.aria[2],
          ]);
        }
      });
    });
  }

  return arr;
}

export { isFree, blockArr };
