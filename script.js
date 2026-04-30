const menuIcon = document.querySelector(".menu-icon i");
const navLinks = document.querySelector(".nav-links");
let isOpen = false;
menuIcon.addEventListener("click", function(){
navLinks.classList.toggle("show");
if(!isOpen){
    menuIcon.classList.remove("fa-bars");
    menuIcon.classList.add("fa-xmark");
    isOpen = true;
}else{
    menuIcon.classList.remove("fa-xmark");
    menuIcon.classList.add("fa-bars");
    isOpen = false;
}
}
);