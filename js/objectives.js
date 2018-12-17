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

//* When Roll Dice is clicked, output image is displayed on the console.
// <img id="die-display" src="images/die/1.png" alt="dice image">
// <a id="roll-button" class="btn btn-mod btn-w btn-medium btn-round ">Roll Dice</a>
//<p id="consoleMessage"></p>

  //Array of dice images 1-6
  var diceArray = [
  "images/die/1.png", //diceArray[0]
  "images/die/2.png", //diceArray[1]
  "images/die/3.png", //diceArray[2]
  "images/die/4.png", //diceArray[3]
  "images/die/5.png", //diceArray[4]
  "images/die/6.png"]; //diceArray[5]

  $("#roll-button").click(function(){
    var randomNumber = Math.floor(Math.random() * (diceArray.length)) + 1;
    console.log(randomNumber);//test for selector

    if (randomNumber === 1) {
      $("#die-display").src = diceArray[0];
    } else if (randomNumber === 2) {
      $("#die-display").src = diceArray[1];
    } else if (randomNumber === 3) {
      $("#die-display").src = diceArray[2];
    } else if (randomNumber === 4) {
      $("#die-display").src = diceArray[3];
    } else if (randomNumber === 5) {
      $("#die-display").src = diceArray[4];
    } else {
      $("#die-display").src = diceArray[5];
    }
  });  //------ closing image counter

});  //------ closing jquery loading


  // $("#roll-button").addEventListener("click", function(){
  //   rollDice();
  // });
  //
  // $("#roll-button").change(function(){
  //   $("#die-display").src = diceArray[this.value];
  // })



  // function rollDice() {
  // //   //generate random number- Math.floor()  - Pass Math.random as an argument.
  // //



  // document.getElementById("scoreCounterOne").innerHTML = randomNumber
  // alert("You rolled "+randomNumber);
  //function to change dice number and image display
  // function rollDice(){
  //   $("#roll-button").click(function(){
  //     $("#changeAvatar2").change(function(){
  //       $("#die-display")[0].src = diceArray[this.value];
  //     })
  //
  //
  //
  //   })
  //
  // }
