var min = 19
var max = 120

var randomTarget = Math.floor(Math.random() * (max - min) + min);

$("#randomNumber").text(randomTarget);

var counter = 0;
var crystals = [12 , 14 , 19 , 3];

var jsWins = 0;

var jsLosses = 0;


//Functions...................................

$("#crystal0").on("click", function() {

    $("#total").text(counter += crystals[0]);

});

$("#crystal1").on("click", function() {

    $("#total").text(counter += crystals[1]);

});

$("#crystal2").on("click", function() {

    $("#total").text(counter += crystals[2]);

});

$("#crystal3").on("click", function() {

    $("#total").text(counter += crystals[3]);

});

// Win Function

$(".js-crystal").on("click", function() {
  if (counter === randomTarget) {
    jsWins++
    var min = 20
    var max = 150
    randomTarget = Math.floor(Math.random() * max - min + 1) + min;
    $("#randomNumber").text(randomTarget); 
    $("#wins").text(jsWins);
    $('#total').text(counter);{
        counter = 0;
        console.log(counter + "counter")
    }
  }

  // Lose Function

  else if (counter > randomTarget) {
    jsLosses++
    var min = 20
    var max = 150
    randomTarget = Math.floor(Math.random() * max - min + 1) + min;
    $("#randomNumber").text(randomTarget); 
    $("#losses").text(jsLosses);{
        counter = 0;
        console.log(counter + "counter")
    $('#total').text(counter);{
        counter = 0;
        console.log(counter + "counter")
    }
    }
  }
});