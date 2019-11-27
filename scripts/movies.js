var i = 0;
var endpoint = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?outputType=JSON&api-key=HjQceOl63KGTrvpUhcUrpzbbz2gAgbKn";
var apiKey = "HjQceOl63KGTrvpUhcUrpzbbz2gAgbKn";
var dataPoint = endpoint + "?api-key=" + apiKey;
var resp;

// =================================== Dexie Setup =================================================

const db = new Dexie("WatchList");
/* Database Schema */
db.version(1).stores({
    movies: 'id++, titles, rating, latitude, longitude'
});

db.open().catch((error) => {
    console.log(error);
});

// ===============================================================================================

/* ===============================================================================================
: : Get user's current location
 ================================================================================================*/

var mylat;
var mylng;
function getLocation() {
    if(navigator.geolocation){
        var x = navigator.geolocation;
        x.getCurrentPosition(success);

        function success(position) {
            mylat = position.coords.latitude;
            mylng = position.coords.longitude;
            db.movies.put({latitude: mylat, longitude: mylng});
        }
    }
    else{
        alert("Geolocation is not supported by your browser, but no worries you still can search by entering your zipcode.");
    }
}
// need to get location earlier because of latencies and device's GPS response time
getLocation();

// ===================================== AJAX load functions ========================================

var userInput;
var useLocation;
$('#search').on('click', function () {
    userInput = $('#input').val();

    // if user inputs a movie name, load results.html 
    if(isNaN(userInput)){
        $('#content').load("screens/" + "results.html");
        return false;
    }

    // if user inputs a zipcode, load theaters.html 
    else{
        $("#content").load("screens/" + "theaters.html");
        return false;
    }
});

// if user chooses to search by their current location, load theaters.html
$('#locationUse').on('click',function(){
    userInput = true;
    $("#content").load("screens/" + "theaters.html");
    return false;
})

// if user clicks home from navbar, load home.html 
$('#home').on('click',function(){
    $("#content").load("screens/" + "home.html");
    return false;
})

// if user clicks forelook, load home.html
$('#goHome').on('click',function(){
    $("#content").load("screens/" + "home.html");
    return false;
})

// if user clicks about, load about.html
$(document).ready(function () {
    $("#abt").on('click', function () {
        $("#content").load("screens/" + "about.html");
        return false;
    });
});

// if user clicks profile icon, load profile.html
$(document).ready(function () {
    $("#photo-icon").on('click', function () {
        $("#content").load("screens/" + "profile.html");
        return false;
    });
});

// if user clicks profile icon, load profile.html
// $(document).ready(function () {
//     $("#nearMe").on('click', function () {
//         $("#content").load("screens/" + "maps.html");
//         return false;
//     });
// });

// ==============================================================================================

// enter key press event handler
$('#input').keypress(function(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
        userInput = $('#input').val();

        // if user inputs a movie name, load results.html 
        if(isNaN(userInput)){
            $('#content').load("screens/" + "results.html");
            return false;
        }
    
        // if user inputs a zipcode, load theaters.html 
        else{
            $('.search-box').hide();
            $("#content").load("screens/" + "theaters.html");
            return false;
        }  
    }
    //Stop the event from propogation to other handlers
    //If this line will be removed, then keypress event handler attached 
    //at document level will also be triggered
    event.stopPropagation();
});

// ==============================================================================================

if(mylat == undefined || mylng == undefined){
    db.movies.get(1, function (lastKnowLocation) {
        mylat = lastKnowLocation.latitude;
        mylng = lastKnowLocation.longitude;

});
}