$(document).ready(function(){

// On click search
$("#search-btn").on("click", function(event){

event.preventDefault();
// Var for search bar input
var search = $("#search-field").val().trim();
console.log(search);

// YoutTube API and AJAX call
    var queryURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + search +
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
                var videoTitle = response.items[i].snippet.title;
                var thumbnail = response.items[i].snippet.thumbnails.default.url;
                var video = $("<img class= 'newVideo'>");
                var newVidDiv = $("<div class ='newVidDiv'>");
                var titleDiv = $("<p>").html("Title: " + videoTitle);
                console.log(videoResult);
                console.log(videoTitle);
                console.log(thumbnail);
                
                video.attr("src", "https://www.youtube.com/watch?v=" + videoResult);
                console.log(video);
                newVidDiv.append(titleDiv);
                newVidDiv.prepend(video);
                $("#video-div").prepend(newVidDiv);
            }


         })
    })
})
