$(document).ready(function(){

$("#search-btn").on("click", function(event){

event.preventDefault();

var video = $("#first_name2").val().trim();
console.log(video);
  
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + video +
         "&key=AIzaSyB21l2vM6B11Bltdq3Yj_YI7jetMu9ZjLo";

         $.ajax({
             url: queryURL,
             method: "GET"
         }).then(function(response){
            console.log(response); 
         })
    })
})
