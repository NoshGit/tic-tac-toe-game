import { useState } from 'react';

const initialGameState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ symbol, onSymbolChange }) {
  const [gameState, setGameState] = useState(initialGameState);

  console.log('Current Game State:', gameState);

  const handleCellClick = (rowIndex, cellIndex) => {
    setGameState((prevGameState) => {
      const updatedState = [
        ...prevGameState.map((innerArray) => [...innerArray]),
      ];
      updatedState[rowIndex][cellIndex] = symbol;
      return updatedState;
    });

    onSymbolChange();
  };

  return (
    <ol id="game-board">
      {gameState.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, symbolIndex) => (
              <li key={symbolIndex} className="board-cell">
                <button onClick={() => handleCellClick(rowIndex, symbolIndex)}>
                  {symbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
