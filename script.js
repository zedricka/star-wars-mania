// $(document).ready(function(){
//     $("button").click(function(){
//         $.ajax({url: "http swapi.co/api/planets/1/", success: function(result){
//             $("#films").html(result);
//         }});
//     });
// });


function buildHtmlElements(responseData){
// Dynamically build HTML elements WITH data that was GET from JSON
// In class films, add classes
$("#films").append(new Array(++4).join("<div></div>")
});

  $(document).ready(function(){
    $("button").click(function(){
      $.ajax({url: "http swapi.co/api/planets/1/", success: function(result){
          $("#films").html(result);
      }});
    });
  });