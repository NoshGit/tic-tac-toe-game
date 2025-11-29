import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Header from './components/Header';
import Player from './components/Player';
import Log from './components/Log';
import GameOver from './components/GameOver';
import { WINNING_COMBINATIONS } from './winning-combination';

const initialGameState = [
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

function App() {
  const [gameTurn, setGameTurn] = useState([]);

  const activePlayerSymbol = getActivePlayerSymbol(gameTurn);

  const gameBoard = initialGameState;

  for (let turn of gameTurn) {
    const { row, col } = turn.symbol;
    gameBoard[row][col] = turn.playerSymbol;
  }

  const handleSymbolChange = (selectedRow, selectedCol) => {
    setGameTurn((turns) => {
      let currentSymbol = getActivePlayerSymbol(turns);

      const currentGameTurn = {
        symbol: { row: selectedRow, col: selectedCol },
        playerSymbol: currentSymbol,
      };
      return [currentGameTurn, ...turns];
    });
  };

  let winner;

  for (let combination of WINNING_COMBINATIONS) {
    const [first, second, third] = combination;
    const firstSymbol = gameBoard[first.row][first.column];
    const secondSymbol = gameBoard[second.row][second.column];
    const thirdSymbol = gameBoard[third.row][third.column];

    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      firstSymbol === thirdSymbol
    ) {
      winner = firstSymbol;
      break;
    }
  }

  let isDraw = gameTurn.length === 9 && !winner;

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name="Player 1"
              symbol="X"
              isActive={activePlayerSymbol === 'X'}
            />
            <Player
              name="Player 2"
              symbol="O"
              isActive={activePlayerSymbol === 'O'}
            />
          </ol>
          {(winner || isDraw) && <GameOver winner={winner} isDraw={isDraw} />}
          <GameBoard board={gameBoard} onSymbolChange={handleSymbolChange} />
        </div>

        <Log gameTurn={gameTurn} />
      </main>
    </>
  );
}

export default App;
