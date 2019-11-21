
var i = 0;
var endpoint = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?outputType=JSON&api-key=HjQceOl63KGTrvpUhcUrpzbbz2gAgbKn";
var apiKey = "HjQceOl63KGTrvpUhcUrpzbbz2gAgbKn";
var dataPoint = endpoint + "?api-key=" + apiKey;
var resp;

// loop through array of 
function getElem(array){
    
}

$.get(endpoint, function (response) {
    resp = response.results;
    console.log(resp);
    for(var i = 0; i < resp.length; i++){
        $('body').append("<img src='" + resp[i].multimedia.src + "'>");
        console.log(resp[i].multimedia.src);
    }
});
