document.getElementById("reservation-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Retrieve form data
    var name = document.getElementById("name").value;
    var date = document.getElementById("date").value;
    var destination = document.getElementById("destination").value;

    // Perform further processing or send data to the server

    // Clear form fields
    document.getElementById("reservation-form").reset();
});
