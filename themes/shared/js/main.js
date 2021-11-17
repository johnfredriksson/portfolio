console.log("Ready")

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