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
    userInput = $('#input').val();
    $('#content').load("screens/" + "results.html");
    return false;
});


// ==============================================================================================

$(document).ready(function () {
    $("#abt").on('click', function () {
        $("#content").load("screens/" + "about.html");
        return false;
    });
});
$(document).ready(function () {
    $("#photo-icon").on('click', function () {
        $("#content").load("screens/" + "profile.html");
        return false;
    });
});
// $(document).ready(function () {
//     $("#map").on('click', function () {
//         $("#content").load("screens/" + "maps.html");
//         return false;
//     });
// });

// ==============================================================================================