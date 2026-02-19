// Animación de aparición al hacer scroll
const scrollReveal = () => {
  const elements = document.querySelectorAll(".reveal");
  elements.forEach((el) => {
    const elementTop = el.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight - 80;
    if (elementTop < triggerPoint) {
      el.classList.add("active");
    }
  });
};

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);

// Restauración de Navegación Suave con Gestión de Foco (Accesible)
document.querySelectorAll("nav a, .skip-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const id = this.getAttribute("href");
    const target = document.querySelector(id);

    if (target) {
      const offset = document.querySelector("nav").offsetHeight + 30;
      const position = target.offsetTop - offset;

      window.scrollTo({
        top: position,
        behavior: "smooth",
      });

      // Movemos el foco real para que la navegación por teclado siga desde aquí
      target.focus({ preventScroll: true });
    }
  });
});