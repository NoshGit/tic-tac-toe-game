function App() {
  return (
    <>
      <header>
        <img
          src="./../public/game-logo.png"
          alt="Hand Drawn Tic Tac Toe logo"
        />
        <h1>Tic Tac Toe game</h1>
      </header>
      <main>
        <div id="game-container">
          <ol id="players">
            <li>
              <span className="player">
                <span className="player-name">Player 1</span>
                <span className="player-symbol">X</span>
              </span>
              <button>Edit</button>
            </li>
            <li>
              <span className="player">
                <span className="player-name">Player 2</span>
                <span className="player-symbol">O</span>
              </span>
              <button>Edit</button>
            </li>
          </ol>
        </div>
      </main>
    </>
  );
}

export default App;
