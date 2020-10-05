// User Data Input
const userNumDice = document.querySelector("#usr-num-dice");
const userNumSides = document.querySelector("#usr-num-sides");
// Results
const totalSpan = document.querySelector("#die-faces-sum");
const rollResults = document.querySelector("#results");
let rollResultsList = [];
// Buttons
const rollButton = document.querySelector("#roll-button");
const resultsButton = document.querySelector("#results-button");
const resetButton = document.querySelector("#reset-button");
// Roll Button Actions
let incrementRoll = 0;
rollButton.addEventListener("click", function () {
  let numDice = userNumDice.value;
  let numSides = userNumSides.value;
  if (numDice === null || numSides === null) {
    window.alert("Please Enter '#'");
  } else if (numDice === null && numSides === null) {
    window.alert("Please Enter a '#'");
  }
  // Google for Testing for Numbers
  // let minSideValue = 1;
  while (incrementRoll < numDice) {
    incrementRoll++;
    let actionRoll =
      // minSideValue + Math.floor(Math.random() * (numSides - minSideValue + 1));
      1 + Math.floor(Math.random() * numSides);
    actionRoll;
    console.log(actionRoll);
    rollResultsList.push(actionRoll);
  }
  console.log(rollResultsList);
  //The reduce() method reduces the array to a single value
  totalSpan.innerHTML = rollResultsList.reduce((a, b) => a + b, 0);
  // Sum rolls into totalSpan
  // if statement for manipulating innerHTML content
});
// Show Results of each Die Rolled
resultsButton.addEventListener("click", function () {
  let listAppear = document.querySelector("#results");
  let rollList = document.createElement("ol");
  let index = 0;
  while (index < rollResultsList.length) {
    let rollValue = document.createElement("li");
    rollValue.appendChild(document.createTextNode(rollResultsList[index]));
    rollList.appendChild(rollValue);
    index++;
  }
  listAppear.appendChild(rollList);
  console.log(rollList);
});
// Figure out Resetting above list too, Removing the children
// Reset Button Actions
