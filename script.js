document.addEventListener('DOMContentLoaded', () => {
    // Example of adding a simple interaction
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', () => {
            alert('You clicked a navigation link!');
        });
    });
});
