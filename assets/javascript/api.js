$(document).ready(function () {

    var isAdded;

    // On click search
    $("#search-btn").on("click keyup", function (event) {
        if (event.which === 13 || event.type === 'click'){
            console.log("clicked");
            console.log("press");
        }

        event.preventDefault();
        // Var for search bar input
        var search = $("#search-field").val().trim();

        // YoutTube API and AJAX call
        var queryURL2 = "https://cors-anywhere.herokuapp.com/https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + search +
        "&key=AIzaSyAUApRYPhnniTgD8CQOM4hqHzbTGgiTRN8";

        $.ajax({
            url: queryURL2,
            method: "GET"
        })
        

            .then(function (response) {

                // Empty video div
                $("#search-results").empty();
                console.log(response);
                // For loop to run through response
                for (var i = 0; i < response.items.length; i++) {
                    var videoResult = response.items[i].id.videoId;
                    var videoTitle = response.items[i].snippet.title;
                    var thumbnail = response.items[i].snippet.thumbnails.default.url;
                    var imgDiv = $("<img class ='t-img z-depth-4'>").attr("src", thumbnail);
                    var video = $("<iframe width= '560' height= '315' class= 'newVideo'>");
                    var newVidDiv = $("<li class ='newVidDiv'>");
                    var titleDiv = $("<p>").html(videoTitle.substring(0,37) + "...");
                    
                    video.attr("src", "https://www.youtube.com/embed/" + videoResult);
                    newVidDiv.attr("data-attr", ('https://www.youtube.com/embed/' + videoResult));

                        
                    newVidDiv.append(titleDiv);
                    newVidDiv.prepend(imgDiv);
                    $("#search-results").append(newVidDiv);
                    
                }

                $("#search-results").prepend("<h3 id='results-title'>Search Results</h3>");

        });


                    $("#lyric-div").text("");

                    var query = $(".validate").val().trim();
                    var queryURL = "https://api.genius.com/search?q=" + query + "&&access_token=ijk3l-8zYdlGBiGFusHTgnY1pZNO70YL78V3ZIPR7QJQrEZFT8HzV6RTPGZStOX8"

                    $("#search-field").val("");

                    $.ajax({
                        url: queryURL,
                        method: "GET"
                    }).then(function (response) {
                        console.log(response);
                        var lyricUrl = response.response.hits[0].result.url
                        var fullTitle = response.response.hits[0].result.full_title
                        var image = response.response.hits[0].result.header_image_thumbnail_url
                        $("#lyric-div").append("<img id='album' src='" + image + "'</img>");
                        $("#lyric-div").append("<h3 id='lyric-title'>" + fullTitle + "</h3>");
                        $("#lyric-div").append("<h3><a class='waves-effect waves-light btn lyric-btn' href=" + lyricUrl + " target='_blank'><i class='material-icons right'>music_note</i>Lyrics</a></h3>");
                        

                        
                    


                        var stringTitle = fullTitle;
                        var split = "by"
                        var track = stringTitle.slice(0, (stringTitle.indexOf(split)));
                        var artist = stringTitle.substring(stringTitle.indexOf(split));

                        var artistFix = artist.trim();
                        var trackFix = track.trim();

                        



                        function getLyrics() {


                            apikey = "PzJYZ3Pu3TAHd3oJC87phKrpgZDNQBqFMrGRdu7g7RWkUXDsxVFY4YfkEoODHoEF"
                            queryUrl3 = "https://cors-anywhere.herokuapp.com/orion.apiseeds.com/api/music/lyric/" + artistFix + "/" + trackFix + "?apikey=" + apikey

                            $.ajax({
                                method: "GET",
                                url: queryUrl3,
                                contentType: 'application/json; charset="utf-8"',
                                success: function (data) {
                                    lyrics = data.result.track.text
                                    console.log(data);
                                    newDiv = $("<div id='lyrics'>")
                                    $("#lyric-div").append(newDiv);
                                    newDiv.append(lyrics);
                                }
                            })


                        }

                        getLyrics();

                    });


            })

            $("#search-results").on('click', '.newVidDiv', function() {

                
                $("#video-div").empty();

                var iframe = $("<iframe width= '560' height= '315' class= 'newVideo'>");
                iframe.attr("src", ($(this).attr("data-attr")) + "?autoplay=1");
                $("#video-div").html(iframe);
                console.log("clicked")

                    console.log($(this).attr("data-attr"))
                    console.log($("ul#songs li.newVidDiv").attr("data-attr"));
                
                var playlistItem = $(this).clone(true)
                playlistItem.clone(true).appendTo("#songs");
                $("ul#songs li.newVidDiv").addClass("updated");
                console.log($(this).attr("data-attr"))
                console.log($("ul#songs li.newVidDiv").attr("data-attr"));


        });

            $("#songs").on('click', '.newVidDiv', function() {

                var iframe = $("<iframe width= '560' height= '315' class= 'newVideo'>");
                iframe.attr("src", $(this).attr("data-attr"));
                $("#video-div").html(iframe);
                console.log("clicked")

                $("#lyric-div").empty();
            });

            //Future Development of a Playlist (DO NOT USE!!!)

            // function playlistFunction () {
            //     currentSong = 0;
            //     var vidSource = $(".newVidDiv").attr("data-attr");
            //     console.log(vidSource);
            //     $(".newVideo")[currentSong].src = vidSource[currentSong];
            //     $("#play-btn").click(function (event) {
            //         event.preventDefault();
            //         $(".newVideo")[currentSong].src = this;
            //         currentSong = $(this).parent().index();
            //         console.log("play");
            //     });

                
            //     console.log(currentSong);
                
            // }


            // playlistFunction();
             

            

        });
