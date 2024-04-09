import Board from './classes/board';

const sampleTiles1: number[][] = [[1, 2, 3, 4], [5, 6, 7, 0], [9, 10, 11, 8], [13, 14, 15, 12]];
/**
 1  2  3  4 
 5  6  7  0 
 9 10 11  8 
13 14 15 12 
 */

const sampleTiles1_1: number[][] = sampleTiles1;
const sampleTiles1_2: number[][] = [[12, 2, 3, 4], [5, 6, 7, 0], [9, 10, 11, 8], [13, 14, 15, 1]];
/**
12  2  3  4 
 5  6  7  0 
 9 10 11  8 
13 14 15  1 
 */

const sampleBoard1: Board = new Board(sampleTiles1);
const sampleBoard1_1: Board = new Board(sampleTiles1_1);
const sampleBoard1_2: Board = new Board(sampleTiles1_2);

console.log(`Dimension: ${sampleBoard1.dimension()}`); // 4
console.log(sampleBoard1.toString());
console.log(`Hamming: ${sampleBoard1.hamming()}`); // 2
console.log(`Manhattan: ${sampleBoard1.manhattan()}`); // 2
console.log(`is Goal: ${sampleBoard1.isGoal()}`); // false
console.log(`is Equal: ${sampleBoard1.equals(sampleBoard1_1)}`); // true
console.log(`is Equal: ${sampleBoard1.equals(sampleBoard1_2)}`); // false
console.log(`Neighbors: \n${sampleBoard1.neighbors().map((board) => board.toString()).join('\n ------- \n')}`);
console.log(`------- \nTwin: \n${sampleBoard1.twin().toString()}`);
console.log("=====================================");

//----------------------------------------------------------------------------------------------------------------------------
const sampleTiles2: number[][] = [[5, 2, 1], [4, 8, 3], [7, 6, 0]];
/**
 5  2  1 
 4  8  3 
 7  6  0 
 */

const sampleTiles2_1: number[][] = [[5, 2, 1], [4, 8, 3], [7, 6, 0]];
const sampleTiles2_2: number[][] = [[1, 2, 3], [4, 5, 6], [7, 8, 0]];

const sampleBoard2: Board = new Board(sampleTiles2);
const sampleBoard2_1: Board = new Board(sampleTiles2_1);
const sampleBoard2_2: Board = new Board(sampleTiles2_2);

console.log(`Dimension: ${sampleBoard2.dimension()}`); // 3
console.log(sampleBoard2.toString());
console.log(`Hamming: ${sampleBoard2.hamming()}`); // 5
console.log(`Manhattan: ${sampleBoard2.manhattan()}`); // 8
console.log(`is Goal: ${sampleBoard2.isGoal()}`); // false
console.log(`is Goal: ${sampleBoard2_2.isGoal()}`); // true
console.log(`is Equal: ${sampleBoard2.equals(sampleBoard2_1)}`); // true
console.log(`is Equal: ${sampleBoard2.equals(sampleBoard2_2)}`); // false
console.log(`Neighbors: \n${sampleBoard2.neighbors().map((board) => board.toString()).join('\n ------- \n')}`);
console.log(`------- \nTwin: \n${sampleBoard2.twin().toString()}`);
console.log("=====================================");

//----------------------------------------------------------------------------------------------------------------------------
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

const sampleTile3_1: number[][] = sampleTiles3;
const sampleTile3_2: number[][] = [
  [2, 1, 3, 4, 5, 6, 7, 8, 9, 10],
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

const sampleBoard3: Board = new Board(sampleTiles3);
const sampleBoard3_1: Board = new Board(sampleTile3_1);
const sampleBoard3_2: Board = new Board(sampleTile3_2);

console.log(`Dimension: ${sampleBoard3.dimension()}`); // 10
console.log(sampleBoard3.toString());
console.log(`Hamming: ${sampleBoard3.hamming()}`); // 0
console.log(`Manhattan: ${sampleBoard3.manhattan()}`); // 0
console.log(`is Goal: ${sampleBoard3.isGoal()}`); // true
console.log(`is Equal: ${sampleBoard3.equals(sampleBoard3_1)}`); // true
console.log(`is Equal: ${sampleBoard3.equals(sampleBoard3_2)}`); // false
console.log(`Neighbors: \n${sampleBoard3.neighbors().map((board) => board.toString()).join('\n ------- \n')}`);
console.log(`------- \nTwin: \n${sampleBoard3.twin().toString()}`);
console.log("=====================================");
