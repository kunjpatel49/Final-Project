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
    console.log(error);
});

// ===============================================================================================

// loop through array of 
function getElem(array) {

}

// ============================= Data Fetch from New York Times ===================================

var userInput;
$('#search').on('click', function () {
    // $(".content").hide();
    userInput = $('#input').val();
    var target = $(this).attr("href");
    console.log(target);
    // $(target).show();
    $(target).load("screens/" + "results.html");
  });


// ==============================================================================================

// ================================ AJAX Load Page ==============================================

// function loadScreen(screenName) {
//     $("body.content").load("./screens/" + screenName + ".html", function () {
//         console.log(screenName + " loaded");
//     });
// }

// ==============================================================================================

$("#abt").on('click', function(){
    var target = $(this).attr("href");
    $(target).load("screens/" + "about.html");
});