// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.getElementById('contactBtn');
    const popupForm = document.getElementById('popupForm');
    const closeBtn = document.querySelector('.close-btn');
  
    // Show popup on button click
    contactBtn.addEventListener('click', () => {
      popupForm.style.display = 'flex'; // Show the popup
    });
  
    // Hide popup on close button click
    closeBtn.addEventListener('click', () => {
      popupForm.style.display = 'none'; // Hide the popup
    });
  
    // Hide popup if clicking outside the popup content
    window.addEventListener('click', (event) => {
      if (event.target === popupForm) {
        popupForm.style.display = 'none';
      }
    });
  });
  