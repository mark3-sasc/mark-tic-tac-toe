// Adds style.css to the code, this is one way to do it
// there are other ways but they don't work on
// stackblitz
import "./style.css";

var tdElements = document.getElementsByTagName("TD");

for (var tdElement of tdElements) {
  tdElement.addEventListener("click", handleClick);
}

var isTheClickForAnO = false;

function handleClick(event) {
  var targetTd = event.target;

  if (isTheClickForAnO) {
    targetTd.innerHTML = "O";
    targetTd.classList.add("O");
    isTheClickForAnO = false;
  } else {
    targetTd.innerHTML = "X";
    targetTd.classList.add("X");
    isTheClickForAnO = true;
  }
}
// hi there!
