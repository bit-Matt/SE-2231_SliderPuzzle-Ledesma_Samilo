import Board from "./board";
import { MinHeap } from "min-heap-typed";
import SearchNode from "./searchNode";
import newBoardNode from "../utils/newBoardNode";

class Solver {
  // find a solution to the initial board (using the A* algorithm)
  // private moveCount: number;
  private board: Board;
  private twinBoard: Board;

  constructor(initial: Board) {
    // YOUR CODE HERE
    // this.moveCount = 0;
    this.board = initial;
    this.twinBoard = initial.twin();
  }

  // is the initial board solvable? (see below)
  isSolvable(): boolean {
    // PLS MODIFY
    let counter = 0

    while (counter < 2000) {
      let solvedBoard = this.solve(this.board, counter)

      if (solvedBoard) {
        return true
      }

      let solvedTwinBoard = this.solve(this.twinBoard, counter)

      if (solvedTwinBoard) {
        return false
      }
      counter += 1
    }

    return false
  }

  // min number of moves to solve initial board; -1 if unsolvable
  moves(): number {
    // PLS MODIFY
    if (!this.isSolvable()) {
      return -1
    }
    
    let counter = 0

    let node = this.solve(this.board)

    if (node) {
      while (node.previousSearchNode) {
        node = node.previousSearchNode
        counter++
      }

      return counter
    }

    return -1;
  }

  // sequence of boards in a shortest solution; null if unsolvable
  solution(): Board[] | null {
    // PLS MODIFY
    if (!this.isSolvable()) {
      return null
    }

    let moves : Board[] = []

    let node = this.solve(this.board)

    if (node) {
      while (node.previousSearchNode) {
        moves.unshift(node.getBoard())
        node = node.previousSearchNode
      }

      return moves
    }

    return null;
  }

  solve(board: Board, counter? : number | null) : false | SearchNode {
    const heap = new MinHeap<SearchNode>([], {
      comparator: (a, b) => a.priority() - b.priority(),
    });

    const initialSearchNode = new SearchNode(board, 0)
    heap.add(initialSearchNode)

    while (true) {
      let priorityNode = heap.poll()

      if (!priorityNode) {
        return false
      }
      
      if (priorityNode.getBoard().isGoal()) {
        return priorityNode
      }

      let newNodes = newBoardNode(priorityNode)
      newNodes.forEach(newNode => heap.add(newNode))

      if (counter) {
        counter--
        if (counter <= 0) {
          return false
        }
      }
    }
  }

  
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
}

export default Solver;
