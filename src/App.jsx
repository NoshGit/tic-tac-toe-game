import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Header from './components/Header';
import Player from './components/Player';

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

          <GameBoard gameTurn={gameTurn} onSymbolChange={handleSymbolChange} />
        </div>
      </main>
    </>
  );
}

export default App;
