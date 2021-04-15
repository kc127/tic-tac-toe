const prompt = require('prompt-sync')({sigint: true});

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

const playGame = (player) => {
  const num = prompt(`Enter a number player ${player} : `);
  placePiece(num, board, player);
}

const placePiece = (num, board, player) => {

    if(num === '1') {
      console.log('here');
      board[0][0] = 'X';
    } else if (num === '2') {
      board[0][2] = 'X';
    } else if (num === '3') {
      board[0][4] = 'X';
    } else if (num === '4') {
      board[2][0] = 'X';
    } else if (num === '5') {
      board[2][2] = 'X';
    } else if (num === '6') {
      board[2][4] = 'X';
    } else if (num === '7') {
      board[4][0] = 'X';
    } else if (num === '8') {
      board[4][2] = 'X';
    } else if (num === '9') {
      board[4][4] = 'X';
    }
  printBoard(board);
}

playGame('X');
