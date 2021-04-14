const prompt = require('prompt');

const board = [
  [' ', '|', ' ', '|', ' '],
  ['-', '+', '-', '+', '-'],
  [' ', '|', ' ', '|', ' '],
  ['-', '+', '-', '+', '-'],
  [' ', '|', ' ', '|', ' ']
]

const printBoard = (board) => {
  for (var row of board) {
    console.log(...row);
  }
}
printBoard(board);