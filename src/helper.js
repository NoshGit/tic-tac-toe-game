const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2',
};

const INITIAL_GAME_STATE = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const getActivePlayerSymbol = (turns) => {
  let currentSymbol = 'X';
  if (turns.length && turns[0].playerSymbol === 'X') {
    currentSymbol = 'O';
  }
  return currentSymbol;
};

const deriveGameBoard = (gameTurn) => {
  const gameBoard = [...INITIAL_GAME_STATE.map((row) => [...row])];

  for (let turn of gameTurn) {
    const { row, col } = turn.symbol;
    gameBoard[row][col] = turn.playerSymbol;
  }
  return gameBoard;
};

const getWinner = (gameBoard, players, combinations) => {
  let winner;

  for (let combination of combinations) {
    const [first, second, third] = combination;
    const firstSymbol = gameBoard[first.row][first.column];
    const secondSymbol = gameBoard[second.row][second.column];
    const thirdSymbol = gameBoard[third.row][third.column];

    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      winner = players[firstSymbol];
      return winner;
    }
  }
};

export {
  PLAYERS,
  INITIAL_GAME_STATE,
  getActivePlayerSymbol,
  getWinner,
  deriveGameBoard,
};
