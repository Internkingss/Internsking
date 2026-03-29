document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // You can add code here to send the data to a server if you want

    // Notify the user
    alert('Your response has been submitted. Thank you!');

    // Reset the form fields
    document.getElementById('contactForm').reset();
});