import Board from './board'

export default class SearchNode {
  // board: Board;
  board: Board;
  prioMoves: number;
  previousSearchNode: SearchNode | null;

  constructor(board: Board, prioMoves: number, previousSearchNode: SearchNode | null = null) {
    // this.board = board;
    this.board = board;
    this.prioMoves = prioMoves + this.board.manhattan();
    this.previousSearchNode = previousSearchNode;
  }

  priority(): number {
    return this.prioMoves;
  }

  getMoves(): number {
    return this.prioMoves;
  }

  getBoard(): Board {
    return this.board;
  }
}
