
$(document).ready(() => {

    $(() => {
        $(".devour").on("click", (event) => {
            let id = $(this).data("id");

            let isEaten = {
                devoured: true
            };

            // PUT request.
            $.ajax("/api/burger/" + id, {
                type: "PUT",
                data: isEaten
            }).then(
                () => {
                    console.log("changed status to", isEaten);
                    
                    location.reload();
                });
        });

        $("#burgers").on("submit", (event) => {
            
            event.preventDefault();

            let newBurger = {
                name: $("#name").val().trim()
            };
            console.log(name);

            // POST request.
            $.ajax("/api/burger", {
                type: "POST",
                data: newBurger
            }).then(
                () => {
                    console.log("created new burger, captain");
                    // Reload page
                    location.reload();
                }
            );
        });

        $(".delete-burger").on("click", (event) => {
            let id = $(this).data("id");

            // DELETE request.
            $.ajax("/api/burger/" + id, {
                type: "DELETE"
            }).then(
                () => {
                    console.log("deleted burger", id);
                    // Reload the page 
                    location.reload();
                }
            );
        });
    });
})