$("#search-btn").on("click", function () {

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