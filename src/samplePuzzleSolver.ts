
interface PuzzleState {
  board: number[][];
  cost: number;
  heuristic: number;
  prev?: PuzzleState;
}

class PriorityQueue<T> {
  items: { item: T; priority: number }[];

  constructor() {
    this.items = [];
  }

  enqueue(item: T, priority: number): void {
    this.items.push({ item, priority });
    this.items.sort((a, b) => a.priority - b.priority);
  }

  dequeue(): T | undefined {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift()?.item;
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }
}

function manhattanDistance(a: number[], b: number[]): number {
  let distance = 0;
  for (let i = 0; i < a.length; i++) {
    const aIndex = a.indexOf(i);
    const bIndex = b.indexOf(i);
    const aRow = Math.floor(aIndex / 3);
    const aCol = aIndex % 3;
    const bRow = Math.floor(bIndex / 3);
    const bCol = bIndex % 3;
    distance += Math.abs(aRow - bRow) + Math.abs(aCol - bCol);
  }
  return distance;
}

function generateSuccessors(state: PuzzleState): PuzzleState[] {
  const successors: PuzzleState[] = [];
  const directions = [[0, -1], [0, 1], [-1, 0], [1, 0]]; // Left, Right, Up, Down

  const blankIndex = state.board.flat().indexOf(0);
  const blankRow = Math.floor(blankIndex / 3);
  const blankCol = blankIndex % 3;

  for (const [dx, dy] of directions) {
    const newRow = blankRow + dx;
    const newCol = blankCol + dy;

    if (newRow >= 0 && newRow < 3 && newCol >= 0 && newCol < 3) {
      const newBoard = state.board.map(row => row.slice());
      [newBoard[blankRow][blankCol], newBoard[newRow][newCol]] = [newBoard[newRow][newCol], newBoard[blankRow][blankCol]];
      const newState: PuzzleState = {
        board: newBoard,
        cost: state.cost + 1,
        heuristic: manhattanDistance(newBoard.flat(), goalState.flat()),
        prev: state
      };
      successors.push(newState);
    }
  }

  return successors;
}

const goalState = [
  [1, 4, 3],
  [7, 0, 8],
  [6, 5, 2]

/**
 1  4  3 
 7  0  8 
 6  5  2 
*/
];

function solvePuzzle(initialState: number[][]): PuzzleState | undefined {
  const openList = new PriorityQueue<PuzzleState>();
  const closedList = new Set<string>();

  const initialCost = 0;
  const initialHeuristic = manhattanDistance(initialState.flat(), goalState.flat());
  const initialNode: PuzzleState = {
    board: initialState,
    cost: initialCost,
    heuristic: initialHeuristic
  };

  openList.enqueue(initialNode, initialCost + initialHeuristic);

  while (!openList.isEmpty()) {
    const currentState = openList.dequeue()!;
    if (currentState.heuristic === 0) {
      return currentState;
    }
    const currentStateKey = currentState.board.flat().join('');
    if (closedList.has(currentStateKey)) {
      continue;
    }
    closedList.add(currentStateKey);

    const successors = generateSuccessors(currentState);
    for (const successor of successors) {
      const successorKey = successor.board.flat().join('');
      if (!closedList.has(successorKey)) {
        openList.enqueue(successor, successor.cost + successor.heuristic);
      }
    }
  }

  return undefined;
}

function printSolution(solution: PuzzleState): void {
  const moves: number[][][] = [];
  let currentState: PuzzleState | undefined = solution;
  while (currentState) {
    moves.unshift(currentState.board);
    currentState = currentState.prev;
  }
  for (const board of moves) {
    console.log(board.map(row => row.join(' ')).join('\n') + '\n');
  }
}

// Example usage:
const initialState = [
  [1, 2, 3],
  [4, 0, 6],
  [7, 5, 8]
];

const solution = solvePuzzle(initialState);
if (solution) {
  console.log("Solution found:");
  printSolution(solution);
} else {
  console.log("No solution found.");
}
