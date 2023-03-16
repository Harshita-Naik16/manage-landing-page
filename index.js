// Navbar Menu

const openMenu = document.querySelector(".open-menu");
const closeMenu = document.querySelector(".close-menu");
const navList = document.querySelector(".nav-list");
const container = document.querySelector(".container");

openMenu.addEventListener("click", navMenuToggle)
closeMenu.addEventListener("click", navMenuToggle)

function navMenuToggle() {
    openMenu.classList.toggle("hidden");
    closeMenu.classList.toggle("hidden"); 
    navList.classList.toggle("show");
    container.classList.toggle("nav-bg");
}


// Testimonial scrolling

const sliderDots = document.getElementsByClassName("slider-dots");
const sliderRow = document.querySelector(".slider-row");



sliderDots[0].addEventListener("click", () => {
    Array.from(sliderDots).forEach(elem => {
     elem.classList.remove("active")
    })
    sliderDots[0].classList.add("active")
    sliderRow.style.transform = "translateX(0)";
 })

sliderDots[1].addEventListener("click", () => {
   Array.from(sliderDots).forEach(elem => {
    elem.classList.remove("active")
   })
   sliderDots[1].classList.add("active")
   sliderRow.style.transform = "translateX(-24%)";
})

sliderDots[2].addEventListener("click", () => {
   Array.from(sliderDots).forEach(elem => {
    elem.classList.remove("active")
   })
   sliderDots[2].classList.add("active")
   sliderRow.style.transform = "translateX(-48%)";
})

sliderDots[3].addEventListener("click", () => {
   Array.from(sliderDots).forEach(elem => {
    elem.classList.remove("active")
   })
   sliderDots[3].classList.add("active")
   sliderRow.style.transform = "translateX(-72%)";
})

