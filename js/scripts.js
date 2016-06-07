$(document).ready(function() {

  $("#blanks").submit(function(event) {


    var newArray = [];

    for (index = 1; index <= 6; index ++) {
      var userInput = $("input#item" + index).val();
      newArray.push(userInput.toUpperCase());
      $("#item" + index).text(userInput);
      };

    var newArray = newArray.sort();
    $(".result").text(newArray);
    event.preventDefault();
  });
});
