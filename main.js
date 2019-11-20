var i = 0;
var endpoint = "https://data.cityofchicago.org/resource/crimes.json";
//
// Define your database
//
var db = new Dexie("friend_database");
db.version(1).stores({
    friends: 'id,case'
});
$.get(endpoint, function(response) {
    $.each(response, function(i, v) {
        db.friends.put({
            id: v.id,
            case :v.case_number
        });
    });
}).then(function() {
    //
    // Then when data is stored, read from it
    //
    db.friends.each(friends => console.log(i++, friends.
        case));
}).
catch(function(error) {
    alert("Ooops: " + error);
});
if(!('indexedDB' in window)) {
    console.warn('This browser doesn\'t support IndexedDB');
}