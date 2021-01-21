export var basicVar = "basic";

var tdElements = document.getElementsByTagName("TD");

var board = [
  //
  [null, null, null], // rowIndex="0"
  [null, null, null], // rowIndex="1"
  [null, null, null] // rowIndex="2"
]; // Meeting on google


function whoWon() {
 for (var winningCondition)
  // return 'X' 'O' or null
  return null;
}

for (var tdElement of tdElements) {
  tdElement.addEventListener("click", handleClick);
}

var isTheClickForAnO = false;

function handleClick(event) {
  var targetTd: HTMLTableCellElement = event.target;

  var rowIndex = parseInt(targetTd.parentElement.getAttribute("rowIndex"));
  var columnIndex = parseInt(targetTd.getAttribute("columnIndex"));

    // There is already a value on the board
    return;
  }

  var value;
  if (isTheClickForAnO) {
    value = "O";
    isTheClickForAnO = false;
  } else {
    value = "X";
    isTheClickForAnO = true;
  }

  board[rowIndex][columnIndex] = value;

  targetTd.innerHTML = value;
  targetTd.classList.add(value);
  whoWon();
}
