const menuBtn =
document.getElementById("menuBtn");

const submenu =
document.getElementById("submenu");

menuBtn.addEventListener("click", () => {
    submenu.style.display =
    submenu.style.display === "block"
    ? "none"
    : "block";
});

const slides =
document.querySelectorAll(".slide");

let current = 0;

function nextSlide(){

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){
        current = 0;
    }

    slides[current].classList.add("active");
}

setInterval(nextSlide, 4000);