import shape from "./shape.js";

function creatingBlockShape({
  angle,
  shapeIndex,
  varticalPosition,
  horizontalPosition,
}) {
  const block = [];

  if (angle === 1) {
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
  } else if (angle === 3) {
    const blockShape = shape[shapeIndex];

    blockShape.shape
      .slice()
      .reverse()
      .forEach((item1, index1) => {
        item1
          .slice()
          .reverse()
          .forEach((item2, index2) => {
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
  } else if (angle === 2) {
    const blockShape = shape[shapeIndex];

    blockShape.shape
      .slice()
      .reverse()
      .forEach((item1, index1) => {
        item1.forEach((item2, index2) => {
          if (item2 !== 0) {
            block.push({
              xStart: index1 + 1 + varticalPosition, //index2 + 1 + varticalPosition,
              xEnd: index1 + 2 + varticalPosition + 1, //index2 + 2 + varticalPosition,
              yStart: index2 + 1 + horizontalPosition,
              yEnd: index2 + 2 + horizontalPosition,
              color: blockShape.color,
            });
          }
        });
      });
  } else if (angle === 4) {
    const blockShape = shape[shapeIndex];

    blockShape.shape.forEach((item1, index1) => {
      item1
        .slice()
        .reverse()
        .forEach((item2, index2) => {
          if (item2 !== 0) {
            block.push({
              xStart: index1 + 1 + varticalPosition, //index2 + 1 + varticalPosition,
              xEnd: index1 + 2 + varticalPosition + 1, //index2 + 2 + varticalPosition,
              yStart: index2 + 1 + horizontalPosition,
              yEnd: index2 + 2 + horizontalPosition,
              color: blockShape.color,
            });
          }
        });
    });
  }

  return block;
}

export default creatingBlockShape;
