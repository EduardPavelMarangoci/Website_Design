const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".nav-mobile-toggle");



// when someone clicks the hamburger button
// if the nav is closed, open it
// if the nav is open, close it

navToggle.addEventListener("click", () => {
    const visibility = nav.getAttribute("data-visible");
    console.log(navToggle);
    if(visibility === "false"){
        nav.setAttribute("Data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("Data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
});