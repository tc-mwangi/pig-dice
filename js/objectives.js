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

});



//IP Objectives-------------------------
//1. Player One can role dice...
//* When Roll Dice is clicked, output image is displayed on the console.

//<img src='' id="show-dice"  alt="dice image">
//<a id="roll" href="" onclick="rollDice()" class="btn btn-mod btn-w btn-medium btn-round ">Roll Dice</a>

// rollDice() {
//   var diceArray = ["1.png","2.png","3.png","4.png","5.png","6.png"];
//   path = path || "images/die/";
//   //shuffle function
//   var shuffleFace = Math.floor(Math.random() * diceArray.length);
//   var face = diceArray[shuffleFace];
//   var faceDisplay = "<img src=' + path + face + ' alt="dice image">    ";
//   document.append(faceDisplay); document.close();
// };
