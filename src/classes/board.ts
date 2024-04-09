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
    const neighbors: Board[] = [];
    let blankRow: number = 0; // row index of the blank square
    let blankCol: number = 0; // column index of the blank square

    // Find the row and column index of the blank square
    for (let i = 0; i < this.boardSize; i++) {
      for (let j = 0; j < this.boardSize; j++) {
        if (this.tiles[i][j] === 0) {
          blankRow = i;
          blankCol = j;
          break;
        }
      }
    }

    // Generate neighbors by swapping the blank square with its adjacent tiles
    // Swap with the tile above the blank square
    if (blankRow > 0) {
      const neighborTiles = this.tiles.map((row) => [...row]); // create a copy of the tiles
      neighborTiles[blankRow][blankCol] = neighborTiles[blankRow - 1][blankCol];
      neighborTiles[blankRow - 1][blankCol] = 0;
      neighbors.push(new Board(neighborTiles));
    }

    // Swap with the tile below the blank square
    if (blankRow < this.boardSize - 1) {
      const neighborTiles = this.tiles.map((row) => [...row]); // create a copy of the tiles
      neighborTiles[blankRow][blankCol] = neighborTiles[blankRow + 1][blankCol];
      neighborTiles[blankRow + 1][blankCol] = 0;
      neighbors.push(new Board(neighborTiles));
    }

    // Swap with the tile to the left of the blank square
    if (blankCol > 0) {
      const neighborTiles = this.tiles.map((row) => [...row]); // create a copy of the tiles
      neighborTiles[blankRow][blankCol] = neighborTiles[blankRow][blankCol - 1];
      neighborTiles[blankRow][blankCol - 1] = 0;
      neighbors.push(new Board(neighborTiles));
    }

    // Swap with the tile to the right of the blank square
    if (blankCol < this.boardSize - 1) {
      const neighborTiles = this.tiles.map((row) => [...row]); // create a copy of the tiles
      neighborTiles[blankRow][blankCol] = neighborTiles[blankRow][blankCol + 1];
      neighborTiles[blankRow][blankCol + 1] = 0;
      neighbors.push(new Board(neighborTiles));
    }

    return neighbors;
  }

  // a board that is obtained by exchanging any pair of tiles
  twin(): Board {
    // PLS MODIFY\
    const twin: Board = new Board(this.tiles.map((row) => [...row])); // create a copy of the tiles

    // Exchanging tiles on the 1st two rows
    if (twin.tiles[0][0] === 0) { // exchange 2nd tile on first row and 1st tile on second row
      const temp = twin.tiles[0][1];
      twin.tiles[0][1] = twin.tiles[1][0];
      twin.tiles[1][0] = temp;
    } else if (twin.tiles[0][1] === 0) { // exchange 1st tile on first row and 1st tile on second row
      const temp = twin.tiles[0][0];
      twin.tiles[0][0] = twin.tiles[1][0];
      twin.tiles[1][0] = temp;
    } else { // exchange 1st and 2nd tile on first row
      const temp = twin.tiles[0][0];
      twin.tiles[0][0] = twin.tiles[0][1];
      twin.tiles[0][1] = temp;
    }

    return twin;
  }
}

export default Board;
