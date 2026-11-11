/* ========================================
   TRABAJO PRACTICO N8
   FERRER | ESTUDIO NOTARIAL
======================================== */


/* ========================================
   ELEMENTOS PRINCIPALES
======================================== */

const welcomeScreen = document.getElementById("welcome-screen");
const discoverButton = document.getElementById("discover-button");
const mainContent = document.getElementById("main-content");

let pageOpened = false;


/* ========================================
   TRANSICION DE BIENVENIDA
======================================== */

function openMainPage() {

    if (pageOpened) return;

    pageOpened = true;

    // Desactivar el botón
    discoverButton.disabled = true;

    // Iniciar salida de la portada
    welcomeScreen.classList.add("hide");

    // Mostrar el contenido principal
    mainContent.classList.add("show");

    // Permitir desplazamiento de la página
    document.body.style.overflow = "auto";

    // Llevar la página al inicio
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}


/* ========================================
   EVENTO DEL BOTON
======================================== */

discoverButton.addEventListener("click", openMainPage);


/* ========================================
   ESTADO INICIAL
======================================== */

document.addEventListener("DOMContentLoaded", () => {

    document.body.style.overflow = "hidden";

    welcomeScreen.classList.remove("hide");
    mainContent.classList.remove("show");

});


/* ========================================
   NAVEGACION SUAVE
======================================== */

const navigationLinks = document.querySelectorAll(
    '.navigation a, .header-button, .brand, .gold-button'
);

navigationLinks.forEach(link => {

    link.addEventListener("click", event => {

        const targetId = link.getAttribute("href");

        if (!targetId || !targetId.startsWith("#")) return;

        const target = document.querySelector(targetId);

        if (!target) return;

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* ========================================
   EFECTO DEL ENCABEZADO AL DESPLAZARSE
======================================== */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});


/* ========================================
   ANIMACION DE ELEMENTOS AL APARECER
======================================== */

const animatedElements = document.querySelectorAll(
    ".service-card, .document-card, .value-item, .contact-item"
);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

animatedElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});


/* ========================================
   AÑO AUTOMATICO DEL FOOTER
======================================== */

const footerCopy = document.querySelector(".footer-copy");

if (footerCopy) {

    const currentYear = new Date().getFullYear();

    footerCopy.textContent =
        `© ${currentYear} Ferrer Estudio Notarial. Todos los derechos reservados.`;

}
