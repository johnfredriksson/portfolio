console.log("Ready")

let mainHamburger = document.getElementById("main-hamburger");
let mainNav = document.getElementById("main-nav");

mainHamburger.addEventListener("click", function() {
    if (mainNav.classList.length === 2) {
        mainNav.classList.remove("navhide")
    } else {
        mainNav.classList.add("navhide");
    }
})

if (document.getElementById("hamburger") !== null) {
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
}
