
function goalBoard(n: number): number[][] {
  const tiles: number[][] = Array.from({length: n}, () => Array(n));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === n - 1 && j === n - 1) {
        tiles[i][j] = 0;
      } else {
        tiles[i][j] = i * n + j + 1;
      }
    }
  }

  return tiles;
}

export default goalBoard;
