const CURRENT_LOCATION = document.getElementsByClassName('weather-content__overview')[0];
const CURRENT_TEMP = document.getElementsByClassName('weather-content__temp')[0];
const FORECAST = document.getElementsByClassName('component__forecast-box')[0];

const apiKey = "ed4561f417b3decf4c40db32be71ac";
var cities = [" "]

// displayCityInfo function re-renders the HTML to display the appropriate content
function displayCityInfo() {
  var cityInput = $(this).attr("city-info");
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=" + apiKey
  
form.addEventListener("search-button", e => {
  e.preventDefault();
  let inputVal = input.value;});

  //Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(queryURL);
      var results =response.data

    // Creating a div to hold the movie
    var cityDiv = $("<div class='city'>");

    // Storing the tempretature data
    var temp = response.temp;
    var wind = response.wind;
    var humidity = humidity;
    var uvIndex = response.uvIndex;

    // Creating an element to have the values displayed
    var pOne = $("<p>").text("Temp: " + temp);
    var pTwo = $("<p>").text("Wind: " + wind);
    var pThree = $("<p>").text("Humidity: " + humidity);
    var pFour = $("<p>").text("UV: " + uvIndex);
    // Displaying the rating
    cityDiv.append(pOne);
    cityDiv.append(pTwo);
    cityDiv.append(pThree);
    cityDiv.append(pFour);

    // // Storing the 5 day forecast
    // var forecast = response.forecast;

    // // Creating an element to hold the 5 day forecast
    // var pFiveDay1 = $("<p>").text(": " + released);

    // // Displaying the release year
    // movieDiv.append(pTwo);

    // // Storing the plot
    // var plot = response.Plot;

    // // Creating an element to hold the plot
    // var pThree = $("<p>").text("Plot: " + plot);

    // // Appending the plot
    // movieDiv.append(pThree);

    // Retrieving the URL for the image
    // var imgURL = response.Poster;

    // Creating an element to hold the image
    var image = $("<img>").attr("src", "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png");

    // Appending the image
    cityDiv.append(image);

    // Putting the entire movie above the previous movies
  //   $("#movies-view").prepend(cityDiv);
  });

}

// Function for displaying movie data
// function renderButtons() {

  // Deleting the movies prior to adding new movies
  // // (this is necessary otherwise you will have repeat buttons)
  // $("#buttons-view").empty();

  // Looping through the array of movies
  // for (var i = 0; i < movies.length; i++) {

//     // Then dynamicaly generating buttons for each movie in the array
//     // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
//     var a = $("<button>");
//     // Adding a class of movie-btn to our button
//     a.addClass("movie-btn");
//     // Adding a data-attribute
//     a.attr("data-name", movies[i]);
//     // Providing the initial button text
//     a.text(movies[i]);
//     // Adding the button to the buttons-view div
//     $("#buttons-view").append(a);
//   }
// }

// This function handles events where a movie button is clicked
// $("#add-movie").on("click", function(event) {
//   event.preventDefault();
//   // This line grabs the input from the textbox
//   var movie = $("#movie-input").val().trim();

//   // Adding movie from the textbox to our array
//   movies.push(movie);

//   // Calling renderButtons which handles the processing of our movie array
//   renderButtons();
// });

// // Adding a click event listener to all elements with a class of "movie-btn"
// $(document).on("click", ".search-button", displayCityInfo);


