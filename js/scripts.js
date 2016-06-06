$(document).ready(function() {

  $("#blanks").submit(function(event) {

    var blanks = ["item1", "item2", "item3", "item4", "item5", "item6"];
    var newArray = [];
    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      //capitalize userinput here
      userInput.toUpperCase();
      newArray.push(userInput);
      $("#" + blank).text(userInput);
    });

     var newArray = newArray.sort();
    $(".result").text(newArray);


    event.preventDefault();
  });
});




// $(document).ready(function()  {
//     var flavors = ["chocolate ", "vanilla ", "strawberry"];
//
//     flavors.forEach(function(flavor) {
//       // var userInput = $("input#" + flavor).val();
//       $('#result').text(flavors);
//
//     });
//   event.preventDefault();
//       });
