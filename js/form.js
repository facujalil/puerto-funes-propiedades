const contactForm = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-button");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  submitButton.disabled = true;
  submitButton.textContent = "Enviando...";

  emailjs
    .sendForm(
      "service_b0b038a",
      "template_so75imr",
      contactForm,
      "CYgaeAeVZmfaobGxf"
    )
    .then(
      () => {
        window.location.href = "../mensaje-recibido.html";
      },
      (error) => {
        alert(error.text);
        submitButton.disabled = false;
        submitButton.textContent = "Enviar";
        contactForm.reset();
      }
    );
});
