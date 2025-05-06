/**
 * Determines if there is a winner in the current game state
 * @param {Array} squares - The current state of the game board
 * @returns {string|null} - 'X', 'O', or null if no winner
 */
export function calculateWinner(squares) {
  const lines = [
    // Horizontal lines
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // Vertical lines
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // Diagonal lines
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

/**
 * Checks if the game has ended in a draw
 * @param {Array} squares - The current state of the game board
 * @returns {boolean} - True if the game is a draw
 */
export function isDraw(squares) {
  return (
    squares.every((square) => square !== null) && !calculateWinner(squares)
  );
}

/**
 * Creates a new empty game board
 * @returns {Array} - Array of 9 null values
 */
export function createEmptyBoard() {
  return Array(9).fill(null);
}
