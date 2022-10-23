const active = document.querySelectorAll('.none-active');
const hover = document.querySelectorAll('#hover');
if (window.innerWidth > 375) { //? it only adds the hover effect if its not on mobile screen;
    hover[0].addEventListener("mouseenter", () => {
       active[0].classList.toggle("active")
   });
   hover[1].addEventListener("mouseenter", () => {
       active[1].classList.toggle("active")
   });
   hover[0].addEventListener("mouseout", () => {
       active[0].classList.remove("active")
   });
   hover[1].addEventListener("mouseout", () => {
       active[1].classList.remove("active")
   });

} else {
    hover[0].addEventListener("click", () => {
       active[0].classList.toggle("active")
   });
   hover[1].addEventListener("click", () => {
       active[1].classList.toggle("active")
   });

}
//? the below code makes the main tag get darker when you open the mobile menu: >>
const main = document.querySelectorAll('.dark');
const dark = main[0];
const darkTwo = main[1];
const burger = document.querySelector('#burger-menu');
const nav = document.querySelector('.navbar');
burger.addEventListener('click', () => {
    nav.classList.toggle('show');
    dark.classList.toggle('opacity');
    darkTwo.classList.toggle('opacity');
});




//TODO the below code  makes the dropdown appear and disappear on click event:
const drop = document.querySelectorAll('.drop');
const dropdown = document.querySelector('.dropdown');
const company = document.querySelector('.company')
drop[0].addEventListener('click', () => {
    dropdown.classList.toggle('selected');
});
drop[1].addEventListener('click', () => {
    company.classList.toggle('selected');
});
