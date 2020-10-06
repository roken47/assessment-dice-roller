// Best results on comments install 'Better Comments' vscode ext.
// User Data Input
const userNumDice = document.querySelector("#usr-num-dice");
const userNumSides = document.querySelector("#usr-num-sides");
//// const userForm = document.querySelector("#diceRoller");
// Results
const totalSpan = document.querySelector("#die-faces-sum");
let rollResultsList = [];
const listAppear = document.querySelector("#results");
let rollList = document.createElement("ol");
// Buttons
// const rollButton = document.querySelector("#roll-button");
// const resultsButton = document.querySelector("#results-button");
const resetButton = document.querySelector("#reset-button");
// ---FUNCTIONS---
// Roll Dice
function rollUpOffMe() {
  let incrementRoll = 0;
  let numDice = userNumDice.value;
  let numSides = userNumSides.value;
  if (isNaN(numDice) || isNaN(numSides)) {
    window.alert("Please Enter '#'");
    userNumDice.value = "";
    userNumSides.value = "";
    return;
  }
  //! This works but not as intended. I intend to check each and ONLY clear the NaN const.value NOT! *CLEAR ALL*
  //// else if (numDice === NaN) {
  // //  userNumDice.value = "";
  //// } else if (numSides === NaN) {
  ////   userNumSides.value = "";
  //// } else if ((numDice && numSides) === NaN) {
  ////   userNumDice.value = "";
  ////   userNumSides.value = "";
  //// }
  //// else if (isNaN(numSides) || isNaN(numDice)) {
  ////   window.alert("Please Enter '#'");
  ////   userNumSides.value = "";
  ////   userNumDice.value = "";
  ////   return;
  //// }
  // !Google for Testing for Numbers <<DONE>>
  //// let minSideValue = 1;
  while (incrementRoll < numDice) {
    incrementRoll++;
    let actionRoll =
      //// minSideValue + Math.floor(Math.random() * (numSides - minSideValue + 1));
      1 + Math.floor(Math.random() * numSides);
    actionRoll;
    // console.log(actionRoll);
    rollResultsList.push(actionRoll);
  }
  //// Sum rolls into totalSpan
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
  // console.log(rollList);
  // rollResultsList.length = 0;
}
// ?Figure out Resetting above list too, Removing the children
//TODO: Reset Button Actions
function resetApplet() {
  //! Bug: showResults() still has [] saved, but at least doesn't duplicate list indefinitely by clickiing it endlessly.
  //! Tested more, Returned [] with additional rolls. Tried 1 Die and after reset 5 Die, Array returned with 6 entries.
  rollResultsList.length = 0;
  // console.log(rollResultsList);
  // rollResultsList.splice(0, rollResultsList.length); // this works too
  // listAppear.removeChild(rollList); // this works just as well as listAppear.innerHTML = ""
  listAppear.innerHTML = "";
  rollList.innerHTML = "";
  userNumDice.value = "";
  userNumSides.value = "";
  totalSpan.innerHTML = "__";
  //// focus on reset isn't working
}
resetButton.addEventListener("click", function () {
  userNumDice.focus();
  //? https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/focus
});
//?Byron: https://medium.com/@naveenkarippai/learning-how-references-work-in-javascript-a066a4e15600
