import { blockArr } from "../logic/helper";
import Block from "./Block";

// {
//   shape: [
//     [0, 1, 0],
//     [1, 1, 1],
//   ],
//   color: "#ffd800",
// },
//{ ...randomShape(), angle: 0, aria: [1, 1, 1, 1] }

function CreatingBlock({ block }) {
  const arr = blockArr(block);

  // console.log(arr);

  return (
    <>
      {arr.map((item, index) => (
        <Block key={index + item[3]} color={block.color} position={item} />
      ))}
    </>
  );
}

export default CreatingBlock;
