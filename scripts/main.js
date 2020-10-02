// User Data Input
const userNumDice = document.querySelector("#usr-num-dice");
let numDice = Number(userNumDice);
const userNumSides = document.querySelector("#usr-num-sides");
let numSides = Number(userNumSides);
// Results
const totalSpan = document.querySelector("#die-faces-sum");
const rollResults = document.querySelector("#results");
let rollResultsList = [];
// Buttons
const rollButton = document.querySelector("#roll-button");
const resultsButton = document.querySelector("#results-button");
const resetButton = document.querySelector("#reset-button");
// Dice Array
// let diceSides = [];
// let diceRolled = [];
// let dice = [];
// Roll Button Actions
let incrementRoll = 0;
rollButton.addEventListener("click", function () {
  let actionRoll = Math.floor(Math.random() * numSides);
  while (incrementRoll < numDice) {
    incrementRoll++;
    actionRoll;
    console.log(actionRoll);
  }
  console.log(rollResultsList);
  // if statement for manipulating innerHTML content
});
// Show Results of each Die Rolled

// Reset Button Actions
