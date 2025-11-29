const initialGameState = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard({ gameTurn, onSymbolChange }) {
  const gameState = initialGameState;

  for (let turn of gameTurn) {
    const { row, col } = turn.symbol;
    gameState[row][col] = turn.playerSymbol;
  }

  return (
    <ol id="game-board">
      {gameState.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((symbol, symbolIndex) => (
              <li key={symbolIndex} className="board-cell">
                <button
                  onClick={() => onSymbolChange(rowIndex, symbolIndex)}
                  disabled={!!symbol}
                >
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
