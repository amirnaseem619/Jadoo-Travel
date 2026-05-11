const menuIcon = document.getElementById('open-menu');
const closeIcon = document.getElementById('close-menu');
const navLinks = document.querySelector('.nav-links');


menuIcon.addEventListener('click', function () {
    navLinks.classList.add('show');
    menuIcon.style.display = "none";
    closeIcon.style.display = "block";
});

closeIcon.addEventListener('click', function () {
    navLinks.classList.remove('show');
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
});