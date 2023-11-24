
document.addEventListener('DOMContentLoaded', function () {
    var ctaButtons = document.querySelectorAll('.cta-button');
    ctaButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Aquí puedes definir lo que sucede cuando se hace clic en el botón.
            // Por ejemplo: alert('Botón pulsado!');
        });
    });
});
