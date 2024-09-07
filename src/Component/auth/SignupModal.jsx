import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import './SignupModal.css';

const AuthModal = ({ isOpen, onClose }) => {
  const [isSignup, setIsSignup] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setError(null); // Clear errors when switching forms
  };

  if (!isOpen) return null;

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up:', userCredential);
      // Optionally, redirect user to another page after successful sign-up
      onClose(); // Close the popup
    } catch (error) {
      console.error('Error during sign up:', error);
      setError(error.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in:', userCredential);
      navigate('/');
      onClose();
    } catch (error) {
      console.error('Error during sign in:', error);
      setError(error.message);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        {isSignup ? (
          <div id="signup-form">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
              <label htmlFor="signup-email">Email:</label>
              <input
                type="email"
                id="signup-email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="signup-password">Password:</label>
              <input
                type="password"
                id="signup-password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="error">{error}</p>}
              <button type="submit">Sign Up</button>
            </form>
            <p>
              Already have an account? <a href="#" onClick={toggleForm}>Sign In</a>
            </p>
          </div>
        ) : (
          <div id="signin-form">
            <h2>Sign In</h2>
            <form onSubmit={handleSignIn}>
              <label htmlFor="signin-email">Email:</label>
              <input
                type="email"
                id="signin-email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="signin-password">Password:</label>
              <input
                type="password"
                id="signin-password"
                name="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {error && <p className="error">{error}</p>}
              <button type="submit">Sign In</button>
            </form>
            <p>
              Don't have an account? <a href="#" onClick={toggleForm}>Sign Up</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
