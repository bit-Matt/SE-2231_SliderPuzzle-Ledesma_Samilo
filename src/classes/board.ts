import goalBoard from "../utils/goalBoard";

class Board {
  // create a board from an n-by-n array of tiles,
  // where tiles[row][col] = tile at (row, col)
  private tiles: number[][] = [];
  private goalBoardTiles: number [][];
  public boardSize: number = 0;

  constructor(tiles: number[][]) {
    // YOUR CODE HERE
    this.tiles = tiles;
    this.boardSize = tiles.length;
    this.goalBoardTiles = goalBoard(this.boardSize);
  }

  // string representation of this board
  toString(): string {
    // PLS MODIFY
    return this.tiles.map((row) => row.map((tile) => tile.toString().padStart(2, " ")).join(" ")).join("\n");
  }

  // board dimension n
  dimension(): number {
    // PLS MODIFY
    return this.boardSize;
  }

  // number of tiles out of place
  hamming(): number {
    // PLS MODIFY
    let count = 0;
    for (let i = 0; i < this.boardSize; i++) {
      for (let j = 0; j < this.boardSize; j++) {
        if (this.tiles[i][j] === 0) continue; // skip the empty tile (0)
        if (this.tiles[i][j] !== this.goalBoardTiles[i][j]) {
          count++;
        }
      }
    }
    return count;
  }

  // sum of Manhattan distances between tiles and goal
  manhattan(): number {
    // PLS MODIFY
    let count = 0;
    for (let i = 0; i < this.boardSize; i++) {
      for (let j = 0; j < this.boardSize; j++) {
        if (this.tiles[i][j] === 0) continue; // skip the empty tile (0)
        const currentTile = this.tiles[i][j];
        const currentRow = Math.floor((currentTile - 1) / this.boardSize);
        const currentCol = (currentTile - 1) % this.boardSize;
        count += Math.abs(i - currentRow) + Math.abs(j - currentCol);
      }
    }

    return count;
  }

  // is this board the goal board?

  isGoal(): boolean {
    // PLS MODIFY
    if (this.hamming() === 0) {
      return true;
    }
    return false;
  }

  // does this board equal y?
  equals(y: Board): boolean {
    // PLS MODIFY
    if (this.boardSize !== y.boardSize) {
      return false;
    }
    if (this.toString() !== y.toString()) {
      return false;
    }

    return true;
  }

  // all neighboring boards
  neighbors(): Board[] {
    // PLS MODIFY
    

    return [];
  }

  // a board that is obtained by exchanging any pair of tiles
  twin(): Board {
    // PLS MODIFY
    return new Board([[]]);
  }
}

export default Board;
