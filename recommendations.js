window.addEventListener('DOMContentLoaded', () => {
    // Create a URLSearchParams object from the current URL
    const params = new URLSearchParams(window.location.search);
    
    // Get the value of the 'interest' parameter
    const interest = params.get('interest');

    // Find the corresponding internship section
    if (interest) {
        const sectionToShow = document.getElementById(interest);
        if (sectionToShow) {
            // If the section exists, change its display style to 'block' to make it visible
            sectionToShow.style.display = 'block';
        } else {
            // As a fallback, show the tech section if the parameter is invalid
            document.getElementById('tech').style.display = 'block';
        }
    } else {
        // If no interest parameter is found, default to showing the tech internships
        document.getElementById('tech').style.display = 'block';
    }
});