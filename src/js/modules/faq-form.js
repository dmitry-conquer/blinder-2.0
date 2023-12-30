const faqForm = document.getElementById("faq-form");

if (faqForm) {
  faqForm.addEventListener("submit", e => {
    e.preventDefault();
    MicroModal.show("order-result", {
      disableScroll: true,
    });
  });
}
