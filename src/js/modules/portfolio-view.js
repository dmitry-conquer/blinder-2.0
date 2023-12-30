const viewsListBtn = document.getElementById("view-as-list");
const viewsPhotosBtn = document.getElementById("view-as-photo");
const viewSwitchersWrapper = document.getElementById("view-switchers");
const photosContent = document.getElementById("portfolio-photos-content");
const listContent = document.getElementById("portfolio-list-content");


if (viewsListBtn) {
  function changeView(e) {
    if (e.target.closest("#view-as-photo")) {
      viewsListBtn.classList.remove("active-view-tigger");
      viewsPhotosBtn.classList.add("active-view-tigger");
      listContent.classList.remove("active-view");
      photosContent.classList.add("active-view");
    }
    if (e.target.closest("#view-as-list")) {
      viewsPhotosBtn.classList.remove("active-view-tigger");
      viewsListBtn.classList.add("active-view-tigger");
      photosContent.classList.remove("active-view");
      listContent.classList.add("active-view");
    }
  }
  
  viewSwitchersWrapper.addEventListener("click", changeView);
}

