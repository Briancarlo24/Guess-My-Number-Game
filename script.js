// Get the Current Highest score
let highestScore = document.querySelector(".highscore").textContent;

// Get The Current Score
let score = document.querySelector(".score").textContent;

//Generate Random Number
function generateRandomNumber() {
  const randNum = Math.floor(Math.random() * 20) + 1;
  return randNum;
}
//Generates Random Number
let randNum = generateRandomNumber();
console.log(randNum);

// Change the text -- returns the input value
function getInputValue() {
  const inputNumber = Number(
    document.querySelector("input[type='number']").value
  );
  return inputNumber;
}

// checked if the input is a number
function numberChecker(number) {
  if (typeof number === "number" && number !== 0) {
    if (number > 0 && number <= 20) {
      return number;
    } else {
      wrongInputMessage();
    }
  } else {
    wrongInputMessage();
  }
}
//Changes message to notify if not in range
function wrongInputMessage() {
  document.querySelector(".message").textContent = "Not in range!";
}

//Checks if the input number is the same with the Hidden number.
function compareNumber(number, randomNumber) {
  if (number === randomNumber) {
    document.querySelector(".message").innerHTML =
      "You got it right! <br> 👌👌👌👏👏👏👏👏👏👏👏👍👍👍";
    document.querySelector(".number").innerHTML = number;
    document.querySelector(".message").style.color = "limegreen";

    let curScore = highestScoreChecker(score, highestScore);
    document.querySelector(".highscore").innerHTML = curScore;

    //Disable the button
    document.querySelector(".check").disabled = true;
    document.querySelector(".guess").disabled = true;
  } else if (number > randomNumber) {
    score--;
    document.querySelector(".message").textContent = "Too high! 🤷‍♂️";
  } else if (number < randomNumber) {
    score--;
    document.querySelector(".message").textContent = "Too low! 🤦‍♂️";
  }
}
//Check the if the current score is higher than the highest score
function highestScoreChecker(currentScore, currentHighScore) {
  if (currentScore > currentHighScore) {
    return currentScore;
  } else {
    return currentHighScore;
  }
}

//Add Event on Button check
const btnCheck = document.querySelector(".check");
btnCheck.addEventListener("click", function () {
  if (score === 0) {
    document.querySelector(".message").textContent = "You Lose! 😕☹";
    document.querySelector(".message").style.color = "red";
    document.querySelector(".check").disabled = true;
    document.querySelector(".guess").disabled = true;
  } else {
    let number = numberChecker(getInputValue());

    compareNumber(number, randNum);

    document.querySelector(".score").innerHTML = score;
    console.log(`The Correct ans is: ${randNum}: You Enter ${number}`);
  }
});

const btnAgain = document.querySelector(".again");
btnAgain.addEventListener("click", function () {
  console.log(`You click Reload`);
  document.querySelector(".message").innerHTML = "Start guessing...";

  document.querySelector(".message").style.color = "#fefefe";
  document.querySelector(".score").innerHTML = "20";
  document.querySelector(".number").innerHTML = "?";
  document.querySelector(".guess").value = "";
  score = 20;
  let hScore = Number(document.querySelector(".highscore").textContent);
  console.log(hScore);
  highestScore = hScore;

  let newRandNum = generateRandomNumber();
  randNum = newRandNum;
  document.querySelector(".check").disabled = false;
  document.querySelector(".guess").disabled = false;
});

// Task get the highest Score
// Change the reload event on btn again
