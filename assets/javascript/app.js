//Materialize Javascript
$(document).ready(function(){
    $('.sidenav').sidenav({
      edge: "right"
    });
  });

//delete button click event
$("#delete-btn").on("click", function() {
  console.log("delete");
  $("#songs").empty();

});
