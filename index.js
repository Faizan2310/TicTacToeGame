// Selecting HTML elements
const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#status")
const restartBtn = document.querySelector("#restart");

// Initial game state

let currentPlayer = "X";
let options = ["","","","","","","","",""];
let gameActive = false;

// Winning patterns for Tic Tac Toe
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
// Initialize the game 
initializeGame(); 

// Function to set up the initial game state
function initializeGame(){
  // Add click event listeners to each cell
  cells.forEach((cell) => cell.addEventListener("click", cellClicked))
  // Set the game as active
  gameActive = true;
  // Add click event listener to the restart button
  restartBtn.addEventListener("click", restartGame)
  // Display the initial player's turn
  statusText.textContent = `${currentPlayer}'s turn`

}
// Function to handle a cell click
function cellClicked(){
  const cellIndex = this.getAttribute("classIndex")
  // Check if the cell is already filled or if the game is not active
   if(options[cellIndex] != "" || !gameActive){
    return;
   }
   // Update the cell with the current player's symbol
   updateCell(this, cellIndex);
   // Check if the current move results in a winner or draw
   checkWinner();
}
// Function to update a cell with the current player's symbol
function updateCell(cell, index){
  options[index] = currentPlayer;
  cell.textContent = currentPlayer;
}
// Function to switch players
function changePlayer(){
  currentPlayer = (currentPlayer == "X")? "O": "X";
  statusText.textContent = `${currentPlayer}'s turn`;
}
// Function to check for a winner or draw
function checkWinner(){
  for(const pattern of winPatterns){
    const [a, b, c] = pattern;
    // Check if the current pattern is a winning combination
            if (options[a] && options[a] === options[b] && options[a] === options[c]) {
              statusText.textContent = `Player ${currentPlayer} wins!`;
              gameActive = false;
              return;
            }
        }
        // Check for a draw
        if(!options.includes("")){
          statusText.textContent = `It's a Draw`
          gameActive = false;
        }
        else{
          // If no winner or draw, switch to the next player
          changePlayer();
        }
    }
// Function to restart the game
function  restartGame(){
  options = ["","","","","","","","",""];
  currentPlayer = "X";
  statusText.textContent = `${currentPlayer}'s turn`
  cells.forEach(cell => cell.textContent = "");
  gameActive = true;
}


