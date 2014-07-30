var isSudokuValid = function(sudoku) {
  'use strict';

  var i = 0,
      j = 0,
      col = [],
      box = [];

  function areValidNineNumbers(nums) {
    var buffer = [];

    for (var i = 0; i < nums.length; i+=1) {
      if (buffer[nums[i]]) {
        return false;
      } else {
        buffer[nums[i]] = true;
      }
    }

    return true;
  }

  // Check rows
  for (i = 0; i < sudoku.length; i+=1) {
    if (!areValidNineNumbers(sudoku[i])) {
      return false;
    }
  }

  // Check columns
  for (i = 0; i < sudoku.length; i+=1) {
    col = sudoku.map(function(row) { return row[i]; });

    if (!areValidNineNumbers(col)) {
      return false;
    }
  }

  // Check 3x3 box
  // i iterates over the rows and j over the columns
  // for every row index we take the row itself
  // the next two rows
  // for every col index we take the current cell
  // and the next two cell
  for (i = 0; i < sudoku.length/3; i+=1) {
    for (j = 0; j < sudoku.length/3; j+=1) {

      box = sudoku[i*3].slice(j*3, j*3 + 3)
            .concat(sudoku[i*3+1].slice(j*3, j*3 + 3))
            .concat(sudoku[i*3+2].slice(j*3, j*3 + 3));

      if (!areValidNineNumbers(box)) {
        return false;
      }

    }
  }

  return true;
};

console.log(isSudokuValid([
[4, 5, 2, 3, 8, 9, 7, 1, 6],
[3, 8, 7, 4, 6, 1, 2, 9, 5],
[6, 1, 9, 2, 5, 7, 3, 4 ,8],
[9, 3, 5, 1, 2, 6, 8, 7, 4],
[7, 6, 4, 9, 3, 8, 5, 2, 1],
[1, 2, 8, 5, 7, 4, 6, 3, 9],
[5, 7, 1, 8, 9, 2, 4, 6, 3],
[8, 9, 6, 7, 4, 3, 1, 5 ,2],
[2, 4, 3, 6, 1, 5, 9, 8, 7]
]));
