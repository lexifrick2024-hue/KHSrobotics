const button = document.querySelector(".menu-button");

const menu = document.querySelector(".nav-links");


button.addEventListener("click", () => {

    menu.classList.toggle("active");

});