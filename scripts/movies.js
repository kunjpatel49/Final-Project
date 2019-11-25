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

// ============================= Data Fetch from New York Times ===================================

var userInput;
var useLocation;
$('#search').on('click', function () {
    userInput = $('#input').val();

    // if user inputs a movie name, load results.html 
    if(isNaN(userInput)){
        $('#loadUse').load("screens/" + "results.html");
        return false;
    }

    // if user inputs a zipcode, load maps.html 
    else{
        $('.search-box').hide();
        $("#loadUse").load("screens/" + "maps.html");
        return false;
    }
});

// if user clicks home from navbar, load home.html 
$('#home').on('click',function(){
    $("#loadUse").load("screens/" + "home.html");
    return false;
})

// if user clicks forelook, load home.html
$('#goHome').on('click',function(){
    $("#loadUse").load("screens/" + "home.html");
    return false;
})

// // if user chooses to search by their current location, load maps.html
// $('#locationUse').on('click',function(){
//     useLocation = true;
//     $("#loadUse").load("screens/" + "maps.html");
//     return false;
// })

// ==============================================================================================

$(document).ready(function () {
    $("#abt").on('click', function () {
        $("#loadUse").load("screens/" + "about.html");
        return false;
    });
});
$(document).ready(function () {
    $("#photo-icon").on('click', function () {
        $("#loadUse").load("screens/" + "profile.html");
        return false;
    });
});

// enter key press event handler
$('#input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        userInput = $('#input').val();

        // if user inputs a movie name, load results.html 
        if(isNaN(userInput)){
            $('#loadUse').load("screens/" + "results.html");
            return false;
        }
    
        // if user inputs a zipcode, load maps.html 
        else{
            $('.search-box').hide();
            $("#loadUse").load("screens/" + "maps.html");
            return false;
        }  
    }
    //Stop the event from propogation to other handlers
    //If this line will be removed, then keypress event handler attached 
    //at document level will also be triggered
    event.stopPropagation();
});

// ==============================================================================================