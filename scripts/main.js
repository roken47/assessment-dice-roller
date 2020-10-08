// Best results on comments install 'Better Comments' vscode ext.
// User Data Input
const userNumDice = document.querySelector("#usr-num-dice");
const userNumSides = document.querySelector("#usr-num-sides");
// Results
const totalSpan = document.querySelector("#die-faces-sum");
let rollResultsList = [];
const listAppear = document.querySelector("#results");
let rollList = document.createElement("ol");
// Buttons
const resetButton = document.querySelector("#reset-button");
// ---FUNCTIONS---
// Roll Dice
function rollUpOffMe() {
  let incrementRoll = 0;
  let numDice = userNumDice.value;
  let numSides = userNumSides.value;
  //! This works but not as intended. I intend to check each and ONLY clear the NaN const.value NOT! *CLEAR ALL*
  if (isNaN(numDice) || isNaN(numSides)) {
    window.alert("Please Enter '#'");
    userNumDice.value = "";
    userNumSides.value = "";
    return;
  }
  while (incrementRoll < numDice) {
    incrementRoll++;
    let actionRoll = 1 + Math.floor(Math.random() * numSides);
    actionRoll;
    rollResultsList.push(actionRoll);
  }
  // The reduce() method reduces the array to a single value
  totalSpan.innerHTML = rollResultsList.reduce((a, b) => a + b, 0);
}
// Show Results of each Die Rolled
function showResults() {
  let index = 0;
  while (index < rollResultsList.length) {
    let rollValue = document.createElement("li");
    rollValue.appendChild(document.createTextNode(rollResultsList[index]));
    rollList.appendChild(rollValue);
    index++;
  }
  listAppear.appendChild(rollList);
}
// Resetting functions
function resetApplet() {
  rollResultsList.length = 0;
  listAppear.innerHTML = "";
  rollList.innerHTML = "";
  userNumDice.value = "";
  userNumSides.value = "";
  totalSpan.innerHTML = "__";
}
resetButton.addEventListener("click", function () {
  userNumDice.focus();
});
