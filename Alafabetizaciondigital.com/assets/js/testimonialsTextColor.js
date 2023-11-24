
// Function to update the text color of testimonials based on the current theme
const updateTestimonialsTextColor = () => {
    const theme = localStorage.getItem('theme') || 'light';
    const testimonials = document.querySelectorAll('.testimonial-text');
    testimonials.forEach(testimonial => {
        testimonial.style.color = theme === 'dark' ? 'white' : 'black'; // Set text color based on theme
    });
};

// Event listener for DOMContentLoaded to initially set the correct text color
document.addEventListener('DOMContentLoaded', (event) => {
    updateTestimonialsTextColor();
});

// Assuming 'theme-switch' is the ID of the theme toggle button
const themeSwitchButton = document.getElementById('theme-switch');
if (themeSwitchButton) {
    themeSwitchButton.addEventListener('click', () => {
        updateTestimonialsTextColor(); // Update text color when theme is toggled
    });
}
