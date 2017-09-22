// console.log("Sanity Check");

function buildHtmlElements(responseData){ // creates HTML elements dynamically
// Build the elements
  let title = $("<h2 class='film-title'></h2>").text("FILM TITLE " + data.title);
  let episode = $("<p class='film-episode'></p>").text("FILM EPISODE NUMBER " + data.episode_id);
  let director = $("<p class='film-director'></p>").text("FILM DIRECTOR NAME " + data.director);
  let releasedate = $("<p class='film-release-date'></p>").text("FILM RELEASE DATE " + data.release_date);

  // Append text the elements
  $(".films").append(title, episode, director, releasedate);
} 

function getFilmData(id){ // GETS the film data
// This calls the data
$("button").click(function(){
  getFilmData(1);
  getFilmData(2);
  getFilmData(3);
  getFilmData(4);
  getFilmData(5);
  getFilmData(6);
  getFilmData(7);
  $.ajax({
    url: "https://swapi.co/api/films/1",
    type: "GET",
    
    success:function(data){
      console.log(data);
      buildHtmlElements(data)
    },

    fail:function(error){
      alert("Something is wrong, very wrong.");
    },
  });
});

}
