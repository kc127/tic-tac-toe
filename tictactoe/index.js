const prompt = require('prompt-sync')({ sigint: true });

const board = [
  [' ', '|', ' ', '|', ' '],
  ['-', '+', '-', '+', '-'],
  [' ', '|', ' ', '|', ' '],
  ['-', '+', '-', '+', '-'],
  [' ', '|', ' ', '|', ' ']
]

const winningCombinations = [[1, 2, 3], [4, 5, 6], [7, 8, 9],
                             [1, 4, 7], [2, 5, 8], [3, 6, 9]];

const playerXPositions = [];
const playerOPositions = [];


const printBoard = (board) => {
  for (var row of board) {
    console.log(...row);
  }
}

const playGame = (player) => {

  const num = prompt(`Enter a number player ${player} : `);

  if (num < 1 || num > 9) {
    prompt('Invalid input, please try again!');
    playTurn(player)
  } else if (playerXPositions.includes(parseInt(num)) || playerOPositions.includes(parseInt(num))){
    prompt('Cell has already been chose, please try again!');
    playGame(player);
  } else {

    placePiece(num, board, player);

    if (player === 'X') {
      playerXPositions.push(parseInt(num));
    } else {
      playerOPositions.push(parseInt(num));
    }

    const playerPosition = playerXPositions.length === 3 ? playerXPositions : playerOPositions.length === 3 ? playerOPositions : null ;

    if (playerPosition && checkWinner(playerPosition) === true) {
      console.log(`Congratulations! Player ${player} You won!`)
      return;
    }
    if (player === 'X') {
      playGame('O');
    } else {
      playGame('X');
    }
  }
}

const checkWinner = (playerPosition) => {

  let current, count;
  for (let i = 0; i < winningCombinations.length; i++) {
    current = winningCombinations[i];
    count = 0
    for (let j = 0; j < playerPosition.length && playerPosition[j] === current[j]; j++ ) {
      count++;
      if(count === 3) {
        return true;
      }
    }
  }
  return false;
}

const placePiece = (num, board, player) => {

  if (num === '1') {
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

playGame('X');
