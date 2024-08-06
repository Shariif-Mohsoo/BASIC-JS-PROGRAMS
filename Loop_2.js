const gameBoard = [
  [3, 10, 11, 18],
  [4, 9, 12, 17],
  [5, 8, 13, 16],
  [6, 7, 14, 15],
];
for (let i = 0; i < gameBoard.length; i++) {
  let row = gameBoard[i];
  console.log(row);
  console.log("See each value individually !!");
  for (let j = 0; j < row.length; j++) {
    console.log(gameBoard[i][j]);
  }
}
