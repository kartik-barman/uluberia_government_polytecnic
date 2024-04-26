const humburger = document.querySelector(".humburger");
const crossOutline = document.querySelector(".cross-outline");
const navbar = document.querySelector(".nav-bottom");

humburger.addEventListener("click", ()=>{
  
  navbar.style.display = "block";
  humburger.style.display = "none"
  crossOutline.style.display = "block";

});

crossOutline.addEventListener("click", ()=>{
  navbar.style.display = "none";
  humburger.style.display = "block"
  crossOutline.style.display = "none";

})

const mark = document.querySelector(".mark")
const start = document.querySelector(".startBtn");
const stop = document.querySelector(".stopBtn");

start.onclick = startMark;
stop.onclick = stopMark;
function startMark(){
  mark.start();
}
function stopMark(){
  mark.stop();
}
console.log(mark);


/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,
  autoplay: {
    delay: 3000, // Automatically slide every 5 seconds
    disableOnInteraction: false, // Continue sliding even when user interacts with slider
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints:{
    600: {
      slidesPerView: 1,
    },
    968: {
      slidesPerView: 3,
    },
  },
});


