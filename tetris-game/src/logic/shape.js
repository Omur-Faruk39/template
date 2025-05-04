// import randomNum from "./randomNum.js";

const block = [
  {
    index: 0,
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: "#ffd800",
  },
  {
    index: 1,
    shape: [
      [0, 2, 0],
      [2, 2, 2],
    ],
    color: "#7925DD",
  },
  {
    index: 2,
    shape: [
      [0, 3, 3],
      [3, 3, 0],
    ],
    color: "orange",
  },
  {
    index: 3,
    shape: [
      [4, 4, 0],
      [0, 4, 4],
    ],
    color: "red",
  },
  {
    index: 4,
    shape: [
      [5, 0, 0],
      [5, 5, 5],
    ],
    color: "green",
  },
  {
    index: 5,
    shape: [
      [0, 0, 6],
      [6, 6, 6],
    ],
    color: "#ff6400 ",
  },
  { index: 6, shape: [[7, 7, 7, 7]], color: "#00b5ff" },
];

// const angle = [
//   [
//     {
//       shape: [
//         [1, 1],
//         [1, 1],
//       ],
//       color: "#ffd800",
//     },
//     {
//       shape: [
//         [0, 2],
//         [2, 2],
//         [0, 2],
//       ],
//       color: "#7925DD",
//     },
//     {
//       shape: [
//         [0, 3],
//         [3, 3],
//         [3, 0],
//       ],
//       color: "orange",
//     },
//     {
//       shape: [
//         [4, 0],
//         [4, 4],
//         [0, 4],
//       ],
//       color: "red",
//     },
//     {
//       shape: [
//         [5, 5],
//         [0, 5],
//         [0, 5],
//       ],
//       color: "green",
//     },
//     {
//       shape: [
//         [0, 6],
//         [0, 6],
//         [6, 6],
//       ],
//       color: "#ff6400 ",
//     },
//     { shape: [[7], [7], [7], [7]], color: "#00b5ff" },
//   ],
//   [
//     {
//       index: 0,
//       shape: [
//         [1, 1],
//         [1, 1],
//       ],
//       color: "#ffd800",
//     },
//     {
//       index: 1,
//       shape: [
//         [2, 2, 2],

//         [0, 2, 0],
//       ],
//       color: "#7925DD",
//     },
//     {
//       index: 2,
//       shape: [
//         [3, 3, 0],

//         [0, 3, 3],
//       ],
//       color: "orange",
//     },
//     {
//       index: 3,
//       shape: [
//         [0, 4, 4],

//         [4, 4, 0],
//       ],
//       color: "red",
//     },
//     {
//       index: 4,
//       shape: [
//         [5, 5, 5],

//         [5, 0, 0],
//       ],
//       color: "green",
//     },
//     {
//       index: 5,
//       shape: [
//         [6, 6, 6],

//         [0, 0, 6],
//       ],
//       color: "#ff6400 ",
//     },
//     { index: 6, shape: [[7, 7, 7, 7]], color: "#00b5ff" },
//   ],
//   [
//     {
//       shape: [
//         [1, 1],
//         [1, 1],
//       ],
//       color: "#ffd800",
//     },
//     {
//       shape: [
//         [2, 0],
//         [2, 2],
//         [2, 0],
//       ],
//       color: "#7925DD",
//     },
//     {
//       shape: [
//         [3, 0],

//         [3, 3],
//         [0, 3],
//       ],
//       color: "orange",
//     },
//     {
//       shape: [
//         [0, 4],

//         [4, 4],
//         [4, 0],
//       ],
//       color: "red",
//     },
//     {
//       shape: [
//         [0, 5],

//         [0, 5],
//         [5, 5],
//       ],
//       color: "green",
//     },
//     {
//       shape: [
//         [6, 6],

//         [0, 6],
//         [0, 6],
//       ],
//       color: "#ff6400 ",
//     },
//     { shape: [[7], [7], [7], [7]], color: "#00b5ff" },
//   ],
// ];

const eachBlock = [
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
];

// let shape;

// const size = () => {
//   const size = randomNum(block.length);
//   shape = block[size];
// };

export { block, eachBlock };
// import randomNum from "./randomNum.js";

// const block = [
//   {
//     block: [
//       [1, 1],
//       [1, 1],
//     ],
//     color: "red",
//   },
//   {
//     block: [
//       [0, 2, 0],
//       [2, 2, 2],
//     ],
//     color: "green",
//   },
// ];

// let shape;

// const size = () => {
//   const size = randomNum(block.length);
//   shape = block[size];
// };

// function shapeArr() {
//   size();
//   const arr = [];

//   for (let i1 = 1; i1 <= shape.block.length; i1++) {
//     for (let i2 = 1; i2 <= shape.block[i1 - 1].length; i2++) {
//       if (shape.block[i1 - 1][i2 - 1] > 0) {
//         arr.push(`${i1}/ ${i2}/ ${i1 + 1}/ ${i2 + 1}`);
//       }
//     }
//   }

//   return { arr, shape };
// }

// export default shapeArr;
