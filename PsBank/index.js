const log = document.querySelector(".nav-btn #active");
const logs = document.querySelector(".nav-item")
const menu = document.querySelector(".nav-item .active-nav");

logs.addEventListener('click', () => {
    logs.classList.add(menu);
})