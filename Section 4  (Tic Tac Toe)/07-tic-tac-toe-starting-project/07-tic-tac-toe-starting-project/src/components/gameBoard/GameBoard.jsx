import { useState } from "react";

const initialGameBoard = [
    [null, null, null], 
    [null, null, null],
    [null, null, null],
]

export default function GameBoard({ onSelectSquare, gameBoard }) {
    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) =>
                <li key={rowIndex}>
                    <ol>
                        {row.map((value, index) =>
                            <li key={index}>
                                <button onClick={() => onSelectSquare(rowIndex, index)}
                                    disabled={value === null ? false : true}>
                                    {value}
                                </button>
                            </li>)}
                    </ol>

                </li>)}
        </ol>
    );
}