$(function () {
    $("#eat-burger").on("submit", function(event) {

        var newBurger = {
            name: $("#burger").val().trim()}
        ;
        console.log(newBurger)
        

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger.name
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
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

