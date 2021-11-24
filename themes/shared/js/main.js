console.log("Ready")

let mainHamburger = document.getElementById("main-hamburger");
let mainNav = document.getElementById("main-nav");

mainHamburger.addEventListener("click", function() {
    console.log("hello")
    if (mainNav.classList.length === 2) {
        mainNav.classList.remove("navhide")
    } else {
        mainNav.classList.add("navhide");
    }
})

let hamburger = document.getElementById("hamburger");
let mobLink = document.getElementsByClassName("mob-link");

hamburger.addEventListener("click", function() {
    if (mobLink[0].classList.length === 2) {
        for (i = 0; i < mobLink.length; i++) {
            mobLink[i].classList.remove("hide")
        }
    } else {
        for (i = 0; i < mobLink.length; i++) {
            mobLink[i].classList.add("hide");
        }
    }
})
