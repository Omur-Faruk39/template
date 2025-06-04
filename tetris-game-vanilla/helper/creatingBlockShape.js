import shape from "./shape.js";

function creatingBlockShape({
  angle,
  shapeIndex,
  varticalPosition,
  horizontalPosition,
}) {
  const block = [];
  if (angle) {
    const blockShape = shape[shapeIndex];

    blockShape.shape.forEach((item1, index1) => {
      item1.forEach((item2, index2) => {
        if (item2 !== 0) {
          block.push({
            xStart: index2 + 1 + varticalPosition,
            xEnd: index2 + 2 + varticalPosition,
            yStart: index1 + 1 + horizontalPosition,
            yEnd: index1 + 2 + horizontalPosition,
            color: blockShape.color,
          });
        }
      });
    });
  }

  return block;
}

export default creatingBlockShape;
