$(document).ready(function(){

    // On click search
    $("#search-btn").on("click", function(event){
    
    event.preventDefault();
    // Var for search bar input
    var search = $("#search-field").val().trim();
    console.log(search);
    
    // YoutTube API and AJAX call
        var queryURL2 = "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + search +
             "&key=AIzaSyB21l2vM6B11Bltdq3Yj_YI7jetMu9ZjLo&limit=5";
    
             $.ajax({
                 url: queryURL2,
                 method: "GET"
             })
             
             .then(function(response){
                console.log(response);
    
                // Empty video div
                $("#search-results").empty();
    
                // For loop to run through response
                for (var i = 0; i < response.items.length; i++){
                    var videoResult = response.items[i].id.videoId;
                    var videoTitle = response.items[i].snippet.title;
                    var thumbnail = response.items[i].snippet.thumbnails.default.url;
                    var imgDiv = $("<img>").attr("src", thumbnail);
                    var video = $("<iframe width= '560' height= '315' class= 'newVideo'>");
                    var newVidDiv = $("<div class ='newVidDiv'>");
                    var titleDiv = $("<p>").html("Title: " + videoTitle);
                    console.log(videoResult);
                    console.log(videoTitle);
                    console.log(thumbnail);
                    
                    video.attr("src", "https://www.youtube.com/embed/" + videoResult);
                    console.log(video);
                    newVidDiv.append(titleDiv);
                    newVidDiv.prepend(imgDiv);
                    $("#search-results").prepend(newVidDiv);

                    $(".newVidDiv").on("click", function(){
                        $("#video-div").empty();
                        
                        $("#video-div").html(video);

                        console.log(video);
                    
                    })
                }
    
    
             })
    

         $("#lyric-div").text("");

         var query = $(".validate").val().trim();
         var queryURL = "https://api.genius.com/search?q=" + query + "&&access_token=ijk3l-8zYdlGBiGFusHTgnY1pZNO70YL78V3ZIPR7QJQrEZFT8HzV6RTPGZStOX8"
     
         $("#search-field").val("");
     
         $.ajax({
             url: queryURL,
             method: "GET"
         }).then(function (response) {
     
             var lyricUrl = response.response.hits[0].result.url
             var fullTitle = response.response.hits[0].result.full_title
             var image = response.response.hits[0].result.header_image_thumbnail_url
     
             $("#lyric-div").append("<h3>" + fullTitle + "</h3>");
             $("#lyric-div").append("<h3><a href=" + lyricUrl + " target=_blank>Lyrics</a></h3>");
             $("#lyric-div").append("<img src='" + image + "'</img>");
     
         })
     
     });
    
    
    
    
    })
