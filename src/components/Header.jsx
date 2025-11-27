export default function Header({ title = 'Tic-Tac-Toe' }) {
  return (
    <header>
      <img
        src="./../../public/game-logo.png"
        alt="Hand Drawn Tic Tac Toe logo"
      />
      <h1>{title}</h1>
    </header>
  );
}
