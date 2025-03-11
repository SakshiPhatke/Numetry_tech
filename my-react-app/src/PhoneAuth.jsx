import React, { useState } from "react";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../firebaseConfig";

const PhoneAuth = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);

  // Function to set up Recaptcha
  const setUpRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier("recaptcha-container", {

      size: "invisible",
      callback: (response) => {
        console.log("Recaptcha Verified", response);
      },
    });
  };

  // Function to send OTP
  const sendOTP = async () => {
    if (phone === "") {
      alert("Please enter a valid phone number.");
      return;
    }
    setUpRecaptcha();

    try {
      const confirmation = await signInWithPhoneNumber(auth, phone, window.recaptchaVerifier);
      setConfirmationResult(confirmation);
      alert("OTP sent successfully!");
    } catch (error) {
      console.error("Error sending OTP:", error);
      alert("Failed to send OTP. Try again.");
    }
  };

  // Function to verify OTP
  const verifyOTP = async () => {
    if (!otp || !confirmationResult) {
      alert("Please enter OTP.");
      return;
    }

    try {
      const result = await confirmationResult.confirm(otp);
      alert(`Phone number verified successfully! Welcome ${result.user.phoneNumber}`);
    } catch (error) {
      console.error("Error verifying OTP:", error);
      alert("Invalid OTP. Try again.");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Phone Authentication</h2>
      <input
        type="text"
        placeholder="Enter Phone Number (e.g. +91XXXXXXXXXX)"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={sendOTP}>Send OTP</button>

      <div id="recaptcha-container"></div>

      <br />

      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={verifyOTP}>Verify OTP</button>
    </div>
  );
};

export default PhoneAuth;
