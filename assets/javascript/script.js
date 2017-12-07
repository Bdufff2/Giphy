// make a giphy account & get api key
// create html structure add buttons for the buttons that are supposed to preload(already on the page)
// create form to add new buttons
// create variables in array

// create an .ajax call 
// console.log respose to test
// dissect the object
// title
// ratings
// img (limit the number of images displayed)
// display to user
// on click animate gifs
// on click stops animation
var apiKey = "cNAhWZ4OX6OdaUfKzlkPY7YsgGj1nqgV"
var url = "https://api.giphy.com/v1/gifs/search?api_key=cNAhWZ4OX6OdaUfKzlkPY7YsgGj1nqgV&q=gif&limit=10&offset=0&rating=PG&lang=en"




var animals = ["Dog", "Cat", "Horse", "Pig"]


// create new buttons on user input
function createNewButtons() {

    // Deleting the movie buttons prior to adding new movie buttons
    // (this is necessary otherwise we will have repeat buttons)
    $("#animalButtons").empty();

    for (var i = 0; i < animals.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array.
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var a = $("<button>");
        // Adding a class
        a.addClass("animal");
        // Adding a data-attribute
        a.attr("data-name", animals[i]);
        // Providing the button's text with a value
        a.text(animals[i]);
        // Adding the button to the HTML
        $("#animalButtons").append(a);
    }
}

$("#add-animal").on("click", function (event) {

    event.preventDefault();

    var animal = $("#animalButtons").val().trim();

    animals.push(animal);

    createNewButtons();
});

createNewButtons();

// (document).ready
// clear