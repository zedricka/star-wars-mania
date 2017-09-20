// $(document).ready(function(){
//     $("button").click(function(){
//         $.ajax({url: "http swapi.co/api/planets/1/", success: function(result){
//             $("#films").html(result);
//         }});
//     });
// });


function buildHtmlElements(){
// Dynamically build HTML elements WITH data that was GET from JSON
// Build the elements
let title = $("<h2 class='film-title'></h2>").text("FILM TITLE");
let episode = $("<p class='film-episode'></p>").text("FILM EPISODE NUMBER");
let director = $("<p class='film-director'></p>").text("FILM DIRECTOR NAME");
let releasedate = $("<p class='film-release-date'></p>").text("FILM RELEASE DATE");

// Append the elements
$("body").append(title, episode, director, releasedate);
}

function getFilmData(id){

}


  $(document).ready(function(){
    $("button").click(function(){
      $.ajax({url: "http swapi.co/api/planets/1/", success: function(result){
          $("#films").html(result);
      }});
    });
  });