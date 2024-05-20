// Función para mostrar un mensaje emergente
function showMessage() {
    alert('¡Gracias por visitar esta página especial, amiga!');
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Event listener para el botón de mostrar mensaje
document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('showMessageButton').addEventListener('click', showMessage);
});
