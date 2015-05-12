$(document).ready(function() {
  var entry = prompt("Please Enter a number");
  
  console.log("Document Ready!");
  for (var i = 1; i <=entry; i++){
    if(i%3 == 0 && i%5 == 0) {
      $(".numbers").append("<li>FizzBuzz!</li>");
    }
    else if (i%3 == 0) {
      $(".numbers").append("<li>Fizz!</li>");
    }
    else if (i%5 == 0) {
      $(".numbers").append("<li>Buzz!</li>");
    }
    else {
      $(".numbers").append("<li>" + i + "</li>");
    }
    
  }
  if (entry == 0) {
    alert("You have to enter a number!");
    document.location.reload(true);
      }
  if (entry%1 !== 0) {
    $(".numbers").html("");
    i=0;
    alert("Please enter a full number");
    document.location.reload(true);
      }
  $(".restart").click(function() {
    document.location.reload(true);
  }); 
    
  
});