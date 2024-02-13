import React, { useState, useEffect } from 'react';
import './contact.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [profilePicture, setProfilePicture] = useState(null);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
    setShowLoginForm(false);
  };

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowSignUpForm(false);
  };

  const handleProfilePictureChange = (event) => {
    setProfilePicture(event.target.files[0]);
  };

  const handleSignUpSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    formData.append('profilePicture', profilePicture);

    try {
      const response = await fetch('/signup', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Sign-up successful');
        // Reset form and profile picture state
        event.target.reset();
        setProfilePicture(null);
      } else {
        console.log('Sign-up failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLoginSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    try {
      const response = await fetch('/login', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Login successful');
        // Reset form state
        event.target.reset();
      } else {
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <h2
        data-aos="fade-up"
        style={{
          display: 'inline-block',
          marginRight: '20px',
          cursor: 'pointer',
          color: showLoginForm ? 'red' : 'inherit',
        }}
        onClick={handleLoginClick}
      >
        Login
      </h2>
      <h2
        data-aos="fade-left"
        style={{
          display: 'inline-block',
          cursor: 'pointer',
          color: showSignUpForm ? 'red' : 'inherit',
        }}
        onClick={handleSignUpClick}
      >
        Sign up
      </h2>

      {showSignUpForm && (
        <form id="signupForm" method="post" onSubmit={handleSignUpSubmit}>
          <div>
            <div className="profilePictureContainer">
              <input type="file" id="profilePicture" name="profilePicture" onChange={handleProfilePictureChange} />
              {profilePicture && <img src={URL.createObjectURL(profilePicture)} alt="Profile Picture" />}
            </div>
            <label htmlFor="profilePicture">Profile Picture</label>
          </div>
          <div>
            <label htmlFor="fullname">Full Name</label>
            <input type="text" id="fullname" name="fullname" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" required />
          </div>
          <div>
            <label htmlFor="phoneNumber">Phone number</label>
            <input type="text" id="phoneNumber" name="phoneNumber" required />
          </div>
          <div>
            <label htmlFor="signuppassword">Password</label>
            <input type="password" id="signuppassword" name="signuppassword" required />
          </div>
          <div>
            <input type="submit" value="Sign-up" />
          </div>
        </form>
      )}

      {showLoginForm && (
        <form id="loginForm" method="post" onSubmit={handleLoginSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <div>
            <input type="checkbox" id="rememberMe" name="rememberMe" />
            <label htmlFor="rememberMe">Remember Me</label>
          </div>
          <div>
            <input type="submit" value="Login" />
          </div>
        </form>
      )}
    </div>
  );
};

export default Contact;