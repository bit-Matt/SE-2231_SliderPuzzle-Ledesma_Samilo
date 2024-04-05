import Board from './classes/board';

const sampleTiles1: number[][] = [[1, 2, 3, 4], [5, 6, 7, 0], [9, 10, 11, 8], [13, 14, 15, 12]];
/**
 1  2  3  4 
 5  6  7  0 
 9 10 11  8 
13 14 15 12 
 */

const sampleBoard1: Board = new Board(sampleTiles1);

console.log(`Dimension: ${sampleBoard1.dimension()}`);
console.log(sampleBoard1.toString());
console.log(`Hamming: ${sampleBoard1.hamming()}`);
console.log(`Manhattan: ${sampleBoard1.manhattan()}`);
console.log(sampleBoard1.neighbors());
console.log("=====================================");

//------------------------------------------------------------
const sampleTiles2: number[][] = [[5, 2, 1], [4, 8, 3], [7, 6, 0]];
/**
 5  2  1 
 4  8  3 
 7  6  0 
 */

const sampleBoard2: Board = new Board(sampleTiles2);

console.log(`Dimension: ${sampleBoard2.dimension()}`);
console.log(sampleBoard2.toString());
console.log(`Hamming: ${sampleBoard2.hamming()}`);
console.log(`Manhattan: ${sampleBoard2.manhattan()}`);
console.log("=====================================");

//------------------------------------------------------------
const sampleTiles3: number[][] = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
  [51, 52, 53, 54, 55, 56, 57, 58, 59, 60],
  [61, 62, 63, 64, 65, 66, 67, 68, 69, 70],
  [71, 72, 73, 74, 75, 76, 77, 78, 79, 80],
  [81, 82, 83, 84, 85, 86, 87, 88, 89, 90],
  [91, 92, 93, 94, 95, 96, 97, 98, 99, 0]
];
/**
 1  2  3  4  5  6  7  8  9 10 
11 12 13 14 15 16 17 18 19 20 
21 22 23 24 25 26 27 28 29 30 
31 32 33 34 35 36 37 38 39 40 
41 42 43 44 45 46 47 48 49 50 
51 52 53 54 55 56 57 58 59 60 
61 62 63 64 65 66 67 68 69 70 
71 72 73 74 75 76 77 78 79 80 
81 82 83 84 85 86 87 88 89 90 
91 92 93 94 95 96 97 98 99  0 
 */

const sampleBoard3: Board = new Board(sampleTiles3);

console.log(`Dimension: ${sampleBoard3.dimension()}`);
console.log(sampleBoard3.toString());
console.log(`Hamming: ${sampleBoard3.hamming()}`);
console.log(`Manhattan: ${sampleBoard3.manhattan()}`);
console.log("=====================================");


/**
  neighbors(): Board[] {
    const neighbors: Board[] = [];
    const blankRow = this.tiles.findIndex((row) => row.includes(0));
    const blankCol = this.tiles[blankRow].indexOf(0);

    // Check if the blank square can move left
    if (blankCol > 0) {
      const leftNeighbor = new Board(this.swapTiles(blankRow, blankCol, blankRow, blankCol - 1));
      neighbors.push(leftNeighbor);
    }

    // Check if the blank square can move right
    if (blankCol < this.boardSize - 1) {
      const rightNeighbor = new Board(this.swapTiles(blankRow, blankCol, blankRow, blankCol + 1));
      neighbors.push(rightNeighbor);
    }

    // Check if the blank square can move up
    if (blankRow > 0) {
      const upNeighbor = new Board(this.swapTiles(blankRow, blankCol, blankRow - 1, blankCol));
      neighbors.push(upNeighbor);
    }

    // Check if the blank square can move down
    if (blankRow < this.boardSize - 1) {
      const downNeighbor = new Board(this.swapTiles(blankRow, blankCol, blankRow + 1, blankCol));
      neighbors.push(downNeighbor);
    }

    return neighbors;
  }

  // Helper method to swap tiles in the board
  private swapTiles(row1: number, col1: number, row2: number, col2: number): number[][] {
    const newTiles = [...this.tiles];
    const temp = newTiles[row1][col1];
    newTiles[row1][col1] = newTiles[row2][col2];
    newTiles[row2][col2] = temp;
    return newTiles;
  }
 */