let btn = document.querySelector(".menu-btn");
let list = document.querySelector(".header__list");

btn.addEventListener("click", () => {
    btn.classList.toggle("open");

    if (btn.classList.contains("open")) {
        list.classList.add("show");
    } else {
        list.classList.remove("show");
    }
});