window.onload = function() { 

const nav_links = document.getElementById('nav_links');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', function() {
    nav_links.classList.toggle('show');
});

nav_links.addEventListener('click', () => {
    nav_links.classList.toggle('show');
})

};