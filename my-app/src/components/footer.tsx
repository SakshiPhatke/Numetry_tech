import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Company Section */}
          <div className="col-md-3">
            <h5 className="text-warning">Company</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Reservation</a></li>
              <li><a href="#" className="text-light text-decoration-none">Privacy Policy</a></li>
              <li><a href="#" className="text-light text-decoration-none">Terms & Conditions</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-3">
            <h5 className="text-warning">Contact</h5>
            <p>123 Street, New York, USA</p>
            <p>+012 345 67890</p>
            <p>info@example.com</p>
            <div className="d-flex gap-3">
              <a href="#" className="text-light"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light"><i className="bi bi-youtube"></i></a>
              <a href="#" className="text-light"><i className="bi bi-linkedin"></i></a>
            </div>
          </div>

          {/* Opening Hours Section */}
          <div className="col-md-3">
            <h5 className="text-warning">Opening</h5>
            <p>Monday - Saturday: 09AM - 09PM</p>
            <p>Sunday: 10AM - 08PM</p>
          </div>

          {/* Newsletter Section */}
          <div className="col-md-3">
            <h5 className="text-warning">Newsletter</h5>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <div className="input-group">
              <input type="email" className="form-control" placeholder="Your email" />
              <button className="btn btn-warning">SIGNUP</button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <hr className="my-4 border-light" />
        <div className="d-flex justify-content-between">
          <p>&copy; Your Site Name, All Rights Reserved.</p>
          <div>
            <a href="#" className="text-light mx-2">Home</a>
            <a href="#" className="text-light mx-2">Cookies</a>
            <a href="#" className="text-light mx-2">Help</a>
            <a href="#" className="text-light mx-2">FAQs</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
