import { useState } from 'react';
import GameBoard from './components/GameBoard';
import Header from './components/Header';
import Player from './components/Player';

function App() {
  const [activePlayerSymbol, setActivePlayerSymbolSymbol] = useState('X');

  const handleSymbolChange = () => {
    setActivePlayerSymbolSymbol((playerSymbol) =>
      playerSymbol === 'X' ? 'O' : 'X'
    );
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

          <GameBoard
            symbol={activePlayerSymbol}
            onSymbolChange={handleSymbolChange}
          />
        </div>
      </main>
    </>
  );
}

export default App;
