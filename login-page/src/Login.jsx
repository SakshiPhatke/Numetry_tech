import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    // Email validation
    if (!email) {
      errors.email = "Email is required!";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email format!";
      isValid = false;
    }

    // Password validation
    if (!password) {
      errors.password = "Password is required!";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    if (validateForm()) {
      console.log("✅ Login Successful!");
      console.log("Email:", email);
      console.log("Password:", password);
      setMessage("Login Successful!");
      setErrors({});
    } else {
      setMessage("Please fix the errors above.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>LOGIN</h2>
        <p>Please enter your email and password!</p>

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="input-group">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          {/* Password Input */}
          <div className="input-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>

          <a href="#">Forgot password?</a>

          {/* Submit Button */}
          <button type="submit" className="login-btn">Login</button>

          {/* Success or Error Message */}
          {message && (
            <p className={message === "Login Successful!" ? "success" : "error"}>
              {message}
            </p>
          )}
        </form>

        {/* Social Icons */}
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-twitter"></i>
          <i className="fas fa-smile"></i>
        </div>
      </div>
    </div>
  );
};

export default Login;
