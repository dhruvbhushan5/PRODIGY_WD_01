const mobile = document.querySelector(".mobile_nav_btn");
const nav_header = document.querySelector(".header");
const togglenav = () => {
    nav_header.classList.toggle("active")

};
mobile.addEventListener("click", () => togglenav());
