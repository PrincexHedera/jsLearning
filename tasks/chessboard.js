function chessboard(row, col) {
  let result = '';
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      result += (i + j) % 2 === 0 ? ' ' : '#';
    }
    result += '\n';
  }
  return result;
}

function main() {
  console.log(chessboard(16, 8));
}

main();