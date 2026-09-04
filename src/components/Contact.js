import React, { useState } from 'react';
import './Contact.css';

const WEB3FORMS_ACCESS_KEY =
  process.env.REACT_APP_WEB3FORMS_ACCESS_KEY;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (submitStatus) {
      setSubmitStatus('');
      setSubmitMessage('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;

    const name = formData.name.trim();
    const email = formData.email.trim();
    const message = formData.message.trim();

    if (!name || !email || !message) {
      setSubmitStatus('error');
      setSubmitMessage('Please fill in all fields.');
      return;
    }

    if (message.length < 10) {
      setSubmitStatus('error');
      setSubmitMessage(
        'Message must be at least 10 characters long.'
      );
      return;
    }

    if (!WEB3FORMS_ACCESS_KEY) {
      setSubmitStatus('error');
      setSubmitMessage(
        'Contact form is not configured. Please add your Web3Forms Access Key to the .env file.'
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('');
    setSubmitMessage('');

    try {
      const response = await fetch(
        'https://api.web3forms.com/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            access_key: WEB3FORMS_ACCESS_KEY,
            name,
            email,
            message,
            subject: `New Contact Message from ${name}`,
            from_name: 'Portfolio Website'
          })
        }
      );

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setSubmitMessage(
          'Thank you! Your message has been sent successfully.'
        );

        setFormData({
          name: '',
          email: '',
          message: ''
        });

        setTimeout(() => {
          setSubmitStatus('');
          setSubmitMessage('');
        }, 6000);
      } else {
        setSubmitStatus('error');
        setSubmitMessage(
          result.message ||
            'Something went wrong. Please try again later.'
        );
      }
    } catch (error) {
      console.error('Contact form error:', error);

      setSubmitStatus('error');
      setSubmitMessage(
        'Unable to send your message. Please check your internet connection and try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        <div className="contact-header">
          <span className="section-subtitle">GET IN TOUCH</span>
          <h2>Contact Me</h2>
          <p>
            Have a project, opportunity, or question?
            Feel free to send me a message.
          </p>
        </div>

        <div className="contact-content">

          <div className="contact-info">

            <div className="contact-info-item">
              <div className="contact-icon">
                ✉
              </div>

              <div>
                <h3>Email</h3>
                <a href="mailto:your@email.com">
                  your@email.com
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                ☎
              </div>

              <div>
                <h3>Phone</h3>
                <a href="tel:+1234567890">
                  +1 234 567 890
                </a>
              </div>
            </div>

            <div className="contact-info-item">
              <div className="contact-icon">
                📍
              </div>

              <div>
                <h3>Location</h3>
                <p>Your Location</p>
              </div>
            </div>

            <div className="contact-social">
              <h3>Connect With Me</h3>

              <div className="social-links">

                <a
                  href="https://github.com/YOUR-USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/YOUR-USERNAME/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  LinkedIn
                </a>

                <a
                  href="https://x.com/YOUR-USERNAME"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X"
                >
                  X
                </a>

              </div>
            </div>

          </div>

          <form
            className="contact-form"
            onSubmit={handleSubmit}
          >

            <div className="form-group">
              <label htmlFor="name">
                Name
              </label>

              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                minLength="2"
                maxLength="100"
                autoComplete="name"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                maxLength="150"
                autoComplete="email"
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                Message
              </label>

              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message..."
                rows="6"
                required
                minLength="10"
                maxLength="2000"
                disabled={isSubmitting}
              />
            </div>

            {submitMessage && (
              <div
                className={`submit-message ${submitStatus}`}
                role="alert"
              >
                {submitMessage}
              </div>
            )}

            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? 'Sending...'
                : 'Send Message'}
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contact;