import React, { useEffect, useRef } from 'react';

const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

const Popup = ({ onClose }) => {
  const backdropRef = useRef(null);

  const handleOutsideClick = (e) => {
    if (e.target === backdropRef.current) {
      onClose();
    }
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      'form-name': 'contact',
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(data),
    })
      .then(() => {
        alert('Thank you for your message. We will get back to you soon.');
        onClose();
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        alert('Oops! There was a problem submitting the form.');
      });
  };

  return (
    <div className="popup show" ref={backdropRef} onClick={handleOutsideClick}>
      <div className="popup-content">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>Get In Touch</h2>
        <form
          name="contact"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          {/* Netlify needs the hidden input for form-name */}
          <input type="hidden" name="form-name" value="contact" />
          <div className="form-group">
            <input type="text" name="name" placeholder="Full Name" required />
          </div>
          <div className="form-group">
            <input type="email" name="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              title="Format: 123-456-7890"
              required
            />
          </div>
          <div className="form-group">
            <textarea name="message" placeholder="Message" required></textarea>
          </div>
          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Popup; 