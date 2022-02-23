'use strict'

const lblMessage = document.querySelector(".message");
const lblNumber = document.querySelector(".number");
const lblScore = document.querySelector(".score");
const inputGuess = document.querySelector(".guess");
const pbCheck = document.querySelector(".pbCheck");
const pbAgain = document.querySelector(".again");

const greenColor = "rgb(0, 255, 0)";
const redColor = "rgb(255, 0, 0)";

function genRandomNumber() {
  return Math.floor(Math.random() * 20) + 1;
}

function reset() {
  lblNumber.value = genRandomNumber();
  lblMessage.textContent = "Start guessing...";
  lblMessage.style.color = "rgb(0,0,0)";
  inputGuess.textContent = "";
}

function checkNumber() {
  const gNum = inputGuess.value;
  const numGuess = Number(gNum);
  const randomNumber = lblNumber.value;

  if (!numGuess) {

    lblMessage.textContent = "🦤 not a number";
  } else {
    if (numGuess > randomNumber) {
      lblMessage.textContent = "Tallet er mindre end " + numGuess;
      lblMessage.style.color = redColor;
    } else {
      if (numGuess < randomNumber) {
        lblMessage.textContent = "Tallet er større end " + numGuess;
        lblMessage.style.color = redColor;
      } else {
        lblMessage.textContent = numGuess + " er det rigtige tal";
        lblNumber.style.color = greenColor;
        lblMessage.style.color = greenColor;
      }
    }
  }
}

pbAgain.addEventListener('click', reset);
pbCheck.addEventListener('click', checkNumber);
