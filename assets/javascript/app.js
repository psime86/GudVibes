$(document).ready(function(){
    $('.sidenav').sidenav({
      edge: "right"
    });
  });

//shuffle button click event
$("#shuffle-btn").on("click", function() {
  console.log("shuffle");

});

//play button click event
$("#play-btn").on("click", function() {
  console.log("play");

});

//delete button click event
$("#delete-btn").on("click", function() {
  console.log("delete");
  $("#songs").empty();

});
