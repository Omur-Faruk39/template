import React, { useRef, useState } from "react";
import state from "./libs/state";

function App() {
  const [data, fun] = state();

  console.log("hello world");

  return (
    <div>
      <h1>Counter without Re-rendering</h1>
      <div>Counter: {data}</div>
      <button onClick={fun}>Increment Counter</button>
    </div>
  );
}

export default App;
