
/* Swipper function */
const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    on: {
        autoplayTimeLeft(s, time, progress) {
            progressCircle.style.setProperty("--progress", 1 - progress);
            progressContent.textContent = `${Math.ceil(time / 1000)}s`;
        }
    }
});




/* Login Section Animation */
const loginSection = document.querySelector('.login-section');
const RegisterLink = document.querySelector('.Register-link');
const LoginLink = document.querySelector('.Login-link');

LoginLink.addEventListener('click', () => {
    loginSection.classList.add('active')
    console.log("I am login")
});

RegisterLink.addEventListener('click', () => {
    loginSection.classList.remove('active')
    console.log("I am Register")
});
