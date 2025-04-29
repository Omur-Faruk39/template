import React from "react";
import Block from "./components/Block";
import shapeArr, { shape } from "./logic/shape";

function App() {
  // console.log(arr);
  const arr = shapeArr();

  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
    let interval;
    if (height >= 20) {
      clearInterval(interval);
    } else {
      interval = setInterval(() => {
        setHeight((prev) => prev + 1);
      }, 500);
    }
    return () => clearInterval(interval);
  }, [height]);

  return (
    <div className="bord">
      <div
        className="shape"
        style={{
          height: `${shape.block.length * 25}px`,
          width: `${shape.block[0].length * 25}px`,
          top: `${height * 25}px`,
        }}
      >
        {arr.map((item, index) => (
          <Block key={index} color={shape.color} position={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
