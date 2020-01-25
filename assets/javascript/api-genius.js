$("#search-btn").on("click", function () {

    console.log($("#search-btn").val());

    var query = $("#search-btn").val().trim();
    var queryURL = "https://api.genius.com/search?q=" + query + "&&access_token=ijk3l-8zYdlGBiGFusHTgnY1pZNO70YL78V3ZIPR7QJQrEZFT8HzV6RTPGZStOX8"

    // fetch('https://api.genius.com/artists/16775?access_token=ijk3l-8zYdlGBiGFusHTgnY1pZNO70YL78V3ZIPR7QJQrEZFT8HzV6RTPGZStOX8')
    // .then(response => response.json())
    // .then(json => {
    //   document.write(JSON.stringify(json));
    // });

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (results) {

        

        console.log(results);

        console.log("clicked");
    })

});