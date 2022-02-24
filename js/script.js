'use strict'

const lblMessage = document.querySelector(".message");
const lblNumber = document.querySelector(".number");
const lblScore = document.querySelector(".score");
const inputGuess = document.querySelector(".guess");
const pbCheck = document.querySelector(".pbCheck");
const pbAgain = document.querySelector(".again");
const lblHighScore = document.querySelector(".highscore");

const greenColor = "rgb(0, 255, 0)";
const redColor = "rgb(255, 0, 0)";

let score = 20;
let highScore = 0;
let randomNumber = 0;
let trys = 6;

genRandomNumber();

function genRandomNumber() {
  randomNumber = Math.floor(Math.random() * 20) + 1;
}

function reset() {
  genRandomNumber();
  resetLblMessage();
  resetLblNumber();
  resetScore();
  resetTrys();
}

function resetTrys() {
  trys = 6;
}

function resetScore() {
  score = 20;
  highScore = 0;
  lblScore.textContent = score;
  lblHighScore.textContent = highScore;
  lblScore.style.color = "white";
}

function resetLblMessage() {
  lblMessage.textContent = "Start guessing...";
  lblMessage.style.color = "white";
  inputGuess.textContent = "";
}

function resetLblNumber() {
  lblNumber.textContent = '?';
  lblNumber.style.color = "#333";
}

function setColorNumberAndMessage(color) {
  lblNumber.style.color = color;
  lblMessage.style.color = color;
}

function lblMessageText(text) {
  lblMessage.textContent = text;
}

function lblFrontStyle(text, color) {
  lblMessageText(text);
  setColorNumberAndMessage(color);
  lblScore.style.color = color;
  scoreCalculator(color);
}

function scoreCalculator(color) {
  switch (color) {
    case greenColor:
      pointSystem(trys);
      highScoreCalculator();
      break;
    case redColor :
      resetLblNumber();
      pointSystem(-1);
  }
}

function pointSystem(points) {
  score += points;
  if (points > 0) {
    lblScore.textContent = score + " + " + points + " ↑";
  } else {
    lblScore.textContent = score + "↓";
  }
}


function highScoreCalculator() {
  if (score > highScore) {
    highScore = score;
    lblHighScore.textContent = highScore;
  }
}

function checkNumber() {
  if (score !== 0) {
    const gNum = inputGuess.value;
    const numGuess = Number(gNum);

    //counts 1 try
    if (trys > 1) {
      trys--;
    }

    if (!numGuess) {
      lblMessage.textContent = "🦤 not a valid number";
    } else if (numGuess > randomNumber) {
      lblFrontStyle("The number is smaller then ↓ " + numGuess, redColor);
    } else if (numGuess < randomNumber) {
      lblFrontStyle("The number is bigger then ↑ " + numGuess, redColor);
    } else {
      lblFrontStyle("That's correct!", greenColor);
      lblNumber.textContent = randomNumber;
      genRandomNumber();
      resetTrys();
    }
  } else {
    lblMessageText("You don't have points for that, press Again to start a new game");
  }
}

pbAgain.addEventListener('click', reset);
pbCheck.addEventListener('click', checkNumber);
