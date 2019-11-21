
var i = 0;
var endpoint = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?outputType=JSON&api-key=HjQceOl63KGTrvpUhcUrpzbbz2gAgbKn";
var apiKey = "HjQceOl63KGTrvpUhcUrpzbbz2gAgbKn";
var dataPoint = endpoint + "?api-key=" + apiKey;
var resp;

// =================================== Dexie Setup =================================================

const db = new Dexie("WatchList");
                                   /* Database Schema */
db.version(1).stores({
    movies: 'titles, rating'
});

console.log(db.movies.get('Ford v Ferrari'));

db.open().catch((error) => {
    console.log(error.stack || error);
});

// =================================================================================================

// loop through array of 
function getElem(array){
    
}

$.get(endpoint, function (response) {
    resp = response.results;
    console.log(resp);
    for(var i = 0; i < resp.length; i++){
        // $('body').append("<img src='" + resp[i].multimedia.src + "'>");
        db.movies.put({titles: resp[i].display_title, rating: resp[i].mpaa_rating});
    }
});

// $("#abt").click(function(){
//     $("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr){
//       if(statusTxt == "success")
//         alert("External content loaded successfully!");
//       if(statusTxt == "error")
//         alert("Error: " + xhr.status + ": " + xhr.statusText);
//     });
//   }); 

/**
 * load screen content via AJAX
**/

