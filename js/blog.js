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
    const navMenu = document.querySelector('nav');
    
    menuToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
            }
        });
    });
});