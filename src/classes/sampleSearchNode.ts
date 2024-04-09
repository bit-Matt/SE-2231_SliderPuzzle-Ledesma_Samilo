import Board from './board'
import { MinHeap } from 'min-heap-typed';

class SearchNode {
  // board: Board;
  moves: number;
  previousSearchNode: SearchNode | null;

  constructor(moves: number, previousSearchNode: SearchNode | null = null) {
    // this.board = board;
    this.moves = moves;
    this.previousSearchNode = previousSearchNode;
  }

  priority(): number {
    return this.moves;
  }
}

const heap = new MinHeap<SearchNode>([], {comparator: (a, b) => a.priority() - b.priority()});

const node1 = new SearchNode(13);
const node2 = new SearchNode(15);
const node3 = new SearchNode(8);
const node4 = new SearchNode(1);
const node5 = new SearchNode(22);
const node6 = new SearchNode(5);

heap.add(node1);
heap.add(node2);
heap.add(node3);
heap.add(node4);
heap.add(node5);
heap.add(node6);

console.log(heap.poll());
console.log(heap.peek());
console.log(heap.poll());
console.log(heap.peek());
console.log(heap.poll());
console.log(heap.poll());
console.log(heap.poll());
console.log(heap.poll());
console.log(heap.poll());
// console.log(heap.add(node1));