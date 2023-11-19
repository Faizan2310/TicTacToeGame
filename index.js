const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#status")
const restartBtn = document.querySelector("#restart");

let currentPlayer = "X";
let options = ["","","","","","","","",""];
let gameActive = false;
//Win condition
const winPatterns = [
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]
  ]
 
initializeGame(); 

function initializeGame(){
  cells.forEach((cell) => cell.addEventListener("click", cellClicked))
  gameActive = true;
  restartBtn.addEventListener("click", restartGame)
  statusText.textContent = `${currentPlayer}'s turn`

}
function cellClicked(){
  const cellIndex = this.getAttribute("classIndex")
   if(options[cellIndex] != "" || !gameActive){
    return;
   }
   updateCell(this, cellIndex);
   checkWinner();
}
function updateCell(cell, index){
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}
function changePlayer(){
  currentPlayer = (currentPlayer == "X")? "O": "X";
  statusText.textContent = `${currentPlayer}'s turn`;
}
function checkWinner(){
  for(const pattern of winPatterns){
    const [a, b, c] = pattern;
            if (options[a] && options[a] === options[b] && options[a] === options[c]) {
              statusText.textContent = `Player ${currentPlayer} wins!`;
              gameActive = false;
              return;
            }
        }
        if(!options.includes("")){
          statusText.textContent = `It's a Draw`
          gameActive = false;
        }
        else{
          changePlayer();
        }
    }

function  restartGame(){
  options = ["","","","","","","","",""];
  currentPlayer = "X";
  statusText.textContent = `${currentPlayer}'s turn`
  cells.forEach(cell => cell.textContent = "");
  gameActive = true;
}


