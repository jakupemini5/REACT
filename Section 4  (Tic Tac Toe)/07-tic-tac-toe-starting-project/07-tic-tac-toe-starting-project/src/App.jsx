import { useState } from "react";
import GameBoard from "./components/gameBoard/GameBoard";
import Player from "./components/player/Player";
import Log from "./components/Log/Log";
import { WINNING_COMBINATIONS } from './data.js'
import GameOver from "./components/GameOver/GameOver.jsx";

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function deriveActivePlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X')
    currentPlayer = 'O';
  return currentPlayer;
}

function deriveGameBoard(gameTurns) {
  let gameBoard = [...INITIAL_GAME_BOARD.map(x => [...x])];

  for (const turn of gameTurns) {
    gameBoard[turn.square.row][turn.square.col] = turn.player;
  }
  return gameBoard; 
}

function deriveWinner(gameBoard, players) {
  let winner;
  WINNING_COMBINATIONS.forEach(combination => {
    const fistSquareSymbol = gameBoard[combination[0].row][combination[0].column]
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

    if (fistSquareSymbol !== null &&
      fistSquareSymbol === secondSquareSymbol &&
      secondSquareSymbol === thirdSquareSymbol)
      winner = players[fistSquareSymbol];
  }); 
  return winner;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [players, setPlayers] = useState(PLAYERS);

  let gameBoard = deriveGameBoard(gameTurns);

  const winner = deriveWinner(gameBoard, players);

  let player = deriveActivePlayer(gameTurns);

  const handleSelectSquare = (rowIndex, columnIndex) => {
    setGameTurns(oldGameTurns => {
      let currentPlayer = deriveActivePlayer(oldGameTurns)

      let updatedGameTurns = [
        {
          square: {
            row: rowIndex,
            col: columnIndex
          },
          player: currentPlayer
        },
        ...oldGameTurns];
      return updatedGameTurns;
    })
  }

  const handleRematch = () => {
    console.log('handle rematch');
    setGameTurns([]);
  }

  const handlePlayerNameChange = (symbol, newName) => {
    setPlayers(prevPlayers => {
      return {
        ...prevPlayers,
        [symbol]: newName
      };
    });
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player onChangeName={handlePlayerNameChange} initialName='Player 1' symbol='X' isActive={player === 'X'} />
          <Player onChangeName={handlePlayerNameChange} initialName="Player 2" symbol='O' isActive={player === 'O'} />
        </ol>
        {winner || gameTurns.length >= 9 ? <GameOver onRestart={handleRematch} winner={winner}></GameOver> : undefined}
        <GameBoard onSelectSquare={handleSelectSquare} gameBoard={gameBoard} />

      </div>
      <Log gameTurns={gameTurns} />
    </main>
  );
}

export default App
