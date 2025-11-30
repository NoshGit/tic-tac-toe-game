import gameLogo from './../assets/game-logo.png';

export default function Header({ title = 'Tic-Tac-Toe' }) {
  return (
    <header>
      <img src={gameLogo} alt="Hand Drawn Tic Tac Toe logo" />
      <h1>{title}</h1>
    </header>
  );
}
