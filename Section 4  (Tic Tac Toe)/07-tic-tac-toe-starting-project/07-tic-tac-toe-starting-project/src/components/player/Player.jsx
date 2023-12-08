import { useState } from "react";

export default function Player({initialName, symbol, isActive}) {
    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    const onEditHandler = () => {
        setIsEditing(editing => !editing);
    }
    const handleChange = (event) => {
        console.log(event) 
        setPlayerName(event.target.value);
    }

    let playerNameContent = <span className="player-name">{playerName}</span>
    if(isEditing) {
        playerNameContent = <input type="text" required  value={playerName} onChange={handleChange}/>
    }

    

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
              {playerNameContent}
              <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={onEditHandler}>{isEditing ? 'Save' : 'Edit'}</button>
          </li>
    );
}