window.onload = function() { 

const nav_links = document.getElementById('nav_links');
const hamburger = document.getElementById('hamburger');

hamburger.addEventListener('click', function() {
    nav_links.classList.toggle('show');
});

nav_links.addEventListener('click', () => {
    nav_links.classList.toggle('show');
});

const frontEndButton = document.getElementById('frontend');
const supportButton = document.getElementById('support');

supportButton.addEventListener('click', function() {
    document.querySelector('.it_support').style.display = 'grid';
    document.querySelector('.projecten').style.display = 'none';
});

frontEndButton.addEventListener('click', function() {
    document.querySelector('.it_support').style.display = 'none';
    document.querySelector('.projecten').style.display = 'grid';
});

}