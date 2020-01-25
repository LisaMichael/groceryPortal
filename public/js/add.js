// When user clicks add-btn
$("#add-btn").on("click", function (event) {
  event.preventDefault();
  console.log("Inside new.js");

  // Make a new object
  var newItem = {
    item_name: $("#item_name").val().trim(),
    department: $("#department").val().trim(),
    price: $("#price").val().trim(),
    quantity: $("#quantity").val().trim(),
    aisle_number: $("#aisle_number").val().trim()
  };
  console.log(newItem);

  // Send an AJAX POST-request with jQuery
  $.post("/api/posts", newItem)
    // On success, run the following code
    .then(function (data) {
      // Log the data we found
      console.log(data);
      // newItem
      //   .create({
      //     item_name: $("#item_name").val().trim(),
      //     price: $("#price").val().trim(),
      //     quantity: $("#quantity").val().trim(),
      //     aisle_number: $("#aisle_number").val().trim()
      //   })
    });

  // Empty each input box by replacing the value with an empty string
  $("#item_name").val("");
  $("#department").val("");
  $("#price").val("");
  $("#quantity").val("");
  $("#aisle_number").val("");

  
});