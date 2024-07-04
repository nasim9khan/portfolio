import './FormStyles.css';
import React from 'react';

const Form = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = 'mailto:nasimakhtarkhan9@gmail.com';
    window.location.href = mailtoLink;
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input type="text" name="name" required />

        <label>Email</label>
        <input type="email" name="email" required />

        <label>Subject</label>
        <input type="text" name="subject" required />

        <label>Message</label>
        <textarea name="message" rows="6" placeholder="Type your message here" required />

        <button type="submit" className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;
