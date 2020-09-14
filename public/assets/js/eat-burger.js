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
          
        }
      );
    })

    // $(".delete-burger").on("click", function(event) {
    //     var id = $(this).data("id");
    
    //     // Send the DELETE request.
    //     $.ajax("/api/cats/" + id, {
    //       type: "DELETE"
    //     }).then(
    //       function() {
    //         console.log("deleted cat", id);
    //         // Reload the page to get the updated list
    //         location.reload();
    //       }
    //     );
    //   });


})
