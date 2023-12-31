const toTopButton = document.getElementById("to-top-btn");
const mainHeader = document.getElementById("main-header");
const hoverArea = document.getElementById("header-hover-area");
const headerWrapper = document.querySelector(".header-wrapper");

const offset = 900;
const headerOffset = 140;

if (mainHeader && toTopButton) {
  function scroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > offset && !toTopButton.classList.contains("is-visible")) {
      toTopButton.classList.add("is-visible");
    } else if (scrollTop < offset && toTopButton.classList.contains("is-visible")) {
      toTopButton.classList.remove("is-visible");
    }

    if (scrollTop > headerOffset && !mainHeader.classList.contains("is-active")) {
      mainHeader.classList.add("is-active");
      setTimeout(() => {
        mainHeader.style.position = "fixed";
      }, 300);
      hoverArea.style.display = "block";
    } else if (scrollTop < headerOffset && mainHeader.classList.contains("is-active")) {
      mainHeader.classList.remove("is-active");
      mainHeader.style.position = "absolute";
      hoverArea.style.display = "none";
    }
  }
  scroll();

  function enableHeader() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > headerOffset) {
      mainHeader.classList.add("drop-header");
    }
  }
  function disableHeader() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > headerOffset) {
      mainHeader.classList.remove("drop-header");
    }
  }

  if (headerWrapper) {
    headerWrapper.addEventListener("mouseover", enableHeader);
    headerWrapper.addEventListener("mouseout", disableHeader);
  }
  window.addEventListener("scroll", scroll);
}
