import React from "react";

function GameHistory({ history, currentMove, onJumpTo }) {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold mb-2">Game History</h2>
      <ol className="list-decimal pl-6">
        {history.map((_, move) => (
          <li key={move} className="mb-1">
            <button
              className={`text-blue-500 hover:underline ${move === currentMove ? "font-bold" : ""}`}
              onClick={() => onJumpTo(move)}
            >
              {move === 0 ? "Go to game start" : `Go to move #${move}`}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default GameHistory;
