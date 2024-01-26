const contactForm = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-button");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  submitButton.textContent = "Enviando...";

  emailjs.sendForm("default_service", "template_so75imr", contactForm).then(
    () => {
      window.location.href = "../mensaje-recibido.html";
      submitButton.textContent = "Enviar";
      contactForm.reset();
    },
    (error) => {
      alert(JSON.stringify(error));
      contactForm.reset();
    }
  );
});
