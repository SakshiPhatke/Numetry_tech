import React, { useState } from "react";
import "./ContactForm.css";
import envelopeImage from "./assets/images.jpeg";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(""); // Success message state

  const validate = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Enter your name";
    if (!formData.email.trim()) tempErrors.email = "Enter your email";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "Invalid email format";
    if (!formData.message.trim()) tempErrors.message = "Enter the message";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    // Real-time error handling
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form Submitted", formData);
      setSuccessMessage("Successfully sent!"); // Success message set
      setFormData({ name: "", email: "", message: "" }); // Reset form
      setErrors({});
      setTimeout(() => setSuccessMessage(""), 3000); // Hide message after 3 seconds
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <div className="contact-left">
          <img src={envelopeImage} alt="Envelope" className="contact-img" />
        </div>
        <div className="contact-right">
          <h2 className="contact-title">Get in touch</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                type="text" 
                name="name"
                className="form-control" 
                placeholder="Name" 
                value={formData.name} 
                onChange={handleChange} 
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </div>
            <div className="input-group">
              <input 
                type="email" 
                name="email"
                className="form-control" 
                placeholder="Email" 
                value={formData.email} 
                onChange={handleChange} 
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </div>
            <div className="input-group">
              <textarea 
                name="message"
                className="form-control" 
                placeholder="Message"
                value={formData.message} 
                onChange={handleChange} 
              />
              {errors.message && <p className="error-text">{errors.message}</p>}
            </div>
            <button type="submit" className="btn btn-primary btn-block">Send</button>
            {successMessage && <p className="success-text">{successMessage}</p>} {/* Success message */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
