// $(document).ready(function () {

    // let querySearch = (searchParam) => {

    //     switch (searchParam) {
    //         case "ID":
    //             db.Inventories.findAll({
    //                 where: {
    //                     ID =
    //                 }
    //             })
    //             break;
    //         case "name":

    //             break;
    //         case "item_number":

    //             break;
    //     }

    // }




    $("#add-btn").on("click", function () {
        event.preventDefault()
        queryParam = $('input[name="searchParam"]:checked').val();
        queryKeyword = $("#submit-search").val();
        console.log(queryKeyword)
        console.log(queryParam)
        console.log(typeof queryParam)
        // querySearch()

        $.get("/search"+queryParam,function (data){
            // For each item that the server sends us back
            for (var i = 0; i < data.length; i++) {
                // Create a parent div to hold inventory data
                var itemInventory = $("<div>");
                // Add a class to this div: 'well'
                itemInventory.addClass("SQLtableDept");
                // Add an id to the well to mark which well it is
                itemInventory.attr("id", "item-inventory-" + i);
                // Append the well to the well section
                $("#SQLtableDept").append(itemInventory);
    
                // Now  we add our book data to the section we just placed on the page
                $("#item-inventory-" + i).append("<h6><b>Item:</b> " + data[i].item_name + "</h6>");
                $("#item-inventory-" + i).append("<h6><b>Price:</b> " + data[i].price + "</h6>");
                $("#item-inventory-" + i).append("<h6><b>Quantity:</b> " + data[i].quantity + "</h6>");
                $("#item-inventory-" + i).append("<h6><b>Aisle Number:</b> " + data[i].aisle_number + "</h6>");
                $("#item-inventory-" + i).append("<hr>");
            }
        });
    })

   

// })