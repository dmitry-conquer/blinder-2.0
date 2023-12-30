const horisontalSpoilers = document.querySelectorAll(".horisontal-spoiler");
const spoilerTriggers = document.querySelectorAll(".spoiler-trigger");

/*
  horisontal spoilers
*/

horisontalSpoilers.forEach(el => {
  el.addEventListener("click", e => {
    horisontalSpoilers.forEach(iel => {
      iel.classList.remove("active-horisontal-spoiler");
    });
    e.target.closest(".horisontal-spoiler").classList.add("active-horisontal-spoiler");
  });
});

/*
  default spoiler
*/

spoilerTriggers.forEach(trigger => {
  if (trigger) {
    trigger.addEventListener("click", showSpoiler);
  }
});

function showSpoiler() {
  this.classList.toggle("active-spoiler");
  const spoilerContent = this.nextElementSibling;
  if (spoilerContent) {
    spoilerContent.classList.toggle("active-spoiler-content");
    const isExpanded = spoilerContent.classList.contains("active-spoiler-content");
    spoilerContent.style.maxHeight = isExpanded ? `${spoilerContent.scrollHeight}px` : "0px";
  }
}
