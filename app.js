const slider = document.querySelector("#slider");
const sliderBall = document.querySelector("#slider div");
const modes = document.querySelectorAll("header span");
const prices = document.querySelectorAll("h3");

slider.addEventListener("click", () => {
    modes.forEach(mode => mode.classList.toggle("active"));
    if (modes[0].classList.contains("active")) {
        sliderBall.classList.replace("sliderMonthly", "sliderYearly");
        prices[0].innerHTML = "<span>$</span>199.99";
        prices[1].innerHTML = "<span>$</span>249.99"
        prices[2].innerHTML = "<span>$</span>399.99"
    } else {
        sliderBall.classList.replace("sliderYearly", "sliderMonthly");
        prices[0].innerHTML = "<span>$</span>19.99";
        prices[1].innerHTML = "<span>$</span>24.99"
        prices[2].innerHTML = "<span>$</span>39.99"
    }
});