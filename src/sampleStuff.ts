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

  
  // solvePuzzle(board: Board, counter? : number | null) : SearchNode | null {
  //   // YOUR CODE HERE
  //   const 

  //   return null;
  //   // let curBoard: Board = this.board;
  //   // let prevBoard: Board | null = null;
  //   // let prioNum: number;
  //   // let neighbors: Board[] = [];
  //   // let neighborMap: Map<number, Board> = new Map<number, Board>();
  //   // let result: Board[] = [];

  //   // while(!curBoard.isGoal()) {
  //   //   if (this.moveCount !== 0) {
  //   //     prevBoard = curBoard;
  //   //   }

  //   //   this.moveCount++;
  //   //   const heap = new MinHeap<SearchNode>([], {comparator: (a, b) => a.priority() - b.priority()});
      
  //   //   neighbors = curBoard.neighbors();
  //   //   neighbors.forEach((neighbor) => {
  //   //     prioNum = neighbor.manhattan() + this.moveCount;
  //   //     heap.add(new SearchNode(prioNum, curBoard));
  //   //     neighborMap.set(prioNum, neighbor);
  //   //   });

  //   //   const nextPrioMoves = heap.poll()?.prioMoves;
  //   //   curBoard = neighborMap.get(nextPrioMoves !== undefined ? nextPrioMoves : 0)!;
  //   //   result.push(curBoard);
  //   // }

  //   // return result;
  // }