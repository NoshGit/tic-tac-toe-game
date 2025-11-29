import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Header from './components/Header';
import Player from './components/Player';
import Log from './components/Log';
import GameOver from './components/GameOver';
import { WINNING_COMBINATIONS } from './winning-combination';
import {
  PLAYERS,
  getActivePlayerSymbol,
  getWinner,
  deriveGameBoard,
} from './helper';

function App() {
  const [players, setPlayers] = useState(PLAYERS);
  const [gameTurn, setGameTurn] = useState([]);

  const activePlayerSymbol = getActivePlayerSymbol(gameTurn);
  const gameBoard = deriveGameBoard(gameTurn);
  const winner = getWinner(gameBoard, players, WINNING_COMBINATIONS);
  const isDraw = gameTurn.length === 9 && !winner;

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

  const handleRematch = () => {
    setGameTurn([]);
  };

  const handlePlayerChange = (symbol, name) => {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [symbol]: name,
    }));
  };

  return (
    <>
      <Header />
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name={PLAYERS.X}
              symbol="X"
              isActive={activePlayerSymbol === 'X'}
              onPlayerNameChange={handlePlayerChange}
            />
            <Player
              name={PLAYERS.O}
              symbol="O"
              isActive={activePlayerSymbol === 'O'}
              onPlayerNameChange={handlePlayerChange}
            />
          </ol>
          {(winner || isDraw) && (
            <GameOver
              winner={winner}
              isDraw={isDraw}
              onRematch={handleRematch}
            />
          )}
          <GameBoard board={gameBoard} onSymbolChange={handleSymbolChange} />
        </div>

        <Log gameTurn={gameTurn} />
      </main>
    </>
  );
}

export default App;
