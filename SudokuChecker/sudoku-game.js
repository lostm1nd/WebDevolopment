$(function() {
  'use strict';

  var $sudoku = $('#sudoku'),
      $checkBtn = $('#check-sudoku');

  $sudoku.on('input', 'input', function() {
    $(this).css('backgroundColor', '');
    var value = $(this).val();

    if (isNaN(value)) {
      $(this).val('');
    }

    if (value === '0') {
      $(this).val('');
    }

    if (value.length > 1) {
      $(this).val(value.slice(0,1));
    }
  });

  $checkBtn.on('click', function() {
    var cells = $sudoku.find('input'),
        sudoku = [],
        validCells = true;

    cells.each(function(index, cell) {
      var row = Math.floor(index / 9);

      sudoku[row] = sudoku[row] || [];
      sudoku[row].push(parseInt(cell.value, 10));

      if(!cell.value) {
        validCells = false;
        cell.style.backgroundColor = '#f88';
      }
    });

    if (validCells && isSudokuValid(sudoku)) {
      alert('Congratulations!\nThis is a valid sudoku.');
    }
  });

});
