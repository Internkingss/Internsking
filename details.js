document.getElementById('detailsForm').addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the selected interest value
    const interest = document.getElementById('interest').value;

    // Check if an interest was selected
    if (interest) {
        // Redirect to the recommendations page with the interest as a URL parameter
        window.location.href = `recommendations.html?interest=${interest}`;
    } else {
        alert('Please select a field of interest.');
    }
});