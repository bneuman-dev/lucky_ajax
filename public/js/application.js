$(document).ready(function () {
  $("die").hide();
  $("form").submit(function(event) {

    event.preventDefault();
    $("#die").show();

    $.post("/rolls/", function(data) {
      img_src = data + ".png";
      alt_vals = "'" + data + "'";
      $target = $("#die img");
      $target.attr("src", img_src);
      $target.attr("alt", alt_vals);
      $target.attr("title",alt_vals);
      console.log(data)
    })
  })
  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- generate a random number between 1 and 6 using JavaScript
  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

});

