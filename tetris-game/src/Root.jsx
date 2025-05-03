import CreatingBlock from "./components/CreatingBlock";

function Root({ block, savingBlock }) {
  // console.log(block);
  return (
    <>
      <CreatingBlock block={block} />

      {savingBlock.map((item) => {
        return <CreatingBlock key={item.aria[1] + item.aria[3]} block={item} />;
      })}
    </>
  );
}

export default Root;
