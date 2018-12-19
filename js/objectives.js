//1. Test: js file is linked use:
// $(document).ready(function(){
// var show = function(){
//   console.log("hi");
// };
// show();
// });
/*Status: Linked*/

//---------------------------------------

$(document).ready(function() {
  //2. Enable avatar Selection.
  //Player 1
  var avatarArray1 = [
    "images/avatar/baby.png",
    "images/avatar/burglar.png",
    "images/avatar/clown.png",
    "images/avatar/detective.png",
    "images/avatar/santa.png"
  ];

  $("#changeAvatar1").change(function() {
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

  $("#changeAvatar2").change(function() {
    $("#player-two")[0].src = avatarArray2[this.value];
  });


  //IP Objectives-------------------------
  //1. Player One can role dice...
  //* When Roll Dice btn is clicked, a random number is displayed on Player's score.

  //* When Roll Dice is clicked, output image is displayed on the console.
  // <img id="die-display" src="images/die/1.png" alt="dice image">
  // <a id="roll-button" class="btn btn-mod btn-w btn-medium btn-round ">Roll Dice</a>
  //<p id="consoleMessage"></p>


  // PLAYER 1 CONTROLS
  $("#roll-button1").click(function() {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    console.log(diceNumber); //test roll button selector

    var diceFaces = [
      "images/die/1.png", //dicFaces[0]
      "images/die/2.png", //diceFaces[1]
      "images/die/3.png", //diceFaces[2]
      "images/die/4.png", //diceFaces[3]
      "images/die/5.png", //diceFaces[4]
      "images/die/6.png" //diceFaces[4]
    ];

    if (diceNumber === 1) {
      $("div#currentScore1").text(diceNumber);
      $(".insertImage1").src = ("images/die/1.png");
    } else if (diceNumber === 2) {
      $("div#currentScore1").text(diceNumber)
      $(".insertImage1").src = "images/die/2.png";
    } else if (diceNumber === 3) {
      $("div#currentScore1").text(diceNumber)
      $(".insertImage1").src = "images/die/3.png";
    } else if (diceNumber === 4) {
      $("div#currentScore1").text(diceNumber)
      $(".insertImage1").src = "images/die/4.png";
    } else if (diceNumber === 5) {
      $("div#currentScore1").text(diceNumber)
      $(".insertImage1").src = "images/die/5.png";
    } else {
      $("div#currentScore1").text(diceNumber)
      $(".insertImage1").src = "images/die/6.png";
    };

  });
  $("#hold-button").click(function() {


    var res1 = parseInt($('#currentScore1').text());
    var res2 = parseInt($('#totalOne').text());
    var res3 = add(res1, res2);
    $('#totalOne').text(res3);
    cleaDiceRol();

  });

  function cleaDiceRol() {
    $('#currentScore1').text(0);
  };

  function add(num0, num1) {
    var result = num0 + num1;
    return result;
  };
  //------ // END PLAYER 1 CONTROLS

  // PLAYER 2 CONTROLS
  $("#roll-button2").click(function() {
    var diceNumber = Math.floor(Math.random() * 6) + 1;
    console.log(diceNumber); //test roll button selector

    var diceFaces = [
      "images/die/1.png", //dicFaces[0]
      "images/die/2.png", //diceFaces[1]
      "images/die/3.png", //diceFaces[2]
      "images/die/4.png", //diceFaces[3]
      "images/die/5.png", //diceFaces[4]
      "images/die/6.png" //diceFaces[4]
    ];

    if (diceNumber === 1) {
      $("div#currentScore2").text(diceNumber);
      $(".insertImage1").src = ("images/die/1.png");
    } else if (diceNumber === 2) {
      $("div#currentScore2").text(diceNumber)
      $(".insertImage1").src = "images/die/2.png";
    } else if (diceNumber === 3) {
      $("div#currentScore2").text(diceNumber)
      $(".insertImage1").src = "images/die/3.png";
    } else if (diceNumber === 4) {
      $("div#currentScore2").text(diceNumber)
      $(".insertImage1").src = "images/die/4.png";
    } else if (diceNumber === 5) {
      $("div#currentScore2").text(diceNumber)
      $(".insertImage1").src = "images/die/5.png";
    } else {
      $("div#currentScore2").text(diceNumber)
      $(".insertImage1").src = "images/die/6.png";
    };

  });
  $("#hold-button2").click(function() {


    var res1 = parseInt($('#currentScore2').text());
    var res2 = parseInt($('#total2').text());
    var res3 = add(res1, res2);
    $('#total2').text(res3);
    cleaDiceRol();

  });

  function cleaDiceRol() {
    $('#currentScore2').text(0);
  };

  function add(num0, num1) {
    var result = num0 + num1;
    return result;
  };
  //------ // END PLAYER 1 CONTROLS




}); //------ closing jquery loading


// $("#insertImage1").src = diceFaces[diceFace];
// if (randomNumber === 1) {
//   $("#insertImage").hide('<img id="die-2" src="'+diceArray[1]+'" height="200px" width="200px" />');
//   $("#insertImage").prepend('<img id="die-1" src="'+diceArray[0]+'" height="200px" width="200px" />');
//   document.text
//   // $("consoleMessage").innerHTML = "You rolled a " + randomNumber + "."
// } else if (randomNumber === 2) {
//   $("#insertImage").hide('<img id="die-2" src="'+diceArray[1]+'" height="200px" width="200px" />');
//   $("#insertImage").prepend('<img id="die-2" src="'+diceArray[1]+'" height="200px" width="200px" />');
// } else if (randomNumber === 3) {
//   $("#insertImage").hide('<img id="die-2" src="'+diceArray[1]+'" height="200px" width="200px" />');
//   $("#insertImage").prepend('<img id="die-3" src="'+diceArray[2]+'" height="200px" width="200px" />');
// } else if (randomNumber === 4) {
//   $("#insertImage").hide('<img id="die-2" src="'+diceArray[1]+'" height="200px" width="200px" />');
//   $("#insertImage").prepend('<img id="die-4" src="'+diceArray[3]+'" height="200px" width="200px" />');
// } else if (randomNumber === 5) {
//   $("#insertImage").hide('<img id="die-2" src="'+diceArray[1]+'" height="200px" width="200px" />');
//   $("#insertImage").prepend('<img id="die-5" src="'+diceArray[4]+'" />');
// } else {
//   $("#insertImage").hide('<img id="die-2" src="'+diceArray[1]+'" height="200px" width="200px" />');
//   $("#insertImage").prepend('<img id="die-6" src="'+diceArray[5]+'" height="200px" width="200px" />');
// }



// var status = document.getElementById("status");
// status.innerHTML = "You rolled " + diceTotal + ".";
// if (diceTotal == 7 || diceTotal == 11) {
//   status.innerHTML += " You Won!";
