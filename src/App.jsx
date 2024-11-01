import "./App.css";
import Board from "./components/Board";
import { useState } from "react";

function App() {


    const [x, setX] = useState(true)
    /* an array with a single item, which itself is an array of 9 nulls */
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0)
    /* read the last squares array from the history to render the current move */
    const currentSquares = history[history.length - 1]

    /* join arrays by using spread operator */
    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares])
        setX(!x) //flip with X or O 
    }

    /*use map to transform the history of moves into React elements representing buttons on the screen, and display a list of buttons to “jump” to past moves.*/

    const moves = history.map((squares, move) => {
        let description
        if (move > 0) {
            description = `Go to move ${move}`
        } else {
            description = `Go  to game start`
        }
        return (
            <li key={move}>
                <button onClick={() => jumpTo(move)} >{description}</button>
            </li>
        )
    })

    function jumpTo(nextMove) {
        setCurrentMove(nextMove)
        setX(nextMove % 2 === 0) //check if next move is X or O (true (X) or false (O))
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board x={x} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{moves}</ol >
            </div >
        </div >
    );
}

export default App
