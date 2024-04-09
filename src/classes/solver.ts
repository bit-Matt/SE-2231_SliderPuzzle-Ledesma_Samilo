import Board from "./board";
import { MinHeap } from "min-heap-typed";
import SearchNode from "./searchNode";

class Solver {
  // find a solution to the initial board (using the A* algorithm)
  private board: Board;
  private twinBoard: Board;

  constructor(initial: Board) {
    // YOUR CODE HERE
    this.board = initial;
    this.twinBoard = initial.twin();
  }

  solvePuzzle(board: Board, count? : number | null) : false | SearchNode {
    
    const initial = new SearchNode(board, 0)
    const heap = new MinHeap<SearchNode>([], {
      comparator: (a, b) => a.priority() - b.priority(),
    });

    heap.add(initial)

    while (true) {
      let priorityNode = heap.poll()
      
      if (priorityNode !== undefined){  
        if (priorityNode.getBoard().isGoal()) {
          return priorityNode
        }

        let board = priorityNode.getBoard()
        let moves = priorityNode.getMoves()
        let boardArray: Array<SearchNode> = []
        let neighbors = board.neighbors()

        for (let neighbor of neighbors) {
          let newBoard = new SearchNode(neighbor, moves++, priorityNode)
          boardArray.push(newBoard)
        }
        boardArray.filter(boardNode => boardNode.getBoard() !== board).forEach(newNode => heap.add(newNode))
        
        if (count) {
          if (count === 1000) {
            return false
          }
          count++
        }
      }
    }
  }

  // is the initial board solvable? (see below)
  isSolvable(): boolean {
    // PLS MODIFY
    let tileArray = this.board.tiles.reduce((acc, val) => acc.concat(val), []); // converts the board to a one-dimensional array
    let inversions = 0;

    for (let i = 0; i < tileArray.length - 1; i++) {
        for (let j = i + 1; j < tileArray.length; j++) {
            if (tileArray[i] > tileArray[j]) {
                inversions++;
            }
        }
    }

    return inversions % 2 === 0;
  }

  // min number of moves to solve initial board; -1 if unsolvable
  moves(): number {
    // PLS MODIFY
    let count = 0
    let solveBoard = this.solvePuzzle(this.board)

    if (this.isSolvable() === false) {
      return -1
    }
    if (solveBoard) {
      while (solveBoard.previousSearchNode) {
        solveBoard = solveBoard.previousSearchNode
        count++
      }
      return count
    }
    return -1;
  }

  // sequence of boards in a shortest solution; null if unsolvable
  solution(): Board[] | null {
    // PLS MODIFY
    let moves : Board[] = []
    let node = this.solvePuzzle(this.board)
    
    if (this.isSolvable() === false) {
      return null
    }

    if (node) {
      while (node.previousSearchNode) {
        moves.unshift(node.getBoard())
        node = node.previousSearchNode
      }
      return moves
    }
    return null;
  }
}

export default Solver;
