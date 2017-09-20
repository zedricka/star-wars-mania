// console.log("Sanity Check");

function buildHtmlElements(){ // creates HTML elements dynamically
// Build the elements
let title = $("<h2 class='film-title'></h2>").text("FILM TITLE");
let episode = $("<p class='film-episode'></p>").text("FILM EPISODE NUMBER");
let director = $("<p class='film-director'></p>").text("FILM DIRECTOR NAME");
let releasedate = $("<p class='film-release-date'></p>").text("FILM RELEASE DATE");

// Append the elements
$("body").append(title, episode, director, releasedate);
} 

function getFilmData(id){ // GETS the film data

}

// AJAX to get the data from SWAPI
/*  $("button").click(function(){
      $.ajax({url: "http https://swapi.co/api/films/", success: function(data, status){
          $("#films").html(result);
      }});
    });
*/


$("button").click(function(){
  $.ajax({url: "https://swapi.co/api/films/",
    type: "GET",
    success:function(result){
      console.log(result);
    $(".films").html(result);
    }
  });
    fail:function(error){
      alert("Something is wrong, very wrong.");
    };
  //   success:function(result){
  //     console.log(result);
  //   $(".films").html(result);
  // }}),
  //   fail:function(error){
  //     alert("Something is wrong, very wrong.");
  // }
// });