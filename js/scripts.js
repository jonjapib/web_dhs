/* script.js */
function mostrarMensaje() {
    alert('¡Bienvenido a Servicios Tecnológicos! Contáctanos para más información.');
}

function mostrarVentana(ventanaId) {
    var ventana = document.getElementById(ventanaId);
    if (ventana.style.display === "none") {
        ventana.style.display = "block";  // Muestra la ventana
    } else {
        ventana.style.display = "none";  // Oculta la ventana
    }
}


function mostrarVentana(id) {
    let ventana = document.getElementById(id);
    if (ventana.style.display === "none" || ventana.style.display === "") {
        ventana.style.display = "block";
    } else {
        ventana.style.display = "none";
    }
}



document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slide");
    const carousel = document.querySelector(".carousel");
    const dotsContainer = document.querySelector(".dots-container");
    let index = 0;
    const totalSlides = slides.length;

    // Crear indicadores
    slides.forEach((_, i) => {
        let dot = document.createElement("div");
        dot.classList.add("dot");
        if (i === 0) dot.classList.add("active");
        dot.addEventListener("click", () => moveToSlide(i));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll(".dot");

    function moveToSlide(newIndex) {
        index = newIndex;
        let offset = -index * 100; // Mueve el carrusel horizontalmente
        carousel.style.transform = `translateX(${offset}vw)`;

        // Actualizar puntos activos
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    // Cambio automático de slides cada 3 segundos
    setInterval(() => {
        let nextIndex = (index + 1) % totalSlides;
        moveToSlide(nextIndex);
    }, 3000);
});
