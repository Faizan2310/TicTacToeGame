const cells = document.querySelectorAll(".cell");
const statusText = document.querySelector("#status")
const restartBtn = document.querySelector("#restart");

let currentPlayer = "X";
let gameBoard = ["","","","","","","","",""];
let game = true;

const checkWinner() => {
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
  for(const pattern of winPatterns){
    const [a,b,c] = pattern;
    if(gameBoard[a]&& gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
      return gameBoard[a];
    }
    return null;
  }
};

const checkDraw = () => {
  return !gameBoard.includes('') && !checkWinner();
};



