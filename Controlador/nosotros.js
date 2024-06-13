document.addEventListener('DOMContentLoaded', function () {
    // Example: Simple fade-in effect for sections
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transition = 'opacity 1s ease-in-out';
        section.getBoundingClientRect(); // Trigger reflow
        section.style.opacity = 1;
    });
});
