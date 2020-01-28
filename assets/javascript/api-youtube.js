$(document).ready(function(){

// On click search
$("#search-btn").on("click", function(event){

event.preventDefault();
// Var for search bar input
var video = $("#first_name2").val().trim();
console.log(video);

// YoutTube API and AJAX call
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + video +
         "&key=AIzaSyB21l2vM6B11Bltdq3Yj_YI7jetMu9ZjLo&limit=5";

         $.ajax({
             url: queryURL,
             method: "GET"
         })
         
         .then(function(response){
            console.log(response);

            // Empty video div
            $("#video-div").empty();

            // For loop to run through response
            for (var i = 0; i < response.items.length; i++){
                var videoResult = response.items[i].id.videoId;
                console.log(videoResult);
            }


         })
    })
})
