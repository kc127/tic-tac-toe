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

const playTurn = (player) => {

  const num = prompt(`Enter a number player ${player} : `);

  if(num < 1 || num > 9) {
    prompt('Invalid input, please try again!');
    playTurn(player)

  } else {
    placePiece(num, board, player);
    
    if(player === 'X') {
      playTurn('O');
    } else {
      playTurn('X');
    }
  }
}

const placePiece = (num, board, player) => {

    if(num === '1') {
      board[0][0] = player;
    } else if (num === '2') {
      board[0][2] = player;
    } else if (num === '3') {
      board[0][4] = player;
    } else if (num === '4') {
      board[2][0] = player;
    } else if (num === '5') {
      board[2][2] = player;
    } else if (num === '6') {
      board[2][4] = player;
    } else if (num === '7') {
      board[4][0] = player;
    } else if (num === '8') {
      board[4][2] = player;
    } else if (num === '9') {
      board[4][4] = player;
    }
  printBoard(board);
}

playTurn('X');
