import Solver from "./classes/solver";
import Board from "./classes/board";
import { readFileSync } from "fs";

const fileName: string = process.argv[2];

const lines: string[] = readFileSync(`../puzzles/${fileName}`, "utf8").split(
  "\n"
);
const n: number = parseInt(lines[0]);
const tiles: number[][] = Array(n).fill(Array(n));

lines.forEach((line, row) => {
  if (row === 0) {
    return;
  }

  const nums = line
    .split(" ")
    .map((s) => parseInt(s))
    .filter((x) => !isNaN(x));

  if (nums.length === 0) {
    return;
  }

  tiles[row - 1] = nums;
});

const initial: Board = new Board(tiles);
console.log(initial.toString() + "\n");

// solve the puzzle
const solver: Solver = new Solver(initial);

// print solution to standard output
if (solver.isSolvable() === false) {
  console.log("No solution possible");
} else {
  console.log("Minimum number of moves = " + solver.moves() + "\n");
  let solution = solver.solution()
    if (solution) {
        solution.forEach(board => console.log(`${board.toString()} \n`))
    }

  // for (let board of solver.solution()) {
  //   console.log(board.toString());
  // }
}
