import { angle, eachBlock } from "./shape";

function isFree(block) {
  let boolian = false;

  const arr = blockArr(block);

  boolian = arr.some((item) => {
    if (item[0] >= 22) {
      return true;
    } else if (!eachBlock[item[0] - 1]) {
      return true;
    } else if (eachBlock[item[0] - 1][item[1] - 1]) {
      return true;
    }

    return false;
  });

  if (boolian) {
    arr.forEach((item) => {
      eachBlock[item[0] - 2][item[1] - 1] = true;
    });
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
  } else if (block?.angle === 1) {
    angle[block?.index].shape.forEach((i1, in1) => {
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
  } else if (block?.angle === 2) {
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
