const Player = {
  player1: "Ali",
  player2: "Ahmed",
  board: [
    ["X", null, "0"],
    ["X", null, "0"],
    ["X", null, "0"],
  ],
};
//2-d arrays
// let board = [["X", null, "0"], [("X", null, "0")], [("X", null, "0")]];
console.log(`\t\t${Player.player1} Vs. ${Player.player2}`);
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(Player.board[i][j]);
  }
}
