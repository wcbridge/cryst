

var win = 0;
var lose = 0;

var randomArray = [];
var counter = 0;
var targetNumber;

// document.getElementById("target").innerHTML = (targetNumber);
// //var imagePath = [pathOne,pathTwo,pathThree,pathFour];
// randomArray = function () {
//     return Math.floor(Math.random() * 12) + 1;
// }
// var cryCount = Array(4).fill(0).map(randomArray);
// console.log(cryCount);

$(document).ready(function () {
    initialize();
});
function initialize() {

    randomArray = [];
    counter = 0;
    targetNumber = Math.floor(Math.random() * 120) + 19;

    document.getElementById("target").innerHTML = (targetNumber);
    //var imagePath = [pathOne,pathTwo,pathThree,pathFour];
    // randomArray = function () {
    //     return Math.floor(Math.random() * 12) + 1;
    // }
    // var cryCount = Array(4).fill(0).map(randomArray);
    // console.log(cryCount);
    for (i = 0; i < 4; i++) {
        var randomNum = Math.floor(Math.random() * 12) + 1;
        randomArray.push(randomNum);
        console.log(randomArray);
    }


    // for (i = 0; i < 4; i++) {
    for (i = 0; i < 4; i++) {

        var imageCrystal = $(`<img class="crystal-image" value=${randomArray[i]} src="assets/images/crystalball.jpg">`);
        //  imageCrystal.addClass("crystal-image");
        //  //imageCrystal.attr("src", "assets/images/" + imagePath[i] + "");
        //  imageCrystal.attr("src", "assets/images/crystalball.jpg");
        //  imageCrystal.attr("data-crystalValue", cryCount[i]);

        $(".crystals").append(imageCrystal);


    };

}
 
$(".crystal-image").click(function () {
       var crystalValue = $(this).val();
    // crystalValue = parseInt(crystalValue);
    console.log($(this).val());
    counter += crystalValue;
    document.getElementById("counter").innerHTML = (counter);
})
 

    
    if (targetNumber == counter) {

        win++
        document.getElementById("wincount").innerHTML = "WIN : " + win;
        initialize();
    }
    else if (targetNumber < counter) {

        lose++
        document.getElementById("losecount").innerHTML = "LOSE : " + lose;
        initialize();
    }
  
    //console.log(counter);











