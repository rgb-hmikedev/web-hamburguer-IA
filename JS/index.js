document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling para la navegación
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Validación básica del formulario de contacto
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Evita el envío por defecto del formulario

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name === '' || email === '' || message === '') {
                alert('Por favor, completa todos los campos del formulario.');
                return;
            }

            // Aquí puedes añadir la lógica para enviar el formulario
            // Por ejemplo, usando Fetch API para enviarlo a un servidor
            // fetch('tu_servidor_de_contacto.php', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({ name, email, message }),
            // })
            // .then(response => response.json())
            // .then(data => {
            //     alert('Mensaje enviado con éxito. ¡Gracias!');
            //     contactForm.reset();
            // })
            // .catch((error) => {
            //     console.error('Error:', error);
            //     alert('Hubo un error al enviar tu mensaje. Inténtalo de nuevo más tarde.');
            // });

            alert('¡Gracias por tu mensaje, ' + name + '! Nos pondremos en contacto contigo pronto.');
            contactForm.reset(); // Limpia el formulario después del envío
        });
    }

    // Puedes añadir más interactividad aquí, como:
    // - Un carrusel de imágenes para las promociones
    // - Animaciones al hacer scroll (usando Intersection Observer API)
    // - Un modal para mostrar los detalles de cada hamburguesa
});