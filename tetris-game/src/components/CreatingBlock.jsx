import { blockArr } from "../logic/helper";
import Block from "./Block";

function CreatingBlock({ block }) {
  const arr = blockArr(block);

  return (
    <>
      {arr.map((item, index) => (
        <Block key={`${index + item[1]}`} color={block.color} position={item} />
      ))}
    </>
  );
}

export default CreatingBlock;
