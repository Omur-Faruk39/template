import React from "react";
import Block from "./components/Block";
import shapeArr from "./logic/shape";

function App() {
  // console.log(arr);
  const [savingArr, setSavingArr] = React.useState([]);
  const [creatingArr, setCreatingArr] = React.useState({});
  // const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    let interval;
    if (creatingArr.height !== undefined) {
      if (creatingArr.height >= 20) {
        clearInterval(interval);
      } else {
        interval = setInterval(() => {
          setCreatingArr((prev) => ({ ...prev, height: prev.height + 1 }));
        }, 500);
      }
    } else {
      setCreatingArr({ block: shapeArr(), height: 0 });
    }
    return () => clearInterval(interval);
  }, [creatingArr]);


  return (
    <div className="bord">
      {creatingArr.height === undefined ? null : (
        <div
          className="shape"
          style={{
            height: `${creatingArr.block.shape.block.length * 25}px`,
            width: `${creatingArr.block.shape.block[0].length * 25}px`,
            top: `${creatingArr.height * 25}px`,
          }}
        >
          {creatingArr.block.arr.map((item, index) => (
            <Block
              key={index}
              color={creatingArr.block.shape.color}
              position={item}
            />
          ))}
        </div>
      )}

      {/* {arr.map(() => {
        <div
          className="shape"
          style={{
            // height: `${shape.block.length * 25}px`,
            // width: `${shape.block[0].length * 25}px`,
            top: `${height * 25}px`,
          }}
        >
          {arr.block.map((item, index) => (
            // <Block key={index} color={shape.color} position={item} />
          ))}
        </div>;
      })} */}
    </div>
  );
}

export default App;
