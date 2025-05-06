import React from "react";

function GameStatus({ winner, isDraw, xIsNext }) {
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw) {
    status = "Game ended in a draw!";
  } else {
    status = `Next player: ${xIsNext ? "X" : "O"}`;
  }

  return <div className="mb-4 text-lg font-semibold">{status}</div>;
}

export default GameStatus;
