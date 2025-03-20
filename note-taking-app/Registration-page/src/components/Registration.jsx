import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Registration.css"; // Custom CSS
import bgImage from "../assets/img3.jpg"; // Add your image here

const Registration = () => {
  const [formData, setFormData] = useState({
    name: "",
    birthdate: "",
    gender: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [, setIsSubmitted] = useState(false); // Success message state

//Form Validation
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.birthdate) errors.birthdate = "Birthdate is required";
    if (!formData.gender) errors.gender = "Gender is required";
    if (!formData.email.includes("@")) errors.email = "Invalid email";
    if (!formData.phone.match(/^\d{10}$/)) errors.phone = "Invalid phone number";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true); // Show success message
      setFormData({ name: "", birthdate: "", gender: "", email: "", phone: "" }); // Clear form
      console.log("Form Submitted", formData);
    }
  };

  return (
    <div className="registration-container">
      <div className="left-section">
        <img src={bgImage} alt="Registration" />
      </div>
      <div className="right-section">
        <h2>Registration Info</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="form-control"
            />
            {errors.name && <small className="error">{errors.name}</small>}
          </div>
          <div className="form-group">
            <input
              type="date"
              name="birthdate"
              value={formData.birthdate}
              onChange={handleChange}
              className="form-control"
            />
            {errors.birthdate && <small className="error">{errors.birthdate}</small>}
          </div>
          <div className="form-group">
            <select name="gender" value={formData.gender} onChange={handleChange} className="form-control">
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.gender && <small className="error">{errors.gender}</small>}
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="form-control"
            />
            {errors.email && <small className="error">{errors.email}</small>}
          </div>
          <div className="form-group">
            <input
              type="text"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-control"
            />
            {errors.phone && <small className="error">{errors.phone}</small>}
          </div>
          <button type="submit" className="btn btn-success">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Registration;
