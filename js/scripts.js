// JavaScript to handle query link clicks
document.querySelectorAll('.query-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor behavior
        const src = this.getAttribute('data-src'); // Get the src from data attribute
        document.getElementById('queryIframe').src = src; // Set iframe src
        document.getElementById('iframeContainer').style.display = 'block'; // Show iframe
    });
});