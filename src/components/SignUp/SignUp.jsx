import React, { useState } from "react";
import "./SignUp.css";
import { useNavigate } from "react-router-dom";
import profile from "../../Assets/profile.png"
const SignUp = () => {
  const [username, setUsername] = useState("");
  const [email, setemailname] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const errors = {
    username: "Invalid username",
    email: "Invalid Email",
    noEmail: "Please enter your Email",
    password: "Invalid password",
    noUsername: "Please enter your username",
    noPassword: "Please enter your password",
    invalidEmail: "Invalid email format",
    ComparePassword: "Passwords don't match",
  };
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username) {
      setErrorMessages({ name: "noUsername", message: errors.noUsername });
      return;
    }
    if (!email) {
      setErrorMessages({ name: "noEmail", message: errors.noEmail });
      return;
    } else if (!isValidEmail(email)) {
      setErrorMessages({ name: "invalidEmail", message: errors.invalidEmail });
    }

    if (!password) {
      setErrorMessages({ name: "noPassword", message: errors.noPassword });
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessages({
        name: "ComparePassword",
        message: errors.ComparePassword,
      });
    } else {
      setErrorMessages("");
    }
  };

  // Render error messages
  const renderErrorMsg = (name) =>
    name === errorMessages.name && (
      <p className="error_msg">{errorMessages.message}</p>
    );
  const handleImageUpload = (file) => {
    setSelectedImage(file);
  };

  return (
    <div className="Outercontainer">
      <div className="Container">
        <h1 className="title">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="inputs_container">
          <label className="image_preview" htmlFor="imageInput">
            <input
              id="imageInput"
              type="file"
              accept="image/*"
              onChange={(e) => handleImageUpload(e.target.files[0])}
              style={{ display: "none" }}
            />
            {selectedImage ? (
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected"
                className="circular_image"
              />
            ) : (
              <div className="circular_image_placeholder">
               <img src={profile} alt="selected image"/>
              </div>
            )}
          </label>

            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            {renderErrorMsg("username")}
            {renderErrorMsg("noUsername")}
            <input
              type="Email"
              placeholder="Email"
              value={email}
              onChange={(e) => setemailname(e.target.value)}
            />
            {renderErrorMsg("email")}
            {renderErrorMsg("noEmail")}
            {renderErrorMsg("invalidEmail")}
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {renderErrorMsg("password")}
            {renderErrorMsg("noPassword")}
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {renderErrorMsg("password")}
            {renderErrorMsg("noPassword")}
            {renderErrorMsg("ComparePassword")}
          </div>
          <input type="submit" value="Sign Up" className="signup_button" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
