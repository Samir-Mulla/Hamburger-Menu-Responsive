const navMenu = document.querySelector(".nav-menu");
const navList = document.querySelector(".nav__list");

navMenu.addEventListener("click", () => {
    // Toggle the visibility of the navigation list
    navList.classList.toggle("show");
});