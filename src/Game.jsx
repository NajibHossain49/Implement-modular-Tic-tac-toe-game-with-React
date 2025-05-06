import React, { useState } from "react";
import Board from "./components/Board";
import GameHistory from "./components/GameHistory";
import GameStatus from "./components/GameStatus";
import { calculateWinner, createEmptyBoard, isDraw } from "./utils/gameLogic";

export default function Game() {
  // Game state
  const [history, setHistory] = useState([createEmptyBoard()]);
  const [currentMove, setCurrentMove] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  // Current board state
  const currentSquares = history[currentMove];

  // Determine game status
  const winner = calculateWinner(currentSquares);
  const gameIsDraw = isDraw(currentSquares);

  /**
   * Updates game state when a move is made
   */
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setXIsNext(!xIsNext);
  }

  /**
   * Jumps to a specific move in history
   */
  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
    setXIsNext(nextMove % 2 === 0);
  }

  /**
   * Resets the game to initial state
   */
  function handleReset() {
    setHistory([createEmptyBoard()]);
    setCurrentMove(0);
    setXIsNext(true);
  }

  return (
    <div className="flex flex-col items-center mt-8">
      <h1 className="text-2xl font-bold mb-4">Tic-tac-toe</h1>

      <div className="mb-4">
        <Board squares={currentSquares} onPlay={handlePlay} xIsNext={xIsNext} />
      </div>

      <GameStatus winner={winner} isDraw={gameIsDraw} xIsNext={xIsNext} />

      <button
        onClick={handleReset}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        New Game
      </button>

      <GameHistory
        history={history}
        currentMove={currentMove}
        onJumpTo={jumpTo}
      />
    </div>
  );
}
