// export function checkWinner(board, size) {
//   for (let i = 0; i < size; i++) {
//     const symbol = board[i][0];
//     if (symbol) {
//       let winner = true;
//       for (let j = 1; j < size; j++) {
//         if (symbol != board[i][j]) {
//           winner = false;
//           break;
//         }
//       }
//       if (winner) {
//         return symbol;
//       }
//     }
//   }

//   for (let j = 0; j < size; j++) {
//     const symbol = board[0][j];
//     if (symbol) {
//       let winner = true;
//       for (let i = 1; i < size; i++) {
//         if (symbol != board[i][j]) {
//           winner = false;
//           break;
//         }
//       }
//       if (winner) {
//         return symbol;
//       }
//     }
//   }

//   let symbol = board[0][0];
//   let winner = true;
//   if (symbol) {
//     for (let i = 1; i < size; i++) {
//       if (symbol != board[i][i]) {
//         winner = false;
//         break;
//       }
//     }
//     if (winner) {
//       return symbol;
//     }
//   }

//   symbol = board[0][size - 1];
//   winner = true;
//   if (symbol) {
//     for (let i = 1; i < size; i++) {
//       if (symbol != board[i][size - 1 - i]) {
//         winner = false;
//         break;
//       }
//     }
//     if (winner) {
//       return symbol;
//     }
//   }

//   // Check if all cells are filled (indicating a draw)
//   let isDraw = true;
//   for (let i = 0; i < size; i++) {
//     for (let j = 0; j < size; j++) {
//       if (board[i][j] === null) {
//         isDraw = false;
//         break;
//       }
//     }
//     if (!isDraw) break;
//   }

//   if (isDraw) {
//     return 'draw';
//   }

//   return null;
// }

export const initialState = (size) => {
  return Array.from({ length: size }, () => Array(size).fill(null));
};




export function checkWinner(board, size) {
    // Helper function to check if all elements in a given array are the same
    const allEqual = (arr) => arr.every(cell => cell === arr[0] && cell !== null);
  
    // Check rows for a winner
    for (let i = 0; i < size; i++) {
      if (allEqual(board[i])) {
        return board[i][0];
      }
    }
    // Check columns for a winner
    for (let j = 0; j < size; j++) {
      const column = board.map(row => row[j]);
      if (allEqual(column)) {
        return column[0];
      }
    }
    // Check main diagonal for a winner
    const mainDiagonal = Array.from({ length: size }, (_, i) => board[i][i]);
    if (allEqual(mainDiagonal)) {
      return mainDiagonal[0];
    }
    // Check anti-diagonal for a winner
    const antiDiagonal = Array.from({ length: size }, (_, i) => board[i][size - 1 - i]);
    if (allEqual(antiDiagonal)) {
      return antiDiagonal[0];
    }

    // Check for a draw (if all cells are filled)
    const isDraw = board.every(row => row.every(cell => cell !== null));
    if (isDraw) {
      return 'draw';
    }
    // No winner or draw
    return null;
  }
  
