import Solver from "./classes/solver";
import Board from "./classes/board";

const sampleTiles2: number[][] = [[5, 1, 8], [2, 7, 3], [4, 0, 6]];
/**
 5  1  8 
 2  7  3 
 4  0  6 
*/

const sampleBoard2: Board = new Board(sampleTiles2);

const solver2: Solver = new Solver(sampleBoard2);
// let res = solver2.solve()

// res.forEach((board) => {
//   console.log(board.toString());
//   console.log("--------------------"); // Add a line break
// });

