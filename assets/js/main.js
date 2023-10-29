const collapsableNavbar = (function () {
  const toggleIcon = document.querySelector("#toggle-menu");
  const collapsableMenu = document.querySelector(".collapsable-menu");

  toggleIcon.addEventListener("click", (e) => {
    if (collapsableMenu.classList.contains("hide")) {
      collapsableMenu.classList.remove("hide");
    } else {
      collapsableMenu.classList.add("hide");
    }
  });
})();

const Carousel = (function () {
  const carousels = document.querySelectorAll(".carousel");
  const totalCarousels = carousels.length;

  if (totalCarousels === 0) {
    console.error("No Carousels Found On this page");
    return false;
  }

  let currentCarousel = 0;

  const loopCarousel = () => {
    currentCarousel++;

    carousels.forEach((carousel) => {
      carousel.classList.add("hide");
    });

    if (currentCarousel > totalCarousels) currentCarousel = 1;
    carousels[currentCarousel - 1].classList.remove("hide");
  };

  setInterval(loopCarousel, 4000);
})();
