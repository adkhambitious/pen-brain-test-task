document.querySelector(".header__burger").addEventListener("click", () => {
    document.querySelector(".header__burger").classList.toggle("active");
    document.querySelector(".menu-list").classList.toggle("active");
    document.querySelector(".header__time-schedule").classList.toggle("active");
    document.querySelector(".header__contacts").classList.toggle("active");
})
