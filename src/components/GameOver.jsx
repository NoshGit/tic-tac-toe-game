export default function GameOver({ winner, isDraw }) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {isDraw ? <p>It's a Draw!</p> : <p>Player "{winner}" Wins!</p>}
      <p>
        <button>Rematch!</button>
      </p>
    </div>
  );
}
