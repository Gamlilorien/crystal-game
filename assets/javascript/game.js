//*************
//First declare all the variables and functions

// GLOBAL VIARIABLES
// Wins and Losses
var wins = 0;
var losses = 0;

// 4 crystals
var diamond;
var emerald;
var ruby;
var sapphire;

// total score and target number
var totalScore =0;
var targetNumber =0;

// functions
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

function newTargetNumber() {
    return getRndInteger(19, 120);
};

function newCrystalValue() {
    // Function doesn't work without returning the result!!
    return getRndInteger(1, 12);
};

function newGame() {
    diamond = newCrystalValue();
    emerald = newCrystalValue();
    ruby = newCrystalValue();
    sapphire = newCrystalValue();

    targetNumber = newTargetNumber();
    $("#targetNumber").text(targetNumber);

    // Reset totalScore
    $("#totalScore").text("0");
    totalScore = 0;
};

function isWin() {
    // ie targetNumber == totalScore
    wins = wins +1;
    $("#wins").text(wins);
    alert("You win!");
    newGame();
};

function isLoss() {
    // ie targetNumber < totalScore
    losses = losses +1;
    $("#losses").text(losses);
    alert("You loose!")
    newGame();
};

function addCrystalValue(crystal) {
    totalScore = totalScore + crystal;
    $("#totalScore").text(totalScore);
    // now check for a win
    if (targetNumber === totalScore) {
        isWin();
    }
    if (targetNumber < totalScore) {
        isLoss();
    }
};

function pulseAnimation(idCrystal) {
    // First remove 
    $(idCrystal).addClass("pulse");
    setTimeout(function(){
        $(idCrystal).removeClass("pulse"); 
    }, 500);

}

// Now begin game
// This is the jQuery equalivalent of on document ready
$(function() {
    newGame();


// Set on click trigger for the 4 crystals

$("#diamond").click(function(){
    addCrystalValue(diamond);
    pulseAnimation("#diamond");
});

$("#emerald").click(function(){
    addCrystalValue(emerald);
    pulseAnimation("#emerald");
});

$("#ruby").click(function(){
    addCrystalValue(ruby);
    pulseAnimation("#ruby");
});

$("#sapphire").click(function(){
    addCrystalValue(sapphire);
    pulseAnimation("#sapphire");
});













});
