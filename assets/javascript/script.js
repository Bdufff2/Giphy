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

    // deleting all buttons
    $("#animalButtons").empty();

    for (var i = 0; i < animals.length; i++) {

        // Then dynamicaly generating buttons for each movie in the array.
        // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
        var newButton = $("<button>");
        // Adding a class
        newButton.attr("class", "animal");

        newButton.attr("type", "button");
        // Adding a data-attribute
        newButton.attr("data-name", animals[i]);
        // Providing the button's text with a value
        newButton.text(animals[i]);
        // Adding the button to the HTML
        $("#animalButtons").append(newButton);
        console.log(newButton); 
    }
}

$("#add-animal").on("click", function (event) {

    event.preventDefault();

    var animal = $("#animal-input").val().trim();

    animals.push(animal);

    createNewButtons();
       
});

createNewButtons();

$(document).on("click", ".animal", function(e) {
    var animalName = $(this).attr("data-name");
    console.log(animalName);

    // make our AJAX call 

    // Display our giphies to the page
    
});

// (document).ready
// clear