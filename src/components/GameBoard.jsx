export default function GameBoard({ board, onSymbolChange }) {
  return (
    <ol id="game-board">
      {board.map((row, rowIndex) => (
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
