let urturn = new Audio("over.mp3");

let music = new Audio("bg.mp3");

let gameover = new Audio("back.mp3");

let boxes = document.querySelectorAll(".b");
let reset = document.querySelector(".reset");
let turn = "x";
let gameOver = false;
let turnText = document.getElementsByClassName("info")[0];
let winnerText = document.getElementsByClassName("i")[0];
let winnerImg = document.getElementsByClassName("s")[0];
let resetButton = document.getElementById("reset");

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((boxes) => {
  boxes.addEventListener("click", () => {
    music.play();
    urturn.play();
    if (!gameOver && boxes.innerText === "") {
      if (turn == "x") {
        boxes.innerText = "x";
        turnText.innerText = "turn for O";
        turn = "o";
      } else {
        boxes.innerText = "o";
        turn = "x";
        turnText.innerText = "turn for X";
      }
      let winner = checkwin();
      if (winner) {
        gameover.play();
        music.pause();
        winnerText.innerText = winner + " is the winner!";
        winnerImg.style.width = "150px";
        gameOver = true;
      }
    }
  });
});
resetButton.addEventListener("click", () => {
  music.pause();
  gameover.pause();
  boxes.forEach((boxes) => {
    boxes.innerText = "";
    turn = "x";
    turnText.innerText = "turn for X";
    winnerText.innerText = "";
    winnerImg.style.width = "0px";
    gameOver = false;
  });
});
const checkwin = () => {
  for (let i = 0; i < winpattern.length; i++) {
    let arr = winpattern[i];
    let a = boxes[arr[0]].innerText;
    let b = boxes[arr[1]].innerText;
    let c = boxes[arr[2]].innerText;
    if (a == b && b == c && a != "") {
      return a;
    }
  }
};
