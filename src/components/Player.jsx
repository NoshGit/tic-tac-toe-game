import { useState } from 'react';

export default function Player({ name, symbol, isActive, onPlayerNameChange }) {
  const [editMode, setEditMode] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEditClick = () => {
    setEditMode((editMode) => !editMode);
    if (editMode) {
      onPlayerNameChange(symbol, playerName);
    }
  };

  return (
    <li className={isActive ? 'active' : ''}>
      <span className="player">
        {editMode ? (
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
          />
        ) : (
          <span className="player-name">{playerName}</span>
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{editMode ? 'Save' : 'Edit'}</button>
    </li>
  );
}
