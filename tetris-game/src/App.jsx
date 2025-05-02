// https://chatgpt.com/share/68111244-5a34-8004-b729-b52986dda532

import React, { useEffect } from "react";
import { randomShape, randomNum } from "./logic/randomNum";
import { isFree } from "./logic/helper";
import CreatingBlock from "./components/CreatingBlock";

function App() {
  const [savingBlock, setSavingBlock] = React.useState([]);
  const [block, setBlock] = React.useState({
    ...randomShape(),
    angle: 0,
    aria: [0, 1, 2, 2],
  });

  if (block?.aria[0] === 0) {
    setBlock((pre) => {
      const number = randomNum(14 - pre.shape[0].length);
      return { ...pre, aria: [number, 1, number + 1, 2] };
    });
  }

  useEffect(() => {
    let interval;
    if (block) {
      if (isFree(block)) {
        clearInterval(interval);
        setSavingBlock((pre) => [...pre, block]);
        setBlock();
      } else {
        interval = setInterval(() => {
          setBlock((prev) => ({
            ...prev,
            aria: prev.aria.map((item, index) => {
              return index === 1 || index === 3 ? item + 1 : item;
            }),
          }));
        }, 100);
      }
    } else {
      setBlock({ ...randomShape(), angle: 0, aria: [0, 1, 1, 2] });
    }

    return () => {
      clearInterval(interval);
    };
  }, [block]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleKeyDown = (e) => {
    console.log(e);
    if (e.key === "ArrowUp") {
      setBlock((pre) => ({ ...pre, angle: pre.angle + 1 }));
    }
    console.log(e.key === "ArrowRight");
  };

  return (
    <div className="bord">
      <CreatingBlock block={block} />

      {savingBlock.map((item) => {
        return <CreatingBlock key={item.aria[1] + item.aria[3]} block={item} />;
      })}
    </div>
  );
}

export default App;

// function App() {
//   // console.log(arr);
//   const [savingArr, setSavingArr] = React.useState([]);
//   const [creatingArr, setCreatingArr] = React.useState({});
//   // const [height, setHeight] = React.useState(0);

//   React.useEffect(() => {
//     let interval;
//     if (creatingArr.height !== undefined) {
//       if (creatingArr.height >= 20) {
//         clearInterval(interval);

//         setSavingArr((prev) => [...prev, { ...creatingArr }]);
//         setCreatingArr({});
//       } else {
//         interval = setInterval(() => {
//           setCreatingArr((prev) => ({ ...prev, height: prev.height + 1 }));
//         }, 500);
//       }
//     } else {
//       setCreatingArr({ block: shapeArr(), height: 0 });
//     }
//     return () => clearInterval(interval);
//   }, [creatingArr, savingArr]);

//   console.log(savingArr);

//   return (
//     <div className="bord">

//       {creatingArr.height === undefined ? null : (
//         <div
//           className="shape"
//           style={{
//             height: `${creatingArr.block.shape.block.length * 25}px`,
//             width: `${creatingArr.block.shape.block[0].length * 25}px`,
//             top: `${creatingArr.height * 25}px`,
//           }}
//         >
//           {creatingArr.block.arr.map((item, index) => (
//             <Block
//               key={index}
//               color={creatingArr.block.shape.color}
//               position={item}
//             />
//           ))}
//         </div>
//       )}

//       {savingArr.map((data, idx) => (
//         <div
//           key={idx}
//           className="shape"
//           style={{
//             height: `${data?.block?.shape?.block?.length * 25 || 0}px`,
//             width: `${data?.block?.shape?.block?.[0]?.length * 25 || 0}px`,
//             top: `${data?.height * 25 || 0}px`,
//             left: `${data.left * 25 || 0}px`,
//           }}
//         >
//           {data?.block?.arr?.map((item, index) => (
//             <Block
//               key={`${idx}-${index}`}
//               color={data?.block?.shape?.color}
//               position={item}
//             />
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }
