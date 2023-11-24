
// Suponiendo que tienes los datos de beneficios disponibles en este script
const benefitsData = {
    // ... tus datos de beneficios aquí
};

// La función que genera el HTML basado en tus datos de beneficios
function generateBenefitsHtml(benefitsData) {
    // ... lógica para generar HTML
}

// Insertar el HTML generado en la página
document.addEventListener('DOMContentLoaded', (event) => {
    const benefitsHtml = generateBenefitsHtml(benefitsData);
    document.getElementById('benefits-container').innerHTML = benefitsHtml;
});
