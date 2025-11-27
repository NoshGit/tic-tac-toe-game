import { useState } from 'react';

export default function Player({ name, symbol }) {
  const [editMode, setEditMode] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const handleEditClick = () => {
    setEditMode((editMode) => !editMode);
  };

  return (
    <li>
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
