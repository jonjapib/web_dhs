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


document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Solo agregar evento si el botón existe (en móviles)
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace (para móviles)
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }
});