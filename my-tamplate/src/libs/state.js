import { useState } from "react";

function state () {
  const [data, setData] = useState(0);
  const fun = () => {
    setData((pre) => pre + 1);
  }

  return [data, fun];
}

export default state;