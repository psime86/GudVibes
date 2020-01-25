$("#search-btn").on("click", function () {

    console.log($(".validate").val());

    var query = $(".validate").val().trim();
    var queryURL = "https://api.genius.com/search?q=" + query + "&&access_token=ijk3l-8zYdlGBiGFusHTgnY1pZNO70YL78V3ZIPR7QJQrEZFT8HzV6RTPGZStOX8"

    // fetch('https://api.genius.com/artists/16775?access_token=ijk3l-8zYdlGBiGFusHTgnY1pZNO70YL78V3ZIPR7QJQrEZFT8HzV6RTPGZStOX8')
    // .then(response => response.json())
    // .then(json => {
    //   document.write(JSON.stringify(json));
    // });

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {

        console.log(queryURL)

        console.log(response);

        console.log("clicked");

        console.log(response.response.hits[0].result.url);

        var lyricUrl = response.response.hits[0].result.url

var html = lyricUrl.text(); // html as text
// var doc = new DOMParser().parseFromString(html, 'text/html');
// doc.title; doc.body;
   
        console.log(html)
})

});