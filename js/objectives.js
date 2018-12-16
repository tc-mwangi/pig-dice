//1. Test: js file is linked use:
// $(document).ready(function(){
// var show = function(){
//   console.log("hi");
// };
// show();
// });
/*Status: Linked*/

//---------------------------------------

$(document).ready(function(){
  //2. Enable avatar Selection.
  //Player 1
  var avatarArray1 = [
    "images/avatar/baby.png",
    "images/avatar/burglar.png",
    "images/avatar/clown.png",
    "images/avatar/detective.png",
    "images/avatar/santa.png"
  ];

  $("#changeAvatar1").change(function(){
    $("#player-one")[0].src = avatarArray1[this.value];
  })

  //Player 2
  var avatarArray2 = [
    "images/avatar/blue-hair.png",
    "images/avatar/headphones.png",
    "images/avatar/mohawk.png",
    "images/avatar/old.png",
    "images/avatar/red-hair.png"
  ];

  $("#changeAvatar2").change(function(){
    $("#player-two")[0].src = avatarArray2[this.value];
  })


//IP Objectives-------------------------
//1. Player One can role dice...
//* When Roll Dice btn is clicked, a random number is displayed on Player's score.
//<div class="mb-20 mb-md-10 align-right">
//   <input type="number" name="number" id="scoreCounterOne" class="input-md form-control" placeholder="Score" max="100">
// </div>
//
// <div>
//   <a id="display1" href="" onclick="rollDice()" class="btn btn-mod btn-w btn-medium btn-round ">Roll Dice</a>
// </div>

// rollDice() {
//   var displayPoints = document.getElementById("display1").
// }


//* When Roll Dice is clicked, output image is displayed on the console.

//<img src='' id="show-dice"  alt="dice image">
//<a id="roll-button" href="" onclick="rollDice()" class="btn btn-mod btn-w btn-medium btn-round ">Roll Dice</a>

  //Array of dice images 1-6
  var diceArray = [
  "1.png",
  "2.png",
  "3.png",
  "4.png",
  "5.png",
  "6.png"];

  //generate random number- Math.floor()  - Pass Math.random as an argument.
  var randomNumber = Math.floor(Math.random() * (diceArray.length)) + 1;
  alert("You rolled "+randomNumber);

  


//   function rollDice() {
//     //Select Button
//     $("#roll-button").click(function(){
//
//     })
//
// };



}); //------ closing jquery
