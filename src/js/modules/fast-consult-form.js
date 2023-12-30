const fastConsultForm = document.getElementById("fast-consult-form");

if (fastConsultForm) {
  fastConsultForm.addEventListener("submit", e => {
    e.preventDefault();
    MicroModal.show("order-result", {
      disableScroll: true,
    });
    MicroModal.close("fast-consult");
  });
}
