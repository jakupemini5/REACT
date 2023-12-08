import { useState } from "react";

const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
let listId = 0

export default function GameBoard({onSelectSquare, activePlayer}) {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    const [symbol , setSymbol] = useState('X')

    const buttonClickHandler = (row, column) => {
        setGameBoard(gameBoard => {
            const updateGameBoard = [...gameBoard.map(x => [...x])]
            updateGameBoard[row][column] = activePlayer
            return updateGameBoard;
        })
        
        onSelectSquare();
    }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((value, index) =>
                            <li key={index}>
                                <button onClick={() => buttonClickHandler(rowIndex, index)}>{value}</button>
                            </li>)}
                    </ol>

                </li>)}
        </ol>
    );
}