// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contactBtn');
    const popupForm = document.getElementById('popupForm');
    const closeBtn = document.querySelector('.close-btn');

    // Show popup with animation
    contactBtn.addEventListener('click', () => {
        popupForm.style.display = 'flex';
        // Give the browser a moment to apply the new display style
        setTimeout(() => popupForm.classList.add('show'), 10);
    });

    // Hide popup with animation
    function hidePopup() {
        popupForm.classList.remove('show');
        setTimeout(() => (popupForm.style.display = 'none'), 300);
    }

    // Hide popup on close button click
    closeBtn.addEventListener('click', hidePopup);

    // Hide popup if clicking outside the popup content
    window.addEventListener('click', (event) => {
        if (event.target === popupForm) hidePopup();
    });

    // Handle form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Thank you for your message. We will get back to you soon.');
        hidePopup();
    });
});

// Fade-in whole page after all assets load
window.addEventListener('load', () => {
    document.body.classList.add('page-loaded');
});
  