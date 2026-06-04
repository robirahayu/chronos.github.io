const menuToggle =
document.getElementById("menu-toggle");

const submenu =
document.getElementById("submenu");

menuToggle.addEventListener("click",()=>{

if(submenu.style.display==="block"){
submenu.style.display="none";
}else{
submenu.style.display="block";
}

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

setInterval(nextSlide,4000);