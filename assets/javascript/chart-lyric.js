$(document).ready(function () {

    // On click search
    $("#search-btn").on("click", function (event) {


        $("#lyric-div").text("");

        var query = $(".validate").val().trim();
        // var queryURL = "https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/q_track=" 
        //                 + query + "&&eda9bd934efed8915ff78d0e67775772"


        

        $.ajax({
            method: "GET",
            data: {

                apikey: "eda9bd934efed8915ff78d0e67775772",
                q_track: query,
            },

            url: "https://cors-anywhere.herokuapp.com/api.musixmatch.com/ws/1.1/track.search",

            contentType: 'application/json',
            success: function(data) {
                console.log(data);
                console.log(data.data.message.body.track_list[0].track.album_coverart_350x350);
            }
            

        })

    });
})