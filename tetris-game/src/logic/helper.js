function isFree(block) {
  let boolian = false;

  if (block.aria[3] >= 22) {
    boolian = true;
  }

  return boolian;
}

export { isFree };
