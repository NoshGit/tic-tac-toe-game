export default function Log({ gameTurn }) {
  return (
    <ol id="log">
      {gameTurn.map((turn) => (
        <li key={`${turn.symbol.row}-${turn.symbol.col}`}>
          Player {turn.playerSymbol} placed at ({turn.symbol.row},{' '}
          {turn.symbol.col})
        </li>
      ))}
    </ol>
  );
}
