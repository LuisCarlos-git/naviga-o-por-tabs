const sections = document.querySelectorAll(".js-animate-scroll");

const heightPercent = window.innerHeight * 0.75;

function addAnimateScroll() {
  sections.forEach((item) => {
    const sectionTop = item.getBoundingClientRect().top;
    const isVisible = sectionTop - heightPercent < 0;
    if (isVisible) {
      item.classList.add("active");
    }
  });
}

addAnimateScroll();

window.addEventListener("scroll", addAnimateScroll);
