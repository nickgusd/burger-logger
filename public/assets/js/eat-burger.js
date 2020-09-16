$(document).ready(function() {
    $("#eat-burger").on("click", function(event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burger").val().trim()
        }
        ;
        console.log(newBurger)
        


    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    })



    $(".devour-button").on("click", function(event) {
        var id = $(this).data("id")
      var newBurger = {
          devoured: true
      }
      console.log("hello")
      $.ajax("/api/burgers/" + id, {
          type: "PUT",
          data: newBurger
        }).then(
          function() {
            console.log("devoured burger!");
            // Reload the page to get the updated list
            location.reload();
          }
        );
  
    })




})
