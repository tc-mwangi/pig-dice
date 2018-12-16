//1. Test: js file is linked use:
/*var show = function(){
  console.log("hi");
};
show();
/*Status: Linked*/

//2. Enable avatar Selection.

/*<img id="player-one" src="images/avatar-set-2/png/001-boy.png" alt="player one">
<select id="changeAvatar" class="form-control input-sm" onchange="changeAvatar();">
*/

var avatarArray = [
  "images/avatar-set-2/png/001-boy.png",
  "images/avatar-set-2/png/046-man-11.png",
  "images/avatar-set-2/png/047-woman-7.png",
  "images/avatar-set-2/png/047-woman-7.png",
  "images/avatar-set-2/png/043-girl-7.png",
  "images/avatar-set-2/png/032-burglar.png"
];

$("select#changeAvatar").change(function () {
  $("select#player-one")[0].src = avatarArray[this.value];
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
