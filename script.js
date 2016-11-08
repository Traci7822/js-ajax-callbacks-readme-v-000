$(document).ready(function(){
  // Now we start the Ajax GET request. The first parameter is the URL with the data.
  // The second parameter is a function that handles the response.
  $.get("sentence.html", function(response) {
    // Here we are getting the element on the page with the id of sentences and
    // inserting the response
    $("#sentences").html(response);
  });

  $.get("this_doesn't_exist.html", function(data) {
    doSomethingGood();
  }).fail(function(error) {
    console.log('Something went wrong" ' + error);
  });
  
});
