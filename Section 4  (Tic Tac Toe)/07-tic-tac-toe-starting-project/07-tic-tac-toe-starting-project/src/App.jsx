import { useState } from "react";
import GameBoard from "./components/gameBoard/GameBoard";
import Player from "./components/player/Player";

function App() {
  const [activePlayer, SetActivePlayer] = useState('X');

  const handleSelectSquare = () => {
    SetActivePlayer(oldActivePlayer => {
      oldActivePlayer = oldActivePlayer === 'X' ? 'O' : 'X';
      return oldActivePlayer
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayer={activePlayer} />
      </div>

    </main>
  );
}

export default App
