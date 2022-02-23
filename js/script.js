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

genRandomNumber();

function genRandomNumber() {
  randomNumber = Math.floor(Math.random() * 20) + 1;
}

function reset() {
  genRandomNumber();
  resetLblMessage();
  resetLblNumber();
  resetScore();
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

function guessFrontStyle(text, color) {
  lblMessageText(text);
  setColorNumberAndMessage(color);

  scoreCalculator(color);
}

function scoreCalculator(color) {
  lblScore.style.color = color;
  switch (color) {
    case greenColor:
      score += 3;
      lblScore.textContent = score + " + 3";
      highScoreCalculator();
      break;
    case redColor :
      score--;
      lblScore.textContent = score + " - 1";
  }
}

function highScoreCalculator() {
  if (score > highScore) {
    highScore = score;
    lblHighScore.textContent = highScore;
  }
}

function checkNumber() {
  const gNum = inputGuess.value;
  const numGuess = Number(gNum);

  if (!numGuess) {
    lblMessage.textContent = "🦤 not a valid number";
  } else if (numGuess > randomNumber) {
    guessFrontStyle("The number is smaller then ↓ " + numGuess, redColor);
  } else if (numGuess < randomNumber) {
    guessFrontStyle("The number is bigger then ↑ " + numGuess, redColor);
  } else {
    guessFrontStyle("That's correct!", greenColor);
    lblNumber.textContent = randomNumber;
    genRandomNumber();
  }
}

pbAgain.addEventListener('click', reset);
pbCheck.addEventListener('click', checkNumber);
