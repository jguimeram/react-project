import "./App.css";
import Board from "./components/Board";
import { useState } from "react";

function App() {


    const [x, setX] = useState(true)

    /* an array with a single item, which itself is an array of 9 nulls */
    const [history, setHistory] = useState([Array(9).fill(null)])
    /* read the last squares array from the history to render the current move */
    const currentSquares = history[history.length - 1]

    /* join arrays by using spread operator */
    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares])
        setX(!x) //flip with X or O 
    }

    return (
        <div className="game">
            <div className="game-board">
                <Board x={x} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{/*TODO*/}</ol >
            </div >
        </div >
    );
}

export default App
